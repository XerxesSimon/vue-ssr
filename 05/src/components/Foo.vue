<template>
  <div class="foo">
    <h1 @click="onHandleClick">Foo</h1>
    <p>omponent {{test}}</p>
  </div>
</template>

<script>
// import { signup } from '@/api/base'
import { test } from '../api/base'
export default {
  data() {
    return {
      test: 'ddd'
    }
  },
  mounted() {
    // this.init()
    this.test = '2222'
    // this.test()
    const res = test()
    this.test = res.data
    this.test = '3333'
  },
  methods: {
    test() {
      this.test = '3333'
      alert("33333")
    },
    // async init() {
    //   alert("88888118888")
    //   this.test = '------'
    //   const res = await test()
    //   this.test = res.data
    //   alert(res.data)
    // },
    onHandleClick() {
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
