const findConsecutive = (array) => {
  let maxCount = 0;
  let currentCount = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      currentCount++;
      maxCount = Math.max(currentCount, maxCount);
    } else {
      currentCount = 0;
    }
  }

  console.log(maxCount);
};

findConsecutive([1, 1, 0, 1, 1, 1, 0, 1]); // Output: 3