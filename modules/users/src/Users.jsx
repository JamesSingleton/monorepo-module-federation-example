import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import localRoutes from './routes';

const routes = [...localRoutes];

const Users = () => (
  <BrowserRouter>
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

export default Users;
