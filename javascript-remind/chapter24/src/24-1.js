// const x = 1;
//
// function outerFunc() {
//     const x = 10;
//
//     function innerFunc() {
//         console.log(x);
//     }
//
//     innerFunc();
// }
//
// outerFunc();

// const x = 1;
//
// function foo() {
//     const x = 10;
//     bar();
// }
//
// function bar() {
//     console.log(x);
// }
//
// foo();
// bar();

/**
 * "함수의 상위 스코프를 결정한다." === "렉시컬 환경의 외부 렉시컬 환경에 대한 참조가 저장할 참조값을 결정한다."
 */

// const x = 1;
//
// function outer() {
//     const x = 10;
//     const inner = function () {
//         console.log(x);
//     }
//     return inner;
// }
//
// const innerFunc = outer();
// innerFunc();

// let num = 0;
//
// const increase = function () {
//     return ++num;
// }
//
// console.log(increase());
// console.log(increase());
// console.log(increase());

// const increase = function () {
//     let num = 0;
//
//     return ++num;
// };
//
// console.log(increase());
// console.log(increase());
// console.log(increase());

// const increase = (function () {
//     let num = 0;
//
//     return function () {
//         return ++num;
//     };
// }());
//
// console.log(increase());
// console.log(increase());
// console.log(increase());

// const counter = (function () {
//     let num = 0;
//
//     return {
//         increase() {
//             return ++num;
//         },
//         decrease() {
//             return num > 0 ? --num : 0;
//         },
//     };
// }());
//
// console.log(counter.increase());
// console.log(counter.increase());
//
// console.log(counter.decrease());
// console.log(counter.decrease());

// function makerCounter(aux) {
//     let counter = 0;
//
//     return function () {
//         counter = aux(counter);
//         return counter;
//     };
// }
//
// function increase(n) {
//     return ++n;
// }
//
// function decrease(n) {
//     return --n;
// }
//
// const increaser = makerCounter(increase);
// console.log(increaser());
// console.log(increaser());
//
// const decreaser = makerCounter(decrease);
// console.log(decreaser());
// console.log(decreaser());

// const counter = (function () {
//     let counter = 0;
//
//     return function (aux) {
//         counter = aux(counter);
//     };
// }());
//
// function increase(n) {
//     return ++n;
// }
//
// function decrease(n) {
//     return --n;
// }
//
// console.log(counter(increase));
// console.log(counter(increase));
//
// console.log(counter(decrease));
// console.log(counter(decrease));



