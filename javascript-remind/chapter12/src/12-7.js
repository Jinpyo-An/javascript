// (function () {
//     const a = 3;
//     const b = 5;
//     return a * b;
// }());

// let res = (function () {
//     const a = 3;
//     const b = 5;
//     return a * b;
// }());
//
// console.log(res);
//
// res = (function (a, b) {
//     return a * b;
// }(3, 5));
//
// console.log(res);

// function repeat1(n) {
//     for (let i = 0; i < n; i++) console.log(i);
// }
//
// repeat1(5);
//
// function repeat2(n) {
//     for (let i = 0; i < n; i++) {
//         if (i % 2) console.log(i);
//     }
// }
//
// repeat2(5);

function repeat(n, f) {
    for (let i = 0; i < n; i++) {
        f(i);
    }
}

const logAll = function (i) {
    console.log(i);
};

repeat(5, logAll);

const logOdds = function (i) {
    if (i % 2) console.log(i);
};

repeat(5, logAll);

repeat(5, function (i) {
    if (i % 2) console.log(i);
});