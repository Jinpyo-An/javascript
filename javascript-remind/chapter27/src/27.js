const log = console.log;
// arr = ["apple", "banana", "orange"];
// console.log(typeof arr);

// [].length;
// [1, 2, 3].length;

// new Array(1, 2, 3);

// const arr = Array.of(1, 2, 3);
// console.log(arr);
//
// console.log(Array.from({length: 2, 0: "a", 1: "b"}));
// console.log(Array.from("Hello"));
// console.log(Array.from({length: 3}, (_, i) => i));

// const arr = [1, 2, 3];
//
// delete arr[1];
// console.log(arr);

// const arr = [1, 2, 3];
//
// arr.splice(1, 1);
// console.log(arr);
//
// console.log(arr.length);

// const arr = [1, 2, 2, 3];
// arr.indexOf(2);
// arr.indexOf(4);
// arr.indexOf(2, 2);

// const foods = ["apple", "banana", "orange"];
// if (foods.indexOf("orange") === -1) {
//     foods.push("orange");
// }
// log(foods);

// const foods = ["apple", "banana", "orange"];
//
// if (!foods.includes("orange")) {
//     foods.push("orange");
// }
//
// log(foods);

// const arr = [1, 2];
// const newArr = [...arr, 3];
// log(newArr);

// const Stack = (function () {
//     function Stack(array = []) {
//         if (!Array.isArray(array)) {
//             throw new TypeError(`${array} is not an array`);
//         }
//         this.array = array;
//     }
//
//     Stack.prototype = {
//         constructor: Stack,
//         push(value) {
//             return this.array.push(value);
//         },
//         pop() {
//             return this.array.pop();
//         },
//         entries() {
//             return [...this.array];
//         },
//     };
//
//     return Stack;
// }());
//
// const stack = new Stack([1, 2]);
//
// stack.push(3);
// log(stack.entries());
//
// stack.pop();
// log(stack.entries());

// class Stack {
//     #array;
//
//     constructor(array = []) {
//         if (!Array.isArray(array)) {
//             throw new TypeError(`${array} is not an array`);
//         }
//         this.#array = array;
//     }
//
//     push(value) {
//         return this.#array.push(value);
//     }
//
//     pop() {
//         return this.#array.pop();
//     }
//
//     entries() {
//         return [...this.#array];
//     }
// }

// const arr1 = [1, 2];
// const arr2 = [3, 4];
//
// let result = arr1.concat(arr2);
// log(result);
//
// result = arr1.concat(3);
// log(result);
//
// log(arr1);

// const arr = [1, 2, 3, 4];
//
// // const result = arr.splice(1, 2, 20, 30);
// // log(result);
// // log(arr);
//
// const result = arr.splice(1);
// log(arr);
// log(result);

// const arr = [1, 2, 3, 1, 2];
//
// function remove(array, item) {
//     const index = array.indexOf(item);
//
//     if (index !== -1) array.splice(index, 1);
//
//     return array;
// }
//
// log(remove(arr, 2));
// log(remove(arr, 10));

// const arr = [1, 2, 3, 1, 2];
//
// function removeAll(array, item) {
//     return array.filter(v => v !== item);
// }
//
// log(removeAll(arr, 2));

// const arr = [1, 2, 3];
// arr.slice(0, 1);
// arr.slice(1, 2);
// log(arr);

// const arr = [1, 2, 3, 4];
//
// log(arr.join());
// log(arr.join(""));
// log(arr.join(":"));

// const arr = [1, 2, 3];
//
// arr.fill(0);
//
// log(arr);

// const arr = new Array(3);
// log(arr);
//
// const result = arr.fill(1);
//
// console.log(arr);

// const arr = [1, 2, 3];
//
// arr.includes(2);
//
// arr.includes(100);


