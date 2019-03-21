//0.起一个服务
let express = require('express');
let app = express();
let Vue = require('vue');
let fs = require('fs');
//1.引入vue提供的服务端渲染的包
let VueServerRenderer = require('vue-server-renderer');
//2.创建vue实例
let vm = new Vue({
    template:'<div>hello world 1</div>'
});
//3.读取模板容器文件
let template = fs.readFileSync('./index.html','utf8');
//4.创建渲染函数
let render = VueServerRenderer.createRenderer({
    template
});
//5.设置路由
app.get('/',(req,res)=>{
    render.renderToString(vm,function(err,html){
        res.send(html)
    })
})

app.listen(3000);