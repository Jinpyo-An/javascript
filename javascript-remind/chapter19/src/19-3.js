// const obj = {};
// const parent = {x: 1};
//
//
// console.log(obj.__proto__);
//
// obj.__proto__ = parent;
//
// console.log(obj.x);

// const Person = name => {
//     this.name = name;
// };
//
// console.log(Person.hasOwnProperty("prototype"));
//
// console.log(Person.prototype);
//
// const obj = {
//     foo() {
//     },
// };
//
// console.log(obj.foo.hasOwnProperty("prototype"));
// console.log(obj.foo.prototype);

// function Person(name) {
//     this.name = name;
// }
//
// const me = new Person('Lee');
//
// console.log(Person.prototype === me.__proto__);

// function Person(name) {
//     this.name = name;
// }
//
// const me = new Person('Lee');
//
// console.log(me.constructor === Person);

function foo() {

}

console.log(foo.constructor === Function);

