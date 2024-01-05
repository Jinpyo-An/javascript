// console.log("[Start]");
//
// foo();
//
// console.log("[End]");

// console.log("[Start]");
//
// try {
//     foo();
// } catch (error) {
//     console.error("[에러 발생]", error);
// }
//
// console.log("[End]");

console.log("[Start]");

try {
    foo();
} catch (err) {
    console.error(err);
} finally {
    console.log("finally");
}

console.log("[End]");