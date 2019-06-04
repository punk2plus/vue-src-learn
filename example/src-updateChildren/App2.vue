<!-- 复用的元素在中间 -->
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
  name: "App2",
  data() {
    return {
      items: [
          {id: 1, val: 'A'},
          {id: 2, val: 'B'},
          {id: 3, val: 'C'},
          {id: 4, val: 'D'}
        ]
    };
  },
  methods: {
    change() {
      this.items = [{ id: 3, val: "3F" }];
    }
  }
};
</script>