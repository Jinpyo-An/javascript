// const isIterable = v => v !== null & typeof v[Symbol.iterator] === "function";
//
// isIterable([]);
// isIterable("");
// isIterable(new Map());
// isIterable(new Set());
// isIterable({});

// const array = [1, 2, 3];
//
// console.log(Symbol.iterator in array);
//
// for (const item of array) {
//     console.log(item);
// }
//
// console.log([...array]);
//
// const [a, ...rest] = array;
// console.log(a, rest);

// const obj = {a: 1, b: 2};
//
// console.log(Symbol.iterator in obj);
//
// for (const item of obj) {
//     console.log(item);
// }
//
// const [a, b] = obj;

// const array = [1,2,3];
//
// const iterator = array[Symbol.iterator]();
//
// console.log('next' in iterator);

const array = [1, 2, 3];

const iterator = array[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

