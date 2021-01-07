import Vue from 'vue';
import createStore from './store/store.js';
import createRouter from './router';
import App from './App.vue';
// const cors = require('koa2-cors');

import axios from './api/httpRequest';

Vue.prototype.$axios = axios;

Vue.use(axios)
// Vue.use(VueWechatTitle);
// App.use(cors());

export function createApp () {
  const store = createStore();
  const router = createRouter();

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });

  return { app, store, router, App };
}