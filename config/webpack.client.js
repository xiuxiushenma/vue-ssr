
let merge = require('webpack-merge');
let base = require('./webpack.base');
let path = require('path');
let VueSSRClinetPlugin = require('vue-server-renderer/client-plugin')
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports =merge(base,{
    // 入口
    entry:{
        client:path.resolve(__dirname,'../src/client-entry.js')
    },
    plugins:[
        new VueSSRClinetPlugin(),
        new HtmlWebpackPlugin({
            
            filename:'index.html',
            template:path.resolve(__dirname,'../public/index.html')
        })
    ]
})