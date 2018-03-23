/**
 * 对象的类型  接口
 * interfaces
 * @param readonly 只读属性
 */
// 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：
 export interface Person {
     readonly id: number
     name: string,
     age: number,
     kexuan?: string | number
 }

 let tom: Person = {
     id: 190,
     name: 'Tom',
     age: 19,
     kexuan: 40
 }
 let tom1: Person = {
     id: 123,
     name: 'tomg',
     age: 90,
     kexuan: '这个事可选属性可写可不写'
 }
console.log(tom1)