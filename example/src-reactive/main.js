import Vue from 'vue'

new Vue({
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