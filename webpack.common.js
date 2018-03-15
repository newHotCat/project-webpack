const path = require('path')
const ClearWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app:'./src/index.js'
    },
    plugins: [
        new ClearWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'production'
        })
    ],
    output: {
        filename: '[name].bundle.[hash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
}