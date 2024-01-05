// const error = new Error("invalid");

// try {
//     throw new Error('something wrong');
// } catch (error) {
//     console.log(error);
// }

const repeat = (n, f) => {
    if (typeof f !== "function") throw new TypeError("f must be a function");

    for (let i = 0; i < n; i++) {
        f(i);
    }
};

try {
    repeat(2, 1);
} catch (err) {
    console.error(err);
}

