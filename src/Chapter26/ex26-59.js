function sum(x = 0, y = 0) {
    return x + y;
}

console.log(sum(1, 2));
console.log(sum(1));

function logName(name = "Lee") {
    console.log(name);
}

logName();
logName(undefined);
logName(null);