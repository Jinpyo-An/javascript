// const obj = {x: 1, y: 2};
// const copy = {...obj};
// console.log(copy);
// console.log(copy === obj);
//
// const merged = {x: 1, y: 2, ...{a: 3, b: 4}};
// console.log(merged);

const merged = {...{x: 1, y: 2}, ...{y: 10, z: 3}};
console.log(merged);

const changed = {...{x: 1, y: 2}, y: 100};
console.log(changed);

const added = {...{x: 1, y: 2}, z: 0};
console.log(added);