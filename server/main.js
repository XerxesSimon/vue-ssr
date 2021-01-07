const express = require("express");
const app = express();

// 路由
app.get('*', (request, response) => {
    response.end('hello, ssr');
})

// 监听
app.listen(5000, () => {
    console.log('服务已开启:  http://localhost:5000')
})
