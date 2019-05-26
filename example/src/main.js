// // // The Vue build version to load with the `import` command
// // // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// // import Vue from 'vue'
// // import App from './App.vue'

// // const b = App;
// // var app = new Vue({
// //   el: '#app',
// //   // 这里的 h 是 createElement 方法
// //   render: h => {
// //     return h(b)
// //   }
// //   // data: {
// //   //   message: 'Hello Vue!'
// //   // }
// // })


// import Vue from 'vue'

// // let childComp = {
// //   template: '<div>{{msg}}</div>',
// //   created() {
// //     console.log('child created')
// //   },
// //   mounted() {
// //     console.log('child mounted')
// //   },
// //   data() {
// //     return {
// //       msg: 'Hello Vue'
// //     }
// //   }
// // }

// const html = '<ul class="list" v-if="isShow"><li v-for="(item,index) in data" @click="clickItem(index)">{{item}}:{{index}}</li></ul>'

// Vue.mixin({
//   created() {
//     console.log('parent created')
//   }
// })

// let app = new Vue({
//   el: '#app',
//   // render: h => h(childComp)
//   data: {
//     isShow: true,
//     data: [1, 2,3]
//   },
//   template: html
// })


import Vue from 'vue'
import App from './App.vue'
import big from './big.vue'


Vue.use(big); 
debugger 
Vue.component('big', big); //初始化组件

var app = new Vue({
  el: '#app',
  // 这里的 h 是 createElement 方法
  render: h => h(App)
})

