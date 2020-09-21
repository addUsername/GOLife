import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import store from "./store";
//import Pre3d from '@/Pre3d/pre3d.js';
//import pre3d_shape_utils from './Pre3d/pre3d_shape_utils.js';
//import DemoUtils from './Pre3d/demo_utils.js';
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
