import { lazy } from 'react';

const routes = [
  {
    path: '/',
    component: lazy(() => import('@components/HomePage/HomePage.jsx'))
  },
  {
    path: '/blog',
    component: lazy(() => import('@components/Blog/Blog.jsx'))
  }
];

export default routes;
