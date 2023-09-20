class Person {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`Hi! My name is ${this.name}`);
    }
}

const me = new Person("Lee");
me.sayHi();

Object.getPrototypeOf(me) === Person.prototype;
me instanceof Person;

Object.getPrototypeOf(Person.prototype) === Object.prototype;
me instanceof Object;

me.constructor === Person;

