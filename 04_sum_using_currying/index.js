// function sum(x) {
//     return function (y) {
//         return y ? sum(x + y) : x;
//     }
// }
const sum = x => y => y ? sum(x + y) : x;

let calculatedSum = sum(2)(30)(14)(10)();
console.log(calculatedSum);