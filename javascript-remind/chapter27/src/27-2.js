// const fruits = ["Banana", "Orange", "Apple"];
//
// fruits.sort();
//
// console.log(fruits);
//
// fruits.reverse();
//
// console.log(fruits);

// const points = [40, 100, 1, 5, 2, 25, 10];
//
// points.sort((a, b) => a - b);
// console.log(points);

// const todos = [
//     {id: 4, content: "Javascript"},
//     {id: 1, content: "HTML"},
//     {id: 2, content: "CSS"},
// ];
//
// function compare(key) {
//     return (a, b) => (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0));
// }
//
// todos.sort(compare("id"));
// console.log(todos);
//
// todos.sort(compare("content"));
// console.log(todos);

// const numbers = [1, 2, 3];
// const pows = [];
//
// numbers.forEach(item => pows.push(item ** 2));
// console.log(pows);

// const numbers = [1, 2, 3];
// numbers.forEach((item, index, arr) => {
//     console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
// });

// class Numbers {
//     numberArray = [];
//
//     multiply(arr) {
//         arr.forEach(item => this.numberArray.push(item * item));
//     }
// }
//
// const numbers = new Numbers();
// numbers.multiply([1, 2, 3]);
// console.log(numbers.numberArray);

// const numbers = [1, 4, 9];
//
// const roots = numbers.map(item => Math.sqrt((item)));
//
// console.log(numbers);
// console.log(roots);

// [1, 2, 3].map((item, index, arr) => {
//     console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
//     return item;
// });

// class Prefixer {
//     constructor(prefix) {
//         this.prefix = prefix;
//     }
//
//     add(arr) {
//         return arr.map(item => this.prefix + item);
//     }
// }
//
// const prefixer = new Prefixer("-webkit-");
// console.log(prefixer.add(["transition", "user-select"]));

// const number = [1, 2, 3, 4, 5];
//
// const odds = number.filter(item => item % 2);
// console.log(odds);


// class Users {
//     constructor() {
//         this.users = [
//             {id: 1, name: "Lee"},
//             {id: 2, name: "Kim"},
//         ];
//     }
//
//     findById(id) {
//         return this.users.filter(user => user.id === id);
//     }
//
//     remove(id) {
//         this.users = this.users.filter(user => user.id !== id);
//     }
// }
//
// const users = new Users();
//
// let user = users.findById(1);
// console.log(user);
//
// users.remove(1);
//
// user = users.findById(1);
// console.log(user);

// const values = [1, 2, 3, 4, 5, 6];
//
// const average = values.reduce((acc, cur, i, {length}) => {
//     return i === length - 1 ? (acc + cur) / length : acc + cur;
// }, 0);
//
// console.log(average);
//
// const values1 = [1, 2, 3, 4, 5];
//
// const max = values1.reduce((acc, cur) => (acc > cur ? acc : cur), 0);
// console.log(max);

// const values = [1, 2, 3, 4, 5];
//
// const max = Math.max(...values);
//
// console.log(max);

// const fruits = ["banana", "apple", "orange", "orange", "apple"];
//
// const count = fruits.reduce((acc, cur) => {
//     acc[cur] = (acc[cur] || 0) + 1;
//     return acc;
// }, {});
//
// console.log(count);

// const products = [
//     {id: 1, price: 100},
//     {id: 2, price: 200},
//     {id: 3, price: 300},
// ];
//
// const priceSum = products.reduce((acc, cur) => acc + cur.price, 0);
//
// console.log(priceSum);

const users = [
    {id: 1, name: "Lee"},
    {id: 2, name: "Kim"},
    {id: 3, name: "Choi"},
    {id: 4, name: "Park"},
];

users.find(user => user.id === 2);





