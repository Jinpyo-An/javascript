// function longWork() {
//     const now = new Date();
//
//     const milliseconds = now.getTime();
//     const afterTwoSeconds = milliseconds + 2*1000;
//
//     while(new Date().getTime() < afterTwoSeconds);
//
//     console.log('완료');
// }
//
// console.log('Hello');
// longWork();
// console.log('World');

// function longWork() {
//     setTimeout(() => {
//         console.log("완료");
//     }, 2000);
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
//         console.log("1번 콜백 끝");
//         setTimeout(() => {
//             console.log("2번 콜백 끝");
//             setTimeout(() => {
//                 console.log("3번 콜백 끝");
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
//         resolve("완료");
//     }, seconds * 1000);
// });
//
// getPromise(1)
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((res) => {
//         console.log(res);
//     })
//     .finally(() => {
//         console.log("first finally");
//     });

const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("완료");
    }, seconds * 1000);
});

async function runner() {
    try {
        const result1 = await getPromise(1);
        console.log(result1);

        const result2 = await getPromise(2);
        console.log(result2);
    } catch (e) {
        console.error(e);
    }
}

runner();
console.log('이게 먼저 출력될까...?');