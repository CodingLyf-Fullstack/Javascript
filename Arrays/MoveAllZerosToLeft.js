function moveZerosToLeft(nums) {
  let pos = nums.length-1;
  let n = nums.length;
  for (let i = n-1; i >=0; i--) {
    if (nums[i] !== 0) {
      nums[pos] = nums[i];
      pos--;
    }
  }

  // fill remaining positions with 0
  while (pos >= 0) {
    nums[pos] = 0;
    pos--;
  }

  return nums;
}

console.log(moveZerosToLeft([0,1, 3, 0, 0]));
// Input:  [0,1, 3, 0, 0]
// Output: [0, 0, 0, 1, 3]
