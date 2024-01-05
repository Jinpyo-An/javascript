// const obj = {
//     x: 1,
//     foo() {
//         return this.x;
//     },
//     bar: function () {
//         return this.x;
//     },
// };
//
// new obj.foo();
// new obj.bar();

// const sum = (a, b) => {
//     const result = a + b;
//     return result;
// };

// const person = (name => {
//     say
// })

// class Prefixer {
//     constructor(prefix) {
//         this.prefix = prefix;
//     }
//
//     add(arr) {
//         return arr.map(item => this.prefix + item);
//     }
// }
//
// const prefixer = new Prefixer("-webkit-");
// console.log(prefixer.add(["transition", "user-select"]));

// function foo(...rest) {
//     console.log(rest);
// }
//
// foo(1, 2, 3, 4, 5);

function sum(...args) {
    return args.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2, 3, 4, 5));