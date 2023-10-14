const arr = [1, 2, 3];
const max = Math.max(...arr);

function foo(...rest) {
    console.log(rest);
}

foo(...[1, 2, 3]);