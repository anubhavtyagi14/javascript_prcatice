// for (var i = 0; i < 4; i++) {
//     setTimeout(
//         // argument #1 to setTimeout is a function.
//         // this "outer function" is immediately executed, with `i` as its parameter
//         (function (x) {
//             // the "outer function" returns an "inner function" which now has x=i at the
//             // time the "outer function" was called
//             return function () {
//                 console.log(x);
//             };
//         })(i) // execute the "closure" immediately, x=i, returns a "callback" function
//         // finishing up arguments to setTimeout
//         , i * 1000);
// }

// for (var i = 0; i < 3; i++) {
//     setTimeout(
//         (function (i_local) {
//             return function () {
//                 console.log(i_local);
//             }
//         })(i), 1000 + i);
// }

const counter = () => {
    let count = 0;
    return {
        increment: () => {
            count++;
            console.log(count);
        },
        decrement: () => {
            count--;
            console.log(count);
        }
    }
}
const firstCounter = counter();
firstCounter.increment();
firstCounter.increment();
firstCounter.decrement();
const secCounter = counter();
secCounter.increment();
secCounter.increment();
secCounter.increment();