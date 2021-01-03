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
      data: 'ddd'
    }
  },
  mounted () {
    // this.init()
    // this.data = '2222'
    // this.test()
    // const res = test()
    // this.data = res.data
    // this.data = '3333'
    this.init()
  },
  methods: {
    // test() {
    //   this.data = '3333'
    //   alert("33333")
    // },
    async init () {
      alert("88888118888")
      this.data = '------'
      const res = await test()
      this.data = res.data
      alert(this.data)
      this.data = '-222222222-'
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
