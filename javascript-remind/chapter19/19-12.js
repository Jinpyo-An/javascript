// function Foo() {
//
// }
//
// Foo.prototype.x = function () {
//     console.log("x");
// };
//
// const foo = new Foo();
// foo.x();
//
// Foo.x = function () {
//     console.log("x");
// };
//
// Foo.x();
//
// person = {
//     name: 'Lee',
//     address: 'Seoul',
// };
//
// console.log(person.hasOwnProperty('toString'));

const person = {
    name: 'jinpyo',
    address: 'Daejeon'
};

for(let key in person) {
    console.log(key + ': ' + person[key]);
}