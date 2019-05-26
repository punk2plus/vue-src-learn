<template>
  <div>
    <HelloWorld/>
    <big />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'ccc',
  components: {
    HelloWorld
  },
  created() {
    console.log(11)
  }
}
</script>