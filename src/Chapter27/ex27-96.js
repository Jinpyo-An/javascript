// const numbers = [1, 2, 3];
// const pows = [];
//
// numbers.forEach(item => pows.push(item ** 2));
// console.log(pows);
//
// [1,2,3].forEach((item,index,arr) =>{
//     console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`)
// });

// const numbers = [1, 2, 3];
//
// numbers.forEach((item, index, arr) => {
//     arr[index] = item ** 2;
// });
// console.log(numbers);

// class Numbers {
//     numberArrays = [];
//
//     multiply(arr) {
//         arr.forEach(function (item) {
//             this.numberArrays.push(item * item);
//         }, this);
//     }
// }
//
// const number = new Numbers();
// number.multiply([1, 2, 3]);
//
// console.log(number.numberArrays);

class Numbers {
    numberArray = [];

    multiply(arr) {
        arr.forEach(item => this.numberArray.push(item * item));
    }
}

const numbers = new Numbers();
numbers.multiply([1, 2, 3]);
console.log(numbers.numberArray);

