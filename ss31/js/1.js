function findLongestWordLength(inputString) {
    let currentWord = "";
    let longestWord = "";
    let maxLength = 0;
    for (let i = 0; i < inputString.length; i++) {
      let currentChar = inputString[i];
      if (currentChar === " " || i === inputString.length - 1) {
        let currentLength = currentWord.length;
        if (currentLength > maxLength) {
          maxLength = currentLength;
          longestWord = currentWord;
        }
        currentWord = "";
      } else {
        currentWord += currentChar;
      }
    }
    return [longestWord, maxLength];
  }
  let inputString = "The quick brown fox jumped over the lazy dog";
  let result = findLongestWordLength(inputString);
  console.log(result);
  