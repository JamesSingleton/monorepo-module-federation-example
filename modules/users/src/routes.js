import React from 'react';

const UsersPage = React.lazy(() => import('./UsersPage'));
const TestPage = React.lazy(() => impost('./TestPage'));

const routes = [
  {
    path: '/users/test',
    component: TestPage,
    exact: true,
  },
];

export default routes;