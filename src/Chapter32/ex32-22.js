// const str = "Hello World";

// console.log(str.substring(1, 4));
// console.log(str.substring(1));
//
// console.log(str.substring(4, 1));
// console.log(str.substring(-2));
// console.log(str.substring(1, 100));
// console.log(str.substring(20));
//
// str.substring(0, str.indexOf(" "));
// str.substring(str.indexOf(" ") + 1, str.length);

// str.substring(0,5);
// str.slice(0,5);
//
// console.log(str.substring(2));
// console.log(str.slice(2));
//
// str.substring(-5);
// console.log(str.slice(-5));

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// const str = '   foo   ';

// console.log(str.trim());
// console.log(str.trimStart());
// console.log(str.trimEnd());

// const str = 'abc';

// console.log(str.repeat());
// console.log(str.repeat(0));
// console.log(str.repeat(1));
// console.log(str.repeat(2));
// console.log(str.repeat(2.5));
// console.log(str.repeat(-1));

// const str = 'Hello world';
//
// console.log(str.replace('world', 'Lee'));

// const str = 'Hello Hello';
//
// str.replace(/hello/gi,'Lee');

const str = "How are you doing?";

str.split(" ");
console.log(str.split(/\s/));
console.log(str.split(""));
console.log(str.split());
console.log(str.split(' ', 3));

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('Hello world'));






