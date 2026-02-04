function findMax(arr) {
  if (arr.length === 0) {
    return undefined; // Handle empty array
  }

  let max = arr[0]; // Start with first element

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; // Update max when bigger value found
    }
  }

  return max;
}

// Example usage
const numbers = [1, 6, -33, 34, 4, 8, 2];
console.log("Maximum number is:", findMax(numbers));
