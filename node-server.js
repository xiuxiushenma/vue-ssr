let express = require('express');
let app = express();
let Vue = require('vue');
let fs = require('fs');
let path = require('path');
let VueServerRenderer = require('vue-server-renderer');

// 采用json方式

// let serverBundle = fs.readFileSync('./dist/server.bundle.js','utf8');
let serverBundle = require('./dist/vue-ssr-server-bundle.json');
let clientManifest = require('./dist/vue-ssr-client-manifest.json');
let template = fs.readFileSync('./dist/index.ssr.html','utf8');
let render = VueServerRenderer.createBundleRenderer(serverBundle,{
    template,
    clientManifest
});
console.log(serverBundle,clientManifest)

app.get('/',(req,res)=>{
    // 把渲染成功的字符串扔给客户端,只是返回一个字符串 并没有vue实际功能
    let context = {url:req.url};
    render.renderToString(context,(err,html)=>{
        console.log(err);
        res.send(html);
    });
});
// 顺序 要保证
app.use(express.static(path.resolve(__dirname,'dist')));
// 如果访问的路径不存在 默认渲染index.ssr.html 并且把路由定向到当前请求的路径
app.get('*',(req,res)=>{
    // 把渲染成功的字符串扔给客户端,只是返回一个字符串 并没有vue实际功能
    let context = {url:req.url};
    render.renderToString(context,(err,html)=>{
        res.send(html);
    });
});
app.listen(4000);