const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('./webpack.config.js')
const compiler = webpack(config);

//  接下来是 挂在中间件
/**
 * @param compiler 是通过 webpack 处理过后的
 * @param {} 是设置的参数 这里 是设置 根
 */
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));
app.listen(3000, () => {
    console.log('我来打印哈哈哈d哈哈哈哈')
})