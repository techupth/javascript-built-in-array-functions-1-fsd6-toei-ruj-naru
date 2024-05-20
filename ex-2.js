let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  // Start coding here
  return words.filter((value) => (value.length >= 5 ? true : false));
}

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
