let counter = 0;

const withoutThrottle = (e) => {
    console.log(`Counter: ${++counter}`);
}
const withThrottle = throttle(withoutThrottle, 1000);
function throttle(fn, limit) {
    let flag = true;
    return function () {
        let obj = this, args = arguments;
        if (flag) {
            fn.apply(obj, args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, limit);
        }
    }
}
