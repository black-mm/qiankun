import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start ,setDefaultMountApp} from 'qiankun';
import "@/styles/index.scss"

registerMicroApps([
  {
    name: 'sub-vue',
    entry:process.env.VUE_APP_SUB_VUE,
    container: '#subapp-viewport',
    activeRule: '/sub-vue',
  },
  {
    name: 'sale', 
    entry:process.env.VUE_APP_SALE,
    container: '#subapp-viewport',
    activeRule: '/sale',
  },
]);
start();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
