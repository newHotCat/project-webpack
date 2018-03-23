// 任意值
let muFavor = 'join'
// muFavor = 123

// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查
let bbb;
bbb = 123;
bbb = 'asfd';

// 联合类型
let myFavoriteNubmer: string | number ;
myFavoriteNubmer = '123'
myFavoriteNubmer = 9
// myFavoriteNubmer = true // 报错

// :number  是返回的类型 返回的必须是参数类型的共有方法
function getLength (something: string | number ): string {
    return something.toString()
}
// function getLength (something: string | number ): number {
//     return something.length
// }
