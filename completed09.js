// Exercise 9: Write a function named 'flattenArray' that takes an array of nested arrays and returns a single flattened array.

function flattenArray(arr) {
  let result = []

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      result.push(arr[i][j])
    }
  }

  return result
}


console.log(flattenArray([[1, 2], [3, 4], [5, [6, 7]]])) // [1, 2, 3, 4, 5, 6, 7]