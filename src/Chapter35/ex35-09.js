// var arr = [1,2].concat([3,4]);
// console.log(arr);

// const arr = [...[1, 2], ...[3, 4]];
// console.log(arr);

// const arr1 = [1,4];
// const arr2 = [2,3];
//
// arr1.splice(1,0,...arr2);
// console.log(arr1);

// const origin = [1, 2];
// const copy = [...origin];
//
// console.log(copy);
// console.log(origin === copy);

function sum() {
    return [...arguments].reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1,2,3));

