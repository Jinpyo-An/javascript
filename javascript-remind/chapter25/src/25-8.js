// class Base {
//     constructor(a, b) {
//         this.a = a;
//         this.b = b;
//     }
// }
//
// class Derived extends Base {
//     constructor(a, b, c) {
//         super(a, b);
//         this.c = c;
//     }
// }
//
// const derived = new Derived(1, 2, 3);
// console.log(derived);

// class Base {
//     constructor(name) {
//         this.name = name;
//     }
//
//     sayHi() {
//         return `Hi ${this.name}`;
//     }
// }
//
// class Derived extends Base {
//     sayHi() {
//         return `${super.sayHi()}. how are you doing?`;
//     }
// }
//
// const derived = new Derived("Lee");
// console.log(derived.sayHi());