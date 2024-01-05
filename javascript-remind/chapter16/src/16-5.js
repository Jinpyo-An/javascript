// const person = {name:'Lee'};
//
// console.log(Object.isExtensible(person));
//
// Object.preventExtensions(person);
//
// console.log(Object.isExtensible(person));
//
// person.age = 20;
// console.log(person);
//
// delete person.name;
// console.log(person);
//
// Object.defineProperty(person, 'age', {value: 20});

const person = {
    name: 'Lee',
    address: {city: 'Seoul'}
};

Object.freeze(person);

console.log(Object.isFrozen(person));
