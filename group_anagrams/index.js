function groupAnagrams(arrStr) {
    const hashMap = {};
    arrStr.forEach(str => {
        const hashKey = str.split('').sort().join('');
        hashMap[hashKey] ? hashMap[hashKey].push(str) : hashMap[hashKey] = [str];
    });
    Object.keys(hashMap).map(val=>console.log(val));
    Object.values(hashMap).map(val=>console.log(val));
}
groupAnagrams(["eat","tea","tan","ate","nat","bat"]);