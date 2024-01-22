function fakeFind(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        return arr[i];
      }
    }
    return undefined;
  }
  const result1 = fakeFind([1, 2, 3, 4], function(a) {
    return a % 2 === 0;
  });
  console.log(result1);
  const result2 = fakeFind([1, 2, 3, 4], function(a) {
    return a % 2 !== 0;
  });
  console.log(result2);
  