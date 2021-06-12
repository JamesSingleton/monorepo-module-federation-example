import React from 'react';

const HomePage = React.lazy(() => import('./HomePage'));
const UsersPage = React.lazy(() => import('users/UsersPage'));

const Test = () => <div>Hello</div>;

const routes = [
  {
    path: '/',
    component: HomePage,
    exact: true,
  },
  {
    path: '/users',
    component: UsersPage,
    exact: true,
  },
];

export default routes;
