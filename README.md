# 从零开始搭建一个vue-ssr

- 01                           从 0 搭建，js 的项目 ssr
- 02                           创建 vue-ssr 项目
- 03                           自己创建的一个项目
- 04                           使用别人已经创建好的项目（无法 axios 跨域）
- demo                         使用别人的项目，修改的 demo（无法 axios 跨域）
- server                       测试使用的 服务器项目
  - python main.py （1）
  - npm install    （2） 
  - node main.js   （2）


npm install node-sass --save-dev
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install node-sass --save



### 学习链接：
https://www.cnblogs.com/jichi/p/13469305.html

https://ssr.vuejs.org/zh/

### vue-ssr 讲解
https://segmentfault.com/a/1190000019618170
https://segmentfault.com/a/1190000019618496

https://github.com/TheWalkingFat/vue-cli-ssr-demo

https://github.com/zhenshigang/vue-ssr-axios

### 5 个 vue-ssr demo
https://github.com/leocoder351/vue-ssr-demo

### 跨域
https://github.com/pandoraxm/vue_axios_resource/tree/master/axios_resource


axios.get("/movie/top250").then((res) => {
  res = res.data
  if (res.errno === ERR_OK) {
      this.themeList=res.data;
  }
}).catch((error) => {
  console.warn(error)
})
