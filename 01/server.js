/* 1
const express = require("express");
const app = express();

// 路由
app.get('*', (request, response) => {
    response.end('hello, ssr');
})

// 监听
app.listen(3000, () => {
    console.log('服务已开启:  http://localhost:3000')
})
*/

const express = require("express");
const app = express();
const Vue = require("vue");
const vueServerRender = require("vue-server-renderer").createRenderer();

app.get('*', (request, response) => {
    const vueApp = new Vue({
        data:{
           message: "hello, ssr"
        },
        template: `<h1>{{message}}</h1>`
    });

    response.status(200);
    response.setHeader("Content-type", "text/html;charset-utf-8");
    vueServerRender.renderToString(vueApp).then((html) => {
        response.end(html);
    }).catch(err => console.log(err))
})

app.listen(3000, () => {
    console.log('服务已开启:  http://localhost:3000')
})

/* 3
const express = require("express");
const app = express();
const Vue = require("vue");
const path = require("path");
const vueServerRender = require("vue-server-renderer").createRenderer({
    template:require("fs").readFileSync(path.join(__dirname,"./index.html"),"utf-8")
});


app.get('*', (request, response) => {
    const vueApp = new Vue({
        data:{
           message: "hello, ssr"
        },
        template: `<h1>{{message}}</h1>`
    });

    response.status(200);
    response.setHeader("Content-type", "text/html;charset-utf-8");


    vueServerRender.renderToString(vueApp).then((html) => {
        response.end(html);
    }).catch(err => console.log(err))
})

app.listen(3001, () => {
    console.log('服务已开启')
})
*/
