// const circle = {
//     radius: 5,
//     getDiameter() {
//         return 2 * this.radius;
//     },
// };
//
// console.log(circle.getDiameter());

// function Cricle(radius) {
//     this.radius = radius;
// }
//
// Cricle.prototype.getDiameter = function () {
//     console.log(this.radius);
// };
//
// const circle = new Circle(5);
// console.log(circle.getDiameter());

// console.log(this);
//
// function square(number) {
//     console.log(this);
//     return number * number;
// }
//
// square(2);
//
// const person = {
//     name: "Lee",
//     getName() {
//         console.log(this);
//         return this.name;
//     },
// };
// console.log(person.getName());
//
// function Person(name) {
//     this.name = name;
//
//     console.log(this);
// }
//
// const me = new Person("Jinpyo");

// var value = 1;
//
// const obj = {
//     value: 100,
//     foo() {
//         const that = this;
//
//         setTimeout(function () {
//             console.log(that.value);
//         }, 100);
//     },
// };
//
// obj.foo();

var value = 1;

const obj = {
    value: 100,
    foo() {
        setTimeout(() => console.log(this.value), 100);
    },
};

obj.foo();