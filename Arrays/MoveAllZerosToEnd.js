function moveZerosToEnd(nums) {
  let pos = 0;
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] !== 0) {
      nums[pos] = nums[i];
      pos++;
    }
  }

  // fill remaining positions with 0
  while (pos < n) {
    nums[pos] = 0;
    pos++;
  }

  return nums;
}

console.log(moveZerosToEnd([0, 1, 0, 3, 12]));
// Output: [1, 3, 12, 0, 0]
