<template>
  <div class="books container">
    小书
    {{data}}
  </div>
</template>

<script>
// import { signup } from '@/api/base'
import { test } from '@/api/base'
// import axios from 'axios'

// type multipart/form-data
// function test (url, data = '', type = 'application/json') {
//   return axios({
//     url: 'http://127.0.0.1:5000/test',
//     // url: '/test',
//     method: 'get',
//     data: data,
//     headers: {
//       'Content-Type': type
//     }
//   }).data
// }

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
    init () {
      this.data = '2222'
      test().then((res) => {
        // this.data = res.data;
        this.data = '444'
      }).catch((error) => {
        // console.warn(error)
        this.data = '555'
      })
      this.data = '333'
    }
  }
}
</script>
