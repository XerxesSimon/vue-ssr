<template>
  <div class="foo">
    <h1 @click="onHandleClick">Foo</h1>
    <p>ompoent {{data}}</p>
  </div>
</template>

<script>
// import { signup } from '@/api/base'
import { test } from '../api/base'
export default {
  data () {
    return {
      data: '111'
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    // test() {
    //   this.data = '3333'
    //   alert("33333")
    // },
    async init () {
      // alert("88888118888")
      this.data = '2222'
      const res = await test()
      // this.data = res.data
      // alert(this.data)
      // this.data = '333333333'
    },
    onHandleClick () {
      alert('foo');
    }

  },
}
</script>

<style>
.foo {
  background: yellow;
}
</style>
