## 安装模块
- 预渲染的原理其实就是起了一个无头浏览器跑了下页面然后拿到了dom节点
- preload插件
- 减少白屏时间：单页应用发请求由浏览器，浏览器发请求比较慢
- 有利于seo：seo会抓取页面中的文字信息，但也应用不利于seo
- create  beforeCreate  mounted
- webpack webpack-cli webpack-dev-server webpack需要的
- babel-loader @babel/preset-env  @babel/core 处理es6语法的
- vue vue-template-compiler vue-loader 处理编译vue的
- vue-style-loader css-loader 处理样式
- html-webpack-plugin 处理html
- webpack-merge  合并webpack配置 configuerWebpack



base.config
server.config
client.config


### 流程
1.server.js

------------------------------------
2.app.js
3.新建一个public文件夹，存放模板
    先新建一个index.html
4.再建一个src文件，再src下新建一个component
    再在component下新建一个Bar和Foo文件
    在app.vue中引入这两个组件
5.再安装上面安装模块下面的那些依赖
6.再接着新建一个config文件存放webpack配置文件