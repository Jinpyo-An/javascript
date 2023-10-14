// const fibonacci = {
//     [Symbol.iterator]() {
//         let [pre, cur] = [0, 1];
//         const max = 10;
//
//         return {
//             next() {
//                 [pre, cur] = [cur, pre + cur];
//
//                 return {value: cur, done: cur >= max};
//             },
//         };
//     },
// };
//
// for (const num of fibonacci) {
//     console.log(num);
// }
//
// const arr = [...fibonacci];
// console.log(arr);
//
// const [first, second, ...rest] = fibonacci;
// console.log(first, second, rest);

// const fibonacciFunc = function (max) {
//     let [pre, cur] = [0, 1];
//
//     return {
//         [Symbol.iterator]() {
//             return {
//                 next() {
//                     [pre, cur] = [cur, pre + cur];
//                     return {value: cur, done: cur >= max};
//                 },
//             };
//         },
//     };
// };
//
// for (const num of fibonacciFunc(10)) {
//     console.log(num);
// }
//
// const iterable = fibonacciFunc(5);
// const iterator = iterable[Symbol.iterator]();
//
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// const fibonacciFunc = function (max) {
//     let [pre, cur] = [0, 1];
//
//     return {
//         [Symbol.iterator]() {
//             return this;
//         },
//         next() {
//             [pre, cur] = [cur, pre + cur];
//             return {value: cur, done: cur >= max};
//         },
//     };
// };
//
// let iter = fibonacciFunc(10);
//
// for (const num of iter) {
//     console.log(num);
// }
//
// iter = fibonacciFunc(10);
//
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

const fibonacciFunc = function () {
    let [pre, cur] = [0, 1];

    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            [pre, cur] = [cur, pre + cur];
            return {value: cur};
        },
    };
};

for (const num of fibonacciFunc()) {
    if (num > 10000) break;
    console.log(num);
}

const [f1, f2, f3] = fibonacciFunc();
console.log(f1, f2, f3);

