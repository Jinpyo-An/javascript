// let g = 0;
//
// setTimeout(() => {
//     g = 100;
// }, 0);
// console.log(g);

// const promiseGet = url => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open("GET", url);
//         xhr.send();
//
//         xhr.onload = () => {
//         };
//         if (xhr.status === 200) {
//             resolve(JSON.parse(xhr.response));
//         } else {
//             reject(new Error(xhr.status));
//         }
//     });
// };
//
// promiseGet();

// new Promise(resolve => resolve("fulfilled"))
//     .then(v => console.log(v), e => console.error(e));
//
// new Promise((_, reject) => reject(new Error("rejected"))).then(v => console.log(v), e => console.error(e));

// new Promise((_, reject) => reject(new Error("rejected")))
//     .catch(e => console.log(e));
//
// new Promise(() => {}).finally(() => console.log('finally'));

// const promiseGet = url => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open("GET", url);
//         xhr.send();
//
//         xhr.onload = () => {
//             if (xhr.status === 200) {
//                 resolve(JSON.parse(xhr.response));
//             } else {
//                 reject(new Error(xhr.status));
//             }
//         };
//     });
// };
//
// promiseGet("http://localhost:8080")
//     .then(res => log(res))
//     .catch(err => console.error(err))
//     .finally(() => log("Bye!"));

