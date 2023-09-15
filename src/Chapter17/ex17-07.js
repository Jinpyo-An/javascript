function Cricle(radius) {
    this.radius = radius;
    this.getDiameter = function (){
        return 2 *this.radius;
    }
}

const circle1 = new Cricle(5);
