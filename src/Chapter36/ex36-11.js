// const user = {firstName: "Ungmo", lastName: "Lee"};

// const {lastName, firstName} = user;
//
// console.log(firstName,lastName);

// const {lastName: ln, firstName: fn} = user;
//
// console.log(ln, fn);

// const {firstName = "Ungmo", lastName} = {lastName: "Lee"};
//
// const {firstName: fn = "Ungmo", lastName: ln} = {lastName: "Lee"};

// const str = "Hello";
//
// const {length} = str;
// console.log(length);
//
// const todo = {id: 1, content: "HTML", completed: true};
// const {id} = todo;
// console.log(id);

// function printTodo({content, completed}) {
//     console.log(`할일 ${content}은 ${completed ? "완료" : "비완료"} 상태입니다.`);
// }
//
// printTodo({id: 1, content: "HTML", completed: true});

// const todos = [
//     {id: 1, content: "HTML", completed: true},
//     {id: 2, content: "CSS", completed: false},
//     {id: 3, content: "JS", completed: false},
// ];
//
// const [,{id}] = todos;
// console.log(id);

const user = {
    name: "Lee",
    address: {
        zipCode: "03045",
        city: "Seoul",
    },
};

const {address: {city}} = user;
console.log(city);

const {x, ...rest} = {x: 1, y: 2, z: 3};
console.log(x,rest);



