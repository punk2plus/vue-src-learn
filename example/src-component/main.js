import App from './App.vue'
import Vue from 'vue'
// debugger
// import App from './App.vue'

import big from './big.vue'


Vue.use(big); 


debugger 
var app = new Vue({
  el: '#app',
  // 这里的 h 是 createElement 方法
  render: h => {
    debugger
    return h(App)
  }
})

debugger 
Vue.component('big', big); //初始化组件

console.log('===>>123123')