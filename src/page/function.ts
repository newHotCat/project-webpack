import { ObjectIterator } from "../../node_modules/@types/lodash/index";
// import * as $ from '../../node_modules/@types/jquery/index'
//  函数表达式
let mySum = function (x: number, y:number): number {
    return x + y
}
// 手动添加类型
let mySum1: (x: number, y:number) => number = function (x:number, y:number):number {
    return x + y
}
// 在 ES6 中，我们允许给函数的参数添加默认值，TypeScript 会将添加了默认值的参数识别为可选参数：
let mySum2: (x: number, y?:number) => number = (x: number = 5, y: number):number => x + y;

// 以下 是 重载 功能  重载 是一个函数接受不同数量或类型的参数时，作出不同的处理
function revers(x:number):number
function revers(x:string):string
function revers(x:object):string
function revers() {
    if (typeof arguments[0] === 'number') {
        return Number(arguments[0].toString().split('').reverse().join(''));
    } else if (typeof arguments[0] === 'string') {
        return arguments[0].split('').reverse().join('');
    } else if (typeof arguments[0] === 'object') {
        return arguments[0]
    }
}
// console.log(revers('12345556'))
let obj = {
    name: 'zs',
    age: 14
}
console.log(revers({ah:123}));
console.log(revers(obj))
console.log(revers(null))

console.log('=====================')
// 断言
function getLength(x:object):string
function getLength(x:number):number
function getLength(x:string):number
function getLength (){
    let x = arguments[0]
    if ((<string>x).length) {
        return (<string>x).length.toString()
    } else if (Array.isArray(x)) {
        return x.length.toString()
    } else {
        console.log('else')
        return x.toString().length
    }
}
console.log(getLength('123123'))
console.log(getLength([1,2,3,4]))
console.log(getLength(123))
//  jQuery: (string:any) => any
console.log($('#ff'))