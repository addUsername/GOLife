import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
//import Pre3d from '@/Pre3d/pre3d.js';
//import pre3d_shape_utils from './Pre3d/pre3d_shape_utils.js';
//import DemoUtils from './Pre3d/demo_utils.js';
Vue.config.productionTip = false

localStorage.setItem('SIZE', "5")
localStorage.setItem('HEIGHT', 5);
localStorage.setItem('FOCAL_LENGTH', 3);
localStorage.setItem('FPS', 1);
//RULES
localStorage.setItem('MINNEI', 2);
localStorage.setItem('MAXNEI', 3);
localStorage.setItem('MAGICNEI', 3);
localStorage.setItem('GARBAGE', true);
//COLORS


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
