import Vue from 'vue';
import Router from 'vue-router';
import BlindtestView from './views/Blindtest.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: BlindtestView
    },
    {
      path: '/binomial',
      name: 'binomial',
      component: () => import(/* webpackChunkName: "binomialtest" */ './views/Binomial.vue')
    },
    {
      path: '/help',
      name: 'help',
      component: () => import(/* webpackChunkName: "help" */ './views/Help.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ],
  linkExactActiveClass: 'has-text-highlighted'
});
