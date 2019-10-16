import Vue from 'vue';
import VueRouter from 'vue-router';
import Auth from '../components/Auth.vue';
import Modules from '../components/Modules.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/auth',
    name: 'auth',
    component: Auth,
  },
  {
    path: '/',
    redirect: {
      name: 'auth',
    },
  },
  {
    path: '/modules',
    name: 'modules',
    component: Modules,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (window.$cookies.get('token') == null && to.path !== '/auth') {
    next('/auth');
  } else {
    next();
  }
});

export default router;
