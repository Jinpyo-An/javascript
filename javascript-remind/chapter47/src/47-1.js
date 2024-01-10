// console.log("[Start]");
//
// foo();
//
// console.log("[End]");

// console.log("[Start]");
//
// try {
//     foo();
// } catch (error) {
//     console.error("[에러 발생]");
// }

// console.log("[Start]");
//
// try {
//     foo();
// } catch (e) {
//     console.error(e);
// } finally {
//     console.log("finally는 무조건 출려");
// }

// try {
//     throw new Error("something wrong");
// } catch (error) {
//     console.log(error);
// }


// const repeat = (n,f) => {
//     if(typeof f !== 'function') throw new TypeError('f must be a function');
//
//     for(let i =0; i< n; i++) {
//         f(i);
//     }
// }
//
// try {
//     repeat(2,1);
// } catch (error) {
//     console.error(error);
// }

// const foo = () => {
//     throw Error('foo에서 발생한 에러');
// };
//
// const bar = () => {
//     foo();
// }
//
// const baz = () => {
//     bar();
// }
//
// try {
//     baz();
// } catch (error) {
//     console.error(error);
// }

