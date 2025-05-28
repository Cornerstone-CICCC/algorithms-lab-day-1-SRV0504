// Exercise 15: Write a function named 'countWords' that takes a string of text and returns the number of words in the string.

function countWords(text) {
  if (!text.trim()) return 0
  return text.trim().split(/\s+/).length
}

// Example:
console.log(countWords("The quick brown fox jumps over the lazy dog")); // Output: 9