function removeDuplicates(arr) {
  if (arr.length === 0) return [];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4]));
// Output: [1, 2, 3, 4]