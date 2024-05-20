let words = ["hello", "world"];

function getWordLengths(words) {
  // Start coding here
  // return words.map(callback);
  return words.map((value) => value.length);
}
// const callback = (value) => value.length;

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
