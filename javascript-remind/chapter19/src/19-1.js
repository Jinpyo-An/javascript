// const person = {
//     name: 'Lee',
//     address: 'seoul',
// };
//
// console.log(person);

// function Circle(radius) {
//     this.radius = radius;
//     this.getArea = function () {
//         return Math.PI * this.radius * 2;
//     };
// }
//
// const circle1 = new Circle(1);
// const circle2 = new Circle(2);
//
// console.log(circle1.getArea === circle2.getArea);

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.getArea = function () {
    return Math.PI * this.radius **2;
}

const circle1 = new Circle(1);
const circle2 = new Circle(2);

console.log(circle1.getArea === circle2.getArea);



