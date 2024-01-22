function fakeReduce(arr, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : arr.shift();
    arr.forEach((currentValue, index) => {
        accumulator = callback(accumulator, currentValue, index, arr);
    });
    return accumulator;
}
let sum = fakeReduce([1, 2, 3, 4], function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum);
let product = fakeReduce([1, 2, 3, 4], function (accumulator, currentValue) {
    return accumulator * currentValue;
}, 1);
console.log(product);
let concatString = fakeReduce(['Hello', ' ', 'World'], function (accumulator, currentValue) {
    return accumulator + currentValue;
}, '');
console.log(concatString);
