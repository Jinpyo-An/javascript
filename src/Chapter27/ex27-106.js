// const numbers = [1, 4, 9];
//
// const roots = numbers.map(item => Math.sqrt(item));
//
// console.log(numbers);
// console.log(roots);

class Prefixer {
    constructor(prefix) {
        this.prefix = prefix;
    }

    add(arr) {
        return arr.map(item => this.prefix + item);
    }
}

const prefixer = new Prefixer("-webkit-");
console.log(prefixer.add(["transition", "user-select"]));


