import React from 'react';

const HomePage = React.lazy(() => import('./HomePage'));
const UsersPage = React.lazy(() => import('users/HomePage'));

const routes = [
  {
    path: '/',
    component: HomePage,
    exact: true,
  },
  {
    path: '/users',
    component: UsersPage,
  },
];

export default routes;
