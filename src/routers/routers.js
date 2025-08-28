import { lazy } from 'react';

const routes = [
  {
    path: '/',
    component: lazy(() => import('@components/HomePage/HomePage.jsx'))
  },
  {
    path: '/blog',
    component: lazy(() => import('@components/Blog/Blog.jsx'))
  },
  {
    path: '/shop',
    component: lazy(() => import('@pages/OurShop/OurShop.jsx'))
  },
  {
    path: '/cart',
    component: lazy(() => import('@pages/Cart/Cart.jsx'))
  },
  {
    path: '/product/:id',
    component: lazy(() => import('@pages/DetailProduct/DetailProduct.jsx'))
  },
  {
    path: '/about-us',
    component: lazy(() => import('@pages/AboutUs'))
  }
];

export default routes;
