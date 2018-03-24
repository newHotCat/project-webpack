import { ObjectIterator } from "../../node_modules/@types/lodash/index";
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
// console.log($('#ff'))

// 类型别名

type Name = string;
type NameResolver = () => string
type NameOrResolver = Name | NameResolver
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n
    } else {
        return n();
    }
}
getName(()=> {
    return 'haha'
})

// 字符串字面量类型
type EventNames = 'click' | 'scroll' | 'mousemove'

function handEvent( ele:number, event: EventNames) {
    console.log(event)
}

handEvent(123, 'click')

let old = [["1","2","3"],['1-1','1-2','1-3']];
// [{name:1,age:"1-1"},{name:2,age:"1-2"},{name:1,age:"1-3"}]
let newArr:any[] = []
old[0].forEach((item, index): void=> {
    newArr.push({
       name: item,
       age: old[1][index]
    })
});
console.log(newArr)

let xcatliu: [string, number, object];
// xcatliu[0] = 'Xcat Liu';
// xcatliu[1] = 25;
xcatliu = ['',0, {}];
xcatliu[0] = 'asdfasdf'
xcatliu[1] = 12312312312
xcatliu.push({a: 123})
console.log(xcatliu[3])

// 枚举
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
console.log(Days[0])
enum color {Red, Green, blue}

for (let i = 0;i < 3; i++) {
    console.log(color[i])
}