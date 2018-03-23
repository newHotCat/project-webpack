import { sayHello } from './hello'
let user = 'Tom13';
let aUser = [0, 1, 2];
let isDone: boolean = false;
isDone = true;

console.log(sayHello(user))

// 注意，使用构造函数 Boolean 创造的对象不是布尔值：
// let createByNewBoolean1: boolean = new Boolean(true);

// 事实上 new Boolean() 返回的是一个 Boolean 对象：
let createByNewBoolean: Boolean = new Boolean(0) // 成立
console.log(createByNewBoolean)

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// es6 中的 二进制表示法
let binaryLiteral: number = 0b1010;
// es6 八进制
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;
let sex: number = 0b0110;
let sex1: number = 0o0006;
console.log(sex, sex1)

// JavaScript 没有空值（Void）的概念，在 TypeScirpt 中，可以用 void 表示没有任何返回值的函数
let u: void
function alertName (): void {
    alert('My name is Tom')
    // return 123; // 报错 因为定义里空值 void 类型
}
// alertName();