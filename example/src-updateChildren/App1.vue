<!-- 空元素 + 新元素 -->
<template>
  <div id="app">
    <div>
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.val }}</li>
      </ul>
    </div>
    <button @click="change">change</button>
  </div>
</template>

<script>
export default {
  name: "App1",
  data() {
    return {
      items: []
    };
  },
  methods: {
    change() {
      this.items = [{ id: 1, val: "A" }];
    }
  }
};
</script>