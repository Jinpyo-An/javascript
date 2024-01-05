// const tel = '010-1234-567팔';
// const regExp = /^d{3}-\d{4}-\d{4}$/;
// console.log(regExp.test(tel));

// const target = 'Is this all there is?';
// const regexp = /is/i;
// console.log(regexp.test(target));

// const target = 'Is this all there is?';
// const regexp = new RegExp(/is/i);
// regexp.test(target);

const count = (str, char) => (str.match(new RegExp(char, "gi")) ?? []).length;

count("Is this all there is?", "is");
count("is this all there is?", "is");




