# 从零开始搭建一个vue-ssr

- js
- vue

npm install node-sass --save-dev


npm install -g cnpm --registry=https://registry.npm.taobao.org


cnpm install node-sass --save

https://www.cnblogs.com/jichi/p/13469305.html

学习链接：

https://ssr.vuejs.org/zh/

vue-ssr 讲解
https://segmentfault.com/a/1190000019618170
https://segmentfault.com/a/1190000019618496

https://github.com/TheWalkingFat/vue-cli-ssr-demo

https://github.com/zhenshigang/vue-ssr-axios

5 个 vue-ssr demo
https://github.com/leocoder351/vue-ssr-demo

跨域
https://github.com/pandoraxm/vue_axios_resource/tree/master/axios_resource


axios.get("/movie/top250").then((res) => {
  res = res.data
  if (res.errno === ERR_OK) {
      this.themeList=res.data;
  }
}).catch((error) => {
  console.warn(error)
})


# server

- python main.py

- npm install
- node main.js