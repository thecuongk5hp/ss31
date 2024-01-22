function fakeFilter(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
let result1 = fakeFilter([1, 2, 3, 4], function (e) {
    return e % 2 === 0;
});
console.log(result1);
let result2 = fakeFilter([1, 2, 3, 4], function (e) {
    return e % 2 !== 0;
});
console.log(result2);
