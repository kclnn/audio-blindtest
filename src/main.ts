import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Buefy from 'buefy';
import './style/styles.scss';

Vue.use(Buefy);

Vue.config.productionTip = false;
Vue.config.ignoredElements = ['paper-audio-player'];

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
