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
## 管理输出
    1. entry 键值 可以是  字符串 && 对象  
    2. output {
        filename: '[name].bundle.js'   // 这里的name 是 入口 为对象时 的键名
    }
    3. 设定 htmlWebpackPlugin     在这使用到了插件  plugin 来处理             html-webpack-plugin 
        * 注意 这里 的键名 是 plugins ------------------      一定带 s  plugins: [ new HtmlWebpackPlugin()]
        * 注意 小知识点 入口处 的对象键值 顺序 就是 js 插入 html 中的 顺序  我特意把 app：'.src/index.js' 放到了 下面
    4. 清理 /dist 文件夹  是一个比较普及的管理插件
        * clean-webpack-plugin
        * 我发现他会把这个插件 放到 其他插件的 上面 也就是最上面  不知道有没有规律 或者  顺序  没有测试 待测
    5. Manifest 
        * 你可能会感兴趣，webpack及其插件似乎“知道”应该哪些文件生成。
            答案是，通过 manifest，webpack 能够对「你的模块映射到输出 bundle 的过程」保持追踪。如果你对通过其他方式来管理 webpack 的输出更感兴趣，那么首先了解 manifest 是个好的开始。