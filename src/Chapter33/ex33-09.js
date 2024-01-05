// const Direction = {
//     UP: 1,
//     DOWN: 2,
//     LEFT: 3,
//     RIGHT: 4,
// };
//
// const myDirection = Direction.UP;
//
// if (myDirection === Direction.UP) {
//     console.log("You are going UP.");
// }

// const Direction = {
//     UP: Symbol("up"),
//     DOWN: Symbol("down"),
//     LEFT: Symbol("left"),
//     RIGHT: Symbol("right"),
// };
//
// const myDirection = Direction.UP;
//
// if (myDirection === Direction.UP) {
//     console.log("You are going UP.");
// }

// const obj = {
//     [Symbol.for("mySymbol")]: 1,
// };
//
// console.log(obj[Symbol.for("mySymbol")]);

// const obj = {
//     [Symbol('mySymbol')]: 1
// };
//
// console.log(Object.getOwnPropertySymbols(obj));
//
// const symbolKey1 = Object.getOwnPropertySymbols(obj)[0];
// console.log(obj[symbolKey1]);

Array.prototype[Symbol.for("sum")] = function () {
    return this.reduce((acc, cur) => acc + cur, 0);
};

[1, 2][Symbol.for("sum")]();





