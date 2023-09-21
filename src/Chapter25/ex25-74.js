class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.width;
    }

    toStirng() {
        return `width = ${this.width}, height = ${this.height}`;
    }
}

class ColorRectangle extends Rectangle {
    constructor(width, height, color) {
        super(width, height);
        this.color = color;
    }

    toStirng() {
        return super.toStirng() + `, color = ${this.color}`;
    }
}

const colorRectangle = new ColorRectangle(2,4,'red');
console.log(colorRectangle);

console.log(colorRectangle.getArea());
console.log(colorRectangle.toStirng());