print = () => {
    const [f1, f2, f3, f4, f5, f6] = fib();
 
}
function* fib() {
    let current = 1, next = 1;
    while (true) {
        yield current;
        [current, next] = [next, next + current];
    }
}
function fibRecurrsive(n) {
    if (n == 0) return 1;
    if (n == 1) return 1;
    return fibRecurrsive(n - 1) + fibRecurrsive(n - 2);
}
function fibDP(n, cache = null) {
    if (n == 0) return 1;
    if (n == 1) return 1;
    if (!cache) cache = {};
    if (cache[n]) return cache[n];
    const result = fibRecurrsive(n - 1, cache) + fibRecurrsive(n - 2, cache);
    cache[n] = result;
    return result;
}

