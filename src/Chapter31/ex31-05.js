const target = 'Is this all there is?';
const regExp = /is/g;

console.log(regExp.exec(target));

console.log(regExp.test(target));

console.log(target.match(regExp));
