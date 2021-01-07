# 文件结构介绍

- src
    - router
        - index.js // 路由
    - app.js // vue 具体内容的模板，路由的变化
    - entry-client.js // 该文件为客户端入口，负责将路由挂载到app里面
    - entry-server.js // 该文件为服务端入口文件，接收app和router实例

- index.html // html 模板
- package-lock.json // 自动生成的文件
- package.json // 生成文件，命令行
- server.js // 代理核心代码，启动代码 main
<!-- - index.js // 代理核心代码，启动代码 main -->

# 预览界面
- [http://localhost:3001/](http://localhost:3001/)