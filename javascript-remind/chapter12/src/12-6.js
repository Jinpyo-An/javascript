function changeVal(primitive, obj) {
    primitive += 100;
    obj.name = "kim";
}

const num = 100;
const person = {name: "Lee"};

console.log(num);
console.log(person);

changeVal(num, person);

console.log(num);

console.log(person);