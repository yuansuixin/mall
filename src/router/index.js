import Vue from 'vue';
import Router from 'vue-router';
// import Home from 'pages/home';
// import Category from 'pages/category';
// import Cart from 'pages/cart';
// import Personal from 'pages/personal';
// import Search from 'pages/search';
// import Product from 'pages/product';

Vue.use(Router);

const routes = [
  {
    name: 'home',
    path: '/home',
    component: () => import('pages/home'), // 页面的懒加载
    children: [
      {
        name: 'home-product',
        path: 'product/:id',
        component: () => import('pages/product')
      }
    ]
  },
  {
    name: 'category',
    path: '/category',
    component: () => import('pages/category')
  },
  {
    name: 'personal',
    path: '/personal',
    component: () => import('pages/personal')
  },
  {
    name: 'search',
    path: '/search',
    component: () => import('pages/search')
  },
  {
    name: 'cart',
    path: '/cart',
    component: () => import('pages/cart')
  },
  {
    path: '*',
    redirect: '/home'
  }
];

export default new Router({
  routes
});
