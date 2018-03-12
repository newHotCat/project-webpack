# webpack 
——————————————————————————
## 起步
    1. npx webpack src/index.js --output dist/bundle.js   执行 npx webpack，会将我们的脚本作为入口起点，然后输出为 bundle.js
    2. webpack --config webpack.config.js 
## 资源管理
    1. 加载css   style-loader css-loader
    2. 加载图片  file-loader 合乎逻辑下一步是，压缩和优化你的图像。查看 image-webpack-loader 和 url-loader，以了解更多关于如果增强加载处理图片功能。
    3. 加载字体   file-loader  没有测试
    4. 加载数据   eg: data.xml   xml-loader   
      - 在使用 d3 等工具来实现某些数据可视化时，预加载数据会非常有用。我们可以不用再发送 ajax 请求，然后于运行时解析数据，而是在构建过程中将其提前载入并打包到模块中，以便浏览器加载模块后，可以立即从模块中解析数据。
    5. 全局资源 未理解
      - 
    6. 