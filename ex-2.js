let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(Array) {
  // Start coding here
  return Array.length >= 5;
}

const result = words.filter(get5CharWords);

console.log(result); // Output: ["apple", "elephant"]
