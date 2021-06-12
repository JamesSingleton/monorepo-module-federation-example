import React from 'react';

const TestPage = React.lazy(() => import('./TestPage'));

const routes = [
  {
    path: '/users/test',
    component: TestPage,
    exact: true,
  },
];

export default routes;
