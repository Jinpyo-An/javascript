var x = 10;

function foo() {
    y=20;
    console.log(x+y);
}

foo();

console.log(x);
console.log(y);

delete y;

console.log(x);
console.log(y);