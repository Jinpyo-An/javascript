// function longWork() {
//     const now = new Date();
//
//     const milliseconds = now.getTime();
//     const afterTwoSeconds = milliseconds + 2 * 1000;
//
//     while (new Date().getTime() < afterTwoSeconds) {
//
//     }
//
//     console.log('완료');
// }
//
// console.log('Hello');
// longWork();
// console.log('World');

// function longWork() {
//     setTimeout(() => {
//         console.log('완료');
//     }, 2000);
//
// }
//
// console.log('Hello');
// longWork();
// console.log('World');

// function waitAndRun(timeout) {
//     setTimeout(() => {
//         console.log("끝");
//     }, 2000);
// }
//
// waitAndRun();

// function waitAndRun2() {
//     setTimeout(() => {
//         console.log("1번 콜벡 끝");
//         setTimeout(() => {
//             console.log("2번 콜벡 끝");
//             setTimeout(() => {
//                 console.log("3번 콜벡 끝");
//             }, 2000);
//         }, 2000);
//     }, 2000);
// }
//
// waitAndRun2();

// const timeoutPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("완료");
//     }, 2000);
// });
//
// timeoutPromise.then((res) => {
//     console.log(res);
// });

// const getPromise = (seconds) => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("에러");
//     }, seconds * 1000);
// });
//
// getPromise(3)
//     .then((res) => {
//         console.log("--- first then ---");
//         console.log(res);
//     })
//     .catch((res) => {
//         console.log("--- first catch");
//         console.log(res);
//     })
//     .finally(() => {
//         console.log("--- finally");
//     });

// const getPromise = (seconds) => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("완료");
//     }, seconds * 1000);
// });
//
// async function runner() {
//     try {
//         const result1 = await getPromise(1);
//         console.log(result1);
//         const result2 = await getPromise(2);
//         console.log(result2);
//     } catch (e) {
//
//     }
// }

runner();
log('실행끝')