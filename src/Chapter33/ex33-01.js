// const mySymbol = Symbol();
// console.log(typeof mySymbol);
// console.log(mySymbol);
//
// const mySymbol1 = Symbol('mySymbol');
// const mySymbol2= Symbol('mySymbol');
// console.log(mySymbol1 === mySymbol2);

// const mySymbol = Symbol('mySymbol');
//
// console.log(mySymbol.description);
// console.log(mySymbol.toString());

// const mySymbol = Symbol();
// console.log(mySymbol + "");
// console.log(+mySymbol);

// const s1 = Symbol.for('mySymbol');
// const s2 = Symbol.for('mySymbol');
//
// console.log(s1 === s2);

const s1 = Symbol.for('mySymbol');
Symbol.keyFor(s1);

const s2 = Symbol('foo');
Symbol.keyFor(s2);




