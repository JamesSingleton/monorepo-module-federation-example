const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

module.exports = {
  // If only one entry, how does webpack know to build modules/users?
  entry: './modules/root/src/index.js',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    historyApiFallback: true,
    hot: false,
    hotOnly: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
  output: {
    publicPath: '/',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.mjs'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        exclude: /node_modules/,
        options: {
          presets: [require.resolve('@babel/preset-react')],
        },
      },
    ],
  },
  // TODO: Add Users here as well?
  plugins: [
    new ModuleFederationPlugin({
      name: 'root',
      filename: 'rootRemoteEntry.js',
      remotes: {
        users: 'users@http://localhost:3000/usersRemoteEntry.js',
        root: 'root@http://localhost:3000/rootRemoteEntry.js',
      },
      exposes: {
        './HomePage': './modules/root/src/HomePage',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new ModuleFederationPlugin({
      name: 'users',
      filename: 'usersRemoteEntry.js',
      remotes: {
        users: 'users@http://localhost:3000/usersRemoteEntry.js',
        root: 'root@http://localhost:3000/rootRemoteEntry.js',
      },
      exposes: {
        './routes': './modules/users/src/routes',
        './UsersPage': './modules/users/src/UsersPage',
        './TestPage': './modules/users/src/TestPage',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      // excludeChunks: ['root', 'users'],
    }),
  ],
};
