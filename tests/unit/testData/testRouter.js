import VueRouter from 'vue-router';
import Auth from '@/components/Auth.vue';
import Modules from '@/components/Modules.vue';

const routes = [
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
  routes,
});

router.beforeEach((to, from, next) => {
  if (window.$cookies.get('token') == null && to.path !== '/auth') {
    next('/auth');
  } else {
    next();
  }
});

export { routes, router };
