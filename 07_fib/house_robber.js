function house_robber_recursice(house_values, i, j) {
    if (i == j) return house_values[i];
    if (i + 1 == j) return Math.max(house_values[i], house_values[j]);

    const option1 = house_values[i] + house_robber_recursice(house_values, i + 2, j);
    const option2 = house_robber_recursice(house_values, i + 1, j);
    return Math.max(option1, option2);
}
function house_robber_dp(house_values, i, j, cache) {
    if (i == j) return house_values[i];
    if (i + 1 == j) return Math.max(house_values[i], house_values[j]);

    if (cache[i][j]) return cache[i][j];
    const option1 = house_values[i] + house_robber_recursice(house_values, i + 2, j, cache);
    const option2 = house_robber_recursice(house_values, i + 1, j, cache);
    const res = Math.max(option1, option2);
    cache[i][j] = res;
    return res;
}
function house_robber_optimal(house_values) {
    let a = 0, b = 0;
    house_values.forEach(val => {
        [a, b] = [b, Math.max(b, a + val)];
    });

    return b;
}
const arrHouseVal = [1, 9, 6, 3, 2, 7, 9];
console.log('Recursive Sol:', house_robber_recursice(arrHouseVal, 0, arrHouseVal.length - 1));
let cache = new Array(new Array());
console.log('DP Sol:', house_robber_dp(arrHouseVal, 0, arrHouseVal.length - 1, cache));
console.log('Optimal Sol:', house_robber_optimal(arrHouseVal));