const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin') 
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  // entry: './src/index.js',
  entry: {
    print: './src/print.js',
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  output: {
    filename: 'bundle.js',
    filename: '[name].bundle.[hash].js',
    path: path.resolve(__dirname, 'dist')
  }
};
/*
 * html-webpack-plugin
 * 在我们构建之前，你应该了解，虽然在 dist/ 文件夹我们已经有 index.html 这个文件，
 * 然而 HtmlWebpackPlugin 还是会默认生成 index.html 文件。
 * 这就是说，它会用新生成的 index.html 文件，把我们的原来的替换
 */