const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.ProvidePlugin({
      // _: 'lodash'
      join: ['lodash', 'join']
    })
  ],
  module: {
    rules: [{
      test: require.resolve('globalls.js'),
      use: 'exports-loader?file,parse=helpers.parse'
    }]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
/**
 * 插件的意思是 如果你在某一处用到了 _ 就引入 lodash  并将它提供给需要用到他的模块
 */