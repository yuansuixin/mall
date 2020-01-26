import 'babel-polyfill';
import Vue from 'vue'; // 凡是从node_modules下引入的都是直接写模块名，从自己代码中引入的需要有路径
import App from './App';
import router from './router';
import 'assets/scss/index.scss';
import fastclick from 'fastclick';

import 'swiper/dist/css/swiper.css';

fastclick.attach(document.body);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
