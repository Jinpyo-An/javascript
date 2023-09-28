// const sum = [1, 2, 3, 4].reduce((accumulator, currentValue, index, array) => accumulator + currentValue, 0);
//
// console.log(sum);

// const values = [1, 2, 3, 4, 5, 6];
//
// const average = values.reduce((acc, cur, i, {length}) => {
//     return i === length - 1 ? (acc + cur) / length : acc + cur;
// }, 0);
//
// console.log(average);

// const values = [1, 2, 3, 4, 5];

// const max = values.reduce((acc, cur) => (acc > cur ? acc : cur), 0);
// console.log(max);

// const max = Math.max(...values);
// console.log(max);

// const fruits = ["banana", "apple", "orange", "orange", "apple"];
//
// const count = fruits.reduce((acc, cur) => {
//     acc[cur] = (acc[cur] || 0) + 1;
//     return acc;
// }, {});
//
// console.log(count);

// const values = [1, [2, 3], 4, [5, 6]];
// const flatten = values.reduce((acc, cur) => acc.concat(cur), []);
//
// console.log(flatten);

// const values = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];
//
// const result = values.filter((val, i, _values) => _values.indexOf(val) === i);
// console.log(result);

const sum = [1, 2, 3, 4].reduce((acc, cur) => acc + cur);
console.log(sum);




