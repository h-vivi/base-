// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/* use Keen-UI & remember to import stylesheet via link tag or require */
import KeenUI from 'keen-ui';

import Vue from 'vue';
import App from './App';
import router from './router';

import './directives/pull-up-refresh';

Vue.use(KeenUI);

/* import basic stylesheets */
require('./styles/normalize.css');
require('./styles/base.css');
require('./styles/common.css');

/* import keen-ui stylesheet */
// eslint-disable-next-line
process.env.NODE_ENV === 'development'
  ? require('./styles/keen-ui.css')
  : require('./styles/keen-ui.min.css');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});

Vue.config.errorHandler = function handler(error) {
  /* eslint-disable no-console */
  console.log(error);
};
