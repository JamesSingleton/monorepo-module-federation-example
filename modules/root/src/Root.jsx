import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import remoteRoutes from 'users/routes';

import localRoutes from './routes';
import Navigation from './Navigation';
// TODO: add routes from sub modules below

// then include sub module routes here
const routes = [...localRoutes, ...remoteRoutes];

const Root = () => (
  <BrowserRouter>
    <Navigation />
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
      </Switch>
    </React.Suspense>
  </BrowserRouter>
);

export default Root;
