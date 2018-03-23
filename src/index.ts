// 数据类型
import './page/type'
import './page/any' // 任意值 类型推论
import './page/interfaces'
import './page/array'
import './page/function'

import { Person } from './page/interfaces'
let liu: Person = {
    id: 123,
    name: 'tong',
    age: 26,
    kexuan: '你好我是一位前端工程师，目标是全栈工程师'
}
// 数组的泛型
let arr: Array<number> = [1,2,3,4]

// 用接口表示数组  ******  不能理解  ********
interface objArr { // 定义接口
    [index: number]: string  // 定义类型
}
let arrObj: objArr = ['234']
// any 在数组中的应用
// 一个比较常见的做法是，用 any 表示数组中允许出现任意类型：
let list: any[] = ['xkjkdf',1, {weblist: 'hahah', any: 12}]

//  类数组 在 内置对象上考察
