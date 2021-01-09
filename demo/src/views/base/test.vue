<template>
  <div class="books container">
    小书
    {{data}}
  </div>
</template>

<script>
// import { signup } from '@/api/base'
import { test } from '@/api/base'
import axios from 'axios'

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
//   })
// }

export default {
  data () {
    return {
      data: '1111',
    }
  },
  beforeCreate () {
    axios({
      url: 'http://192.168.0.102:5000/test',
      // url: 'http://127.0.0.1:5000/test',
      method: 'get',
      data: '',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      this.data = 'res.data'
    }).catch((error) => {
      this.data = '555'
    })
    this.data = '8888888'
  },
  mounted () {
    // this.init()
  },
  methods: {
    init () {
      this.data = '2222'
      // axios({
      //   url: 'http://127.0.0.1:5000/test',
      //   method: 'get',
      //   data: '',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // }).then((res) => {
      //   this.data = res.data
      // }).catch((error) => {
      //   this.data = '555'
      // })
      test().then((res) => {
        this.data = res.data
      }).catch((error) => {
        this.data = '555'
      })
      this.data = '333'
    }
  }
}
</script>
