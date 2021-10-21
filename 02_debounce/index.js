let conuter = 0;
const withoutDebounce = (e) => {
    console.log(`Counter: ${++conuter}`);
}
const withDebounce = debounce(withoutDebounce, 300);

function debounce(fn, limit) {
    let timer;
    return function () {
        let obj = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(obj, args);
        }, limit);
    }
}
