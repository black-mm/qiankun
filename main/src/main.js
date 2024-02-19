import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start ,setDefaultMountApp} from 'qiankun';

registerMicroApps([
  {
    name: 'sub-vue', // app name registered
    entry:'//localhost:7777/sub-vue',
    container: '#subapp-viewport',
    activeRule: '/sub-vue',
  },
]);
start();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
