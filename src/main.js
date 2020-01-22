import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入字体图标
import './assets/css/iconfont.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
