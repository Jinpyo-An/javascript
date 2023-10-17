// Set.prototype.intersection = function (set) {
//     const result = new Set();
//
//     for (const value of set) {
//         if (this.has(value)) result.add(value);
//     }
//
//     return result;
// };
//
// const setA = new Set([1, 2, 3, 4]);
// const setB = new Set([2, 4]);
//
// console.log(setA.intersection(setB));
// console.log(setB.intersection(setA));

// Set.prototype.intersection = function (set) {
//     return new Set([...this].filter(v => set.has(v)));
// };
//
// const setA = new Set([1, 2, 3, 4]);
// const setB = new Set([2, 4]);
//
// console.log(setA.intersection(setB));
// console.log(setB.intersection(setA));

// Set.prototype.union = function (set) {
//     const result = new Set(this);
//
//     for (const value of set) {
//         result.add(value);
//     }
//
//     return result;
// };
//
// const setA = new Set([1, 2, 3, 4]);
// const setB = new Set([2, 4]);
//
// console.log(setA.union(setB));
// console.log(setB.union(setA));

// Set.prototype.union = function (set) {
//     return new Set([...this, ...set]);
// };
//
// const setA = new Set([1, 2, 3, 4]);
// const setB = new Set([2, 4]);
//
// console.log(setA.union(setB));
// console.log(setB.union(setA));

// Set.prototype.difference = function (set) {
//     const result = new Set(this);
//
//     for (const value of set) {
//         result.delete(value);
//     }
//
//     return result;
// };

// Set.prototype.difference = function (set) {
//     return new Set([...this].filter(v => !set.has(v)));
// }
//
// const setA = new Set([1, 2, 3, 4]);
// const setB = new Set([2, 4]);
//
// console.log(setA.difference(setB));
// console.log(setB.difference(setA));

// Set.prototype.isSuperset = function (subset) {
//     for(const value of subset) {
//         if(!this.has(value)) return false;
//     }
//
//     return true;
// };

Set.prototype.isSuperset = function (subset) {
    const supersetArr = [...this];
    return [...subset].every(v => supersetArr.includes(v));
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

console.log(setA.isSuperset(setB));
console.log(setB.isSuperset(setA));





