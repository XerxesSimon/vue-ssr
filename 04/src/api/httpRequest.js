import axios from 'axios'
// import router from '../router'

axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://localhost:5000/'
axios.defaults.withCredentials = true // 发送 cookie

/**
 * http request 请求 拦截器
 */
axios.interceptors.request.use(
  config => {
    // if (store.state.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
    //   config.headers.Authorization = `Bearer ${store.state.token}`
    // }
    console.log("1111111")
    return config
  }, err => {
    console.log("22222222")
    return Promise.reject(err)
  }
)

/**
 * http response 响应 拦截器
 */
axios.interceptors.response.use(
  response => {
    // if (response && response.data && response.data.status === 401) { // 401, token失效
    //   store.commit('signin')
    //   router.push({ name: 'signin' })
    // }
    console.log("888888888")
    return response
  }, error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          store.commit('signin')
          router.push({ name: 'signin' })
      }
    }
    console.log("666")
    return Promise.reject(error.response)
  }
)

// https://gitee.com/renrenio/renren-fast-vue/blob/master/src/utils/httpRequest.js
// https://github.com/superman66/vue-axios-github/blob/master/src/http.js

export default axios
