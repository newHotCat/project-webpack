# webpack 

## 起步

    1. npx webpack src/index.js --output dist/bundle.js   执行 npx webpack，会将我们的脚本作为入口起点，然后输出为 bundle.js
    2. webpack --config webpack.config.js 

## typeScript

    5 种原始数据类型 布尔 字符串 数值 Null undefined    es6 的 Symbol
    typeScript 是 javascript的超集， 为其正价了类型系统，可以编译为普通的javascript 代码。 这里我么你将会学习webpack 是如何跟 typescript 进行集成的
    - let isDone: boolean = false; 定义类型 使用冒号
    - any 任意值类型
    -  变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
    - 类型推论  第一次定义赋值 为他的类型
    - 重载 （卧槽）---- tmd 没看懂 感觉更啰嗦了 {解决}
        ·问题1： 不知道怎么定义对象类型 貌似没有
    - 第三方库使用 不会 需要看看看啊看看
    - 写 node 使用 ts
    - 元组 没跑通


## 专用词   

    类型  boolean number string null undefied
type 定义类型
enum 定义枚举
interface 定义接
declare 定义文件