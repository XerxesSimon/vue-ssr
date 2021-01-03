import axios from 'axios'
// import router from '../router'

axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://localhost/'
// axios.defaults.withCredentials = true // 发送 cookie

// /**
//  * http request 请求 拦截器
//  */
// axios.interceptors.request.use(
//   config => {
//     if (store.state.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
//       config.headers.Authorization = `Bearer ${store.state.token}`
//     }
//     return config
//   }, err => {
//     return Promise.reject(err)
//   }
// )

// /**
//  * http response 响应 拦截器
//  */
// axios.interceptors.response.use(
//   response => {
//     if (response.data && response.data.status === 401) { // 401, token失效
//       store.commit('signin')
//       router.push({ name: 'signin' })
//     }
//     return response
//   }, error => {
//     if (error.response) {
//       switch (error.response.status) {
//         case 401:
//           store.commit('signin')
//           router.push({ name: 'signin' })
//       }
//     }
//     return Promise.reject(error.response.data)
//   }
// )

// https://gitee.com/renrenio/renren-fast-vue/blob/master/src/utils/httpRequest.js
// https://github.com/superman66/vue-axios-github/blob/master/src/http.js

export default axios
