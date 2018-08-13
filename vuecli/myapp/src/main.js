import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'

import '@/assets/js/rem.js'
import '@/assets/css/reset.css'
import store from './store'

Vue.config.productionTip = false
global.API_PROXY = 'https://bird.ioliu.cn/v2?url=';
global.activeNav = "movie"
new Vue({
  data:{
    navActive:"101"
  },

  router,
  store,
  render: h => h(App)
}).$mount('#app')
