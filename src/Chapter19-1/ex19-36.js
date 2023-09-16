const Person = (function () {
    function Person(name) {
        this.name = name;
    }

    Person.prototype.sayhello = function () {
        console.log(`Hi My name is ${this.name}`);
    };

    return Person;
}());

const me = new Person("Lee");

me.sayhello = function () {
    console.log(`Hey My name is ${this.name}`);
};

console.log(me.sayhello());

delete me.sayhello;

me.sayhello();

delete me.sayhello;

me.sayhello();

delete Person.prototype.sayhello;
me.sayhello(); //타입 에러

