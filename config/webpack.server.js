let base = require('./webpack.base');
let merge = require('webpack-merge');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
let externals = require('webpack-node-externals');
let path = require('path');

module.exports = merge(base,{
    target:'node', //打包出的结果给node用
    entry:{ // 入口文件
        server: path.resolve(__dirname,'../src/server-entry.js')
    },
    externals:[externals()], // 第三方模块不需要大包 因为js是在node中运行的默认可以使用第三方库 require
    output:{
        libraryTarget:'commonjs2',  // module.exports = server.entry.js
    },
    plugins:[
        // 把public目录下index.ssr的内容拷贝到 dist目录
        // dllPlugin
        new VueSSRServerPlugin(),
        new HtmlWebpackPlugin({
            filename:'index.ssr.html',
            template:path.resolve(__dirname,'../public/index.ssr.html'),
            excludeChunks:['server']
        })
    ]
})

