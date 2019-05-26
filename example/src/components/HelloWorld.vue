<template>
  <p class="hello">12312</p>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    change () {
      this.msg = '1111'
    }
  }
}
</script>