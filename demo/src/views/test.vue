<template>
  <div class="books container">
    小书
    {{data}}
  </div>
</template>

<script>
// @ is an alias to /src
// import fooStoreModule from '../store/modules/ok'

export default {
  data () {
    return {
      data: '1111',
    }
  },
  // asyncData ({ store }) {
  //   store.registerModule('foo', fooStoreModule)
  //   return store.dispatch('foo/inc')
  // },
  // // 重要信息：当多次访问路由时，
  // // 避免在客户端重复注册模块。
  // destroyed () {
  //   this.$store.unregisterModule('foo')
  // },
  // computed: {
	// 	currentTag() {
  //     return this.$store.state.app.test
	// 	}
  // },
  asyncData({store, router}) {
    return store.dispatch('FETCH_INDEX_TEST')
  },
  created() {
    this.data = this.$store.state.app.test
  },
  mounted () {
    // this.data = this.$store.state.app.test
  }
}
</script>
