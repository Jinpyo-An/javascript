const arr = [1, 2, 3];

arr.slice(0, 1);

arr.slice(1, 2);

console.log(arr);

arr.slice(1);

arr.slice(-1);

arr.slice(-2);

const copy = arr.slice();
console.log(copy);
console.log(arr === copy);
