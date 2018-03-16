const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
// const webpack = require('webpack')

module.exports = {
  // mode: 'development',  4.0 使用
  // entry: './src/index.js',
  entry: {
    // another: './src/another-module.js',
    app: './src/index.js'
  },
  devtool: 'inline-source-map',
  // devServer: {   //webpack-dev-server 使用
  //   contentBase: './dist',
  //   hot: true // 热加载
  // },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    // new webpack.NamedModulesPlugin(),  // 热加载需要
    // new webpack.HotModuleReplacementPlugin(), // 热加载需要
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common' // 生成的名字
    // })
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/'
  }
};
/**
 * 以上配置告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。
 * 让我们添加一个 script (package.json)脚本，可以直接运行开发服务器(dev server)：
 */


/*
 * html-webpack-plugin
 * 在我们构建之前，你应该了解，虽然在 dist/ 文件夹我们已经有 index.html 这个文件，
 * 然而 HtmlWebpackPlugin 还是会默认生成 index.html 文件。
 * 这就是说，它会用新生成的 index.html 文件，把我们的原来的替换
 */