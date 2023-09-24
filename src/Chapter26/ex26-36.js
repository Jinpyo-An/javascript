const counter = {
    num: 1,
    increase: () => ++this.num,
};

console.log(counter.increase());

const person = {
    name: "Lee",
    sayHi: () => console.log(`Hi ${this.name}`),
};

person.sayHi();