const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    // mode: 'development', 4.0 使用
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    }
})