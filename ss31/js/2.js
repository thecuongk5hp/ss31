function largestOfArrs(arrays) {
    let hasNonEmptyArray = false;
    for (let i = 0; i < arrays.length; i++) {
      if (arrays[i].length !== 0) {
        hasNonEmptyArray = true;
        break;
      }
    }
    if (!hasNonEmptyArray) {
      return [];
    }
    let result = [];
    for (let i = 0; i < arrays.length; i++) {
      let currentMax = arrays[i][0];
      for (let j = 1; j < arrays[i].length; j++) {
        if (arrays[i][j] > currentMax) {
          currentMax = arrays[i][j];
        }
      }
      result.push(currentMax);
    }
    return result;
  }
  console.log(largestOfArrs([[1, 2, 3, 4], [-1, -2, -3], [5, 1, 2, 9]]));
  console.log(largestOfArrs([[1, 2, 3, 4], [5, 1, 2, 9]]));
  console.log(largestOfArrs([]));
  