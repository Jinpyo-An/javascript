// const target = "A AA B BB Aa Bb";

// const regExp = /A|B/g;
// console.log(target.match(regExp));

// const regExp = /A+|B+/g;
// console.log(target.match(regExp));

// const regExp = /[AB]+/g;
// console.log(target.match(regExp));

// const regExp = /[A-Z]+/g;
// console.log(target.match(regExp));

// const regExp = /[A-Za-z]+/g;
// console.log(target.match(regExp));


// const target = 'AA BB  12,345';

// const regExp = /[0-9,]+/g;
// console.log(target.match(regExp));

// let regExp = /[\d,]+/g;
// console.log(target.match(regExp));
//
// regExp = /[\D,]+/g;
// console.log(target.match(regExp));

// const target = 'Aa Bb 12,345 _$%&';
//
// let regExp = /[\w,]+/g;
// console.log(target.match(regExp));
//
// regExp = /[\W,]+/g;
// console.log(target.match(regExp));

// const target = 'AA BB 12 Aa Bb';
//
// const regExp = /[^0-9]+/g;
// console.log(target.match(regExp));

const target = 'https://poiemaweb.com';

// const regExp = /^https/;
// console.log(regExp.test(target));

const regExp = /com$/;
console.log(regExp.test(target));



