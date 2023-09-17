function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function () {
        return this.radius * 2;
    };
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getDiameter());
console.log(circle2.getDiameter()); 