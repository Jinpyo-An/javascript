// const person = {
//     firstName: "Ungmo",
//     lastName: "Lee",
//
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },
//
//     set fullName(name) {
//         [this.firstName, this.lastName] = name.split(" ");
//     },
// };
//
// console.log(`${person.firstName} ${person.lastName}`);
//
// person.fullName = "Heegun  Lee";
// console.log(person);
//
// console.log(person.fullName);

// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
//
//     set fullName(name) {
//         [this.firstName, this.lastName] = name.split(" ");
//     }
// }
//
// const person = new Person("Ungmo", "Lee");
//
// console.log(`${person.firstName} ${person.lastName}`);
//
// person.fullName = "Heegun Lee";
// console.log(person);
//
// console.log(person.fullName);
//
// console.log(Object.getOwnPropertyDescriptor(Person.prototype, "fullName"));

// class Person {
//     name = "Lee";
// }
//
// const me = new Person("Lee");

// class Person {
//     name = "Lee";
// }
//
// const me = new Person();
// console.log(me);

// class Person {
//     this.name = '';
// }

// class Person {
//     name;
//
//     constructor(name) {
//         this.name = name;
//     }
// }
//
// const me = new Person("Lee");
// console.log(me);

// class Person {
//     name = "Lee";
//
//     getName = function () {
//         return this.name;
//     };
// }
//
// const me = new Person();
// console.log(me.getName());

// class Person {
//     #name = '';
//
//     constructor(name) {
//         this.#name = name;
//     }
// }
//
// const me = new Person('Lee');
//
// console.log(me.#name);

// class Person {
//     #name;
//
//     constructor(name) {
//         this.#name = name;
//     }
//
//     get name() {
//         return this.#name.trim();
//     }
// }
//
// const me = new Person("Lee");
// console.log(me.name);

// class Person {
//     constructor(name) {
//         this.#name = name;
//     }
// }

// class MyMath {
//     static PI = 22 / 7;
//
//     static #num = 10;
//
//     static increment() {
//         return ++MyMath.#num;
//     }
// }
//
// console.log(MyMath.PI);
// console.log(MyMath.increment());

class Animal {
    constructor(age, weight) {
        this.age = age;
        this.weight = weight;
    }

    eat() {
        return "eat";
    }

    move() {
        return "move";
    }
}

class Bird extends Animal {
    fly() {
        return "fly";
    }
}

const bird = new Bird(1, 5);
console.log(bird);
console.log(bird instanceof Bird);
console.log(bird instanceof Animal);

console.log(bird.eat());
console.log(bird.move());
console.log(bird.fly());
