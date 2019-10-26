import Vue from 'vue';
import VueRouter from 'vue-router';
import Auth from '../components/Auth.vue';
import Modules from '../components/Modules.vue';
import store from '../store';

Vue.use(VueRouter);

export const routes = [
  {
    path: '/auth',
    alias: '/',
    name: 'auth',
    component: Auth,
  },
  {
    path: '/modules',
    name: 'modules',
    component: Modules,
    meta: {
      title: 'Модули',
      index: 0,
    },
  },
  {
    path: '/plans',
    name: 'plans',
    component: Modules,
    meta: {
      title: 'Планы обучения',
      index: 1,
    },
  },
  {
    path: '/users',
    name: 'users',
    component: Modules,
    meta: {
      title: 'Пользователи',
      index: 3,
    },
  },
  {
    path: '/results',
    name: 'results',
    component: Modules,
    meta: {
      title: 'Результаты',
      index: 2,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  await Vue.nextTick();
  if (!store.getters.isAuthorized && to.path !== '/auth') {
    next('/auth');
  } else {
    next();
  }
});

export default router;
