import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import vuetify from './plugins/vuetify';
import './plugins/cookies';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app');
