import Vue from 'vue'
import App from './App.vue'

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
  },
  methods: {
    changeMsg() {
      this.message = 'Hello World!'
    }
  }
})



// // debugger
// // class Dep {
// //   constructor () {
// //       this.subs = [];
// //   }

// //   addSub (sub) {
// //       this.subs.push(sub);
// //   }

// //   notify () {
// //       this.subs.forEach((sub) => {
// //           sub.update();
// //       })
// //   }
// // }

// // class Watcher {
// //   constructor () {
// //       Dep.target = this;
// //   }

// //   update () {
// //       console.log("视图更新啦～");
// //   }
// // }

// // function observer (value) {
// //   if (!value || (typeof value !== 'object')) {
// //       return;
// //   }
  
// //   Object.keys(value).forEach((key) => {
// //       defineReactive(value, key, value[key]);
// //   });
// // }

// // function defineReactive (obj, key, val) {
// //   const dep = new Dep();
  
// //   Object.defineProperty(obj, key, {
// //       enumerable: true,
// //       configurable: true,
// //       get: function reactiveGetter () {
// //           dep.addSub(Dep.target);
// //           return val;         
// //       },
// //       set: function reactiveSetter (newVal) {
// //           if (newVal === val) return;
// //           val = newVal;
// //           dep.notify();
// //       }
// //   });
// // }

// // class Vue {
// //   constructor(options) {
// //       this._data = options.data;
// //       observer(this._data);
// //       new Watcher();
// //       console.log('render~', this._data.test);
// //   }
// // }

// // let o = new Vue({
// //   data: {
// //       test: "I am test."
// //   }
// // });
// // o._data.test = "hello,test.";


// debugger
// class Dep {
//     constructor () {
//         this.subs = [];
//     }

//     addSub (sub) {
//         this.subs.push(sub);
//     }

//     notify () {
//         this.subs.forEach((sub) => {
//             sub.update();
//         })
//     }
// }

// class Watcher {
//     constructor () {
//         debugger
//         Dep.target = this;
//     }

//     update () {
//         console.log("视图更新啦～");
//     }
// }

// function observer (value) {
//     if (!value || (typeof value !== 'object')) {
//         return;
//     }
    
//     Object.keys(value).forEach((key) => {
//         defineReactive(value, key, value[key]);
//     });
// }

// function defineReactive (obj, key, val) {
//     const dep = new Dep();
    
//     Object.defineProperty(obj, key, {
//         enumerable: true,
//         configurable: true,
//         get: function reactiveGetter () {
//             debugger
//             dep.addSub(Dep.target);
//             return val;         
//         },
//         set: function reactiveSetter (newVal) {
//             if (newVal === val) return;
//             val = newVal;
//             dep.notify();
//         }
//     });
// }

// class Vue {
//     constructor(options) {
//         this._data = options.data;
//         observer(this._data);
//         new Watcher();
//         console.log('render~', this._data.test);
//         console.log('render~', this._data.c);
//     }
// }

// let o = new Vue({
//     data: {
//         test: "I am test.",
//         c: '123123'
//     }
// });
// o._data.test = "hello,test.";

// debugger
// Dep.target = null;