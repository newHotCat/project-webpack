export function square (x) {
    return x * x;
}
export function cube (x) {
    return x * x * x;
}
let obj = [{
    name: 'zs',
    age: 18,
    hello: 'hahah'
},{
    name: 'zs',
    age: 18,
    hello: 'hahah'
},{
    name: 'zs',
    age: 18,
    hello: 'hahah'
},{
    name: 'zs',
    age: 18,
    hello: 'hahah'
},{
    name: 'zs',
    age: 18,
    hello: 'hahah'
},{
    name: 'zs',
    age: 18,
    hello: 'hahah'
},{
    name: 'zs',
    age: 18,
    hello: 'hahah'
}
]
export let newObj = obj.map(item => {
    item.lable = item.name
    delete item.name
    return item
})