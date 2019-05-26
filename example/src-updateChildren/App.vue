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
    name: 'App',
    data() {
      return {
        items: [
          {id: 10, val: 'A'},
          {id: 11, val: 'B'},
          {id: 12, val: 'C'},
          {id: 13, val: 'D'}
        ]
      }
    },
    methods: {
      change() {
        //case1 
        // this.items.reverse().push({id: 4, val: 'E'})
        //case2
        // this.items = [{id: 3, val: 'C'}]
        //case3 如何插入，如何删除
        this.items = [{id: 13, val: 'D'}]
        //case4 先插入，然后删掉其他
        // this.items = [{id: 4, val: 'E'}]

      }
    }
  }
</script>