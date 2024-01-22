function chunkArrayInGroups(arr, n) {
    let result = [];
    for (let i = 0; i < arr.length; i += n) {
      let chunk = arr.slice(i, i + n);
      result.push(chunk);
    }
    return result;
}
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 3));
  