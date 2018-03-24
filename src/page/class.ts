// interface Animal {name: string}
class Animal {
    name = ''
    static num = 42
    constructor (name:string) {
        this.name = name;
    }
    static isAnimal (a: any) {
        return a instanceof Animal;
    }
    sayHi() {
        return `My name is ${this.name}`
    }
}
let a = new Animal('cat')
console.log(a.sayHi())
console.log(Animal.isAnimal(a))
class Cat extends Animal {
    constructor (name: string) {
        super(name)
    }
    sayHi () {
        return 'Meow,' + super.sayHi()
    }
}
let cat = new Cat('cat1')
console.log(cat.sayHi())