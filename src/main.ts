import Vue from 'vue';
import injectGlobalComponents from '@/plugins/injectGlobalComponents';
import App from './App.vue';
import store from './store';
import i18n from './i18n';

Vue.config.productionTip = false;
injectGlobalComponents();
new Vue({
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
