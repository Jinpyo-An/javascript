// const arr = [1, 2, 3];
// const [one, two, three] = arr;
// console.log(one, two, three);
//
// const [x, y] = [1, 2];

// const [a, b] = [1, 2];
// console.log(a, b);
//
// const [c, d] = [1];
// console.log(c, d);
//
// const [e, f] = [1, 2, 3];
// console.log(e, f);

const [a, b, c = 3] = [1, 2];
console.log(a, b, c);

const [e, f = 10, g = 3] = [1, 2];
console.log(e, f, g);



