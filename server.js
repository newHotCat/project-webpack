const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')  // 着重看
/**
 * 这个的作用就是 使用这个包处理后的webpack 配置 送给服务器
 */

const app = express()

// const config = require('./webpack.config.js')
const devConfig = require('./webpack.dev.js')
// const preConfig = require('./webpack.prod.js')

const compiler = webpack(devConfig);

//  接下来是 挂在中间件
/**
 * @param compiler 是通过 webpack 处理过后的
 * @param {} 是设置的参数 这里 是设置 根
 */
app.use(webpackDevMiddleware(compiler, {
    publicPath: devConfig.output.publicPath
}));
app.listen(3000, () => {
    console.log('我来打印哈哈哈d哈哈哈哈')
})