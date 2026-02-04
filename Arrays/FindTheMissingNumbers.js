function findAllMissingNumbers(arr, startRange, endRange) {
  const numSet = new Set(arr); // Store array elements in a Set for quick lookups
  const missingNumbers = [];

  let start = Math.min(...arr);
  let end = Math.max(...arr)
  // Iterate through the entire range and check for the presence of each number in the Set
  for (let i = start; i <= end; i++) {
    if (!numSet.has(i)) {
      missingNumbers.push(i);
    }
  }

  return missingNumbers;
}

const multiMissingArray = [9, 1, 4, 2, 10, 6];

console.log(`The missing numbers are: ${findAllMissingNumbers(multiMissingArray)}`); 

