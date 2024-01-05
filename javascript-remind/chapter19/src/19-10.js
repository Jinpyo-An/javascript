// function Person(name) {
//     this.name = name;
// }
//
// const me = new Person("Lee");
//
// console.log(me instanceof Person);
//
// console.log(me instanceof Object);

// function isInstanceof(instance, constructor) {
//     const prototype = Object.getPrototypeOf(instance);
//
//     if(prototype === null) return false;
//
//     return prototype ===
// }

const Person = (function () {
    function Person(name) {
        this.name = name;
    }

    Person.prototype = {
        sayHello() {
            console.log(`Hi My name is ${this.name}`);
        }
    };
    return Person
}());

const me = new Person('Lee');

console.log(me.constructor === Person);

console.log(me instanceof Person);
console.log(me instanceof Object);