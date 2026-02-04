function findSecondLargestNumber(arr) {
    let largest = 0;
    let secondLargest = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if(arr[i] > secondLargest) {
             secondLargest = arr[i]
        }
    }

    return secondLargest;
}

console.log(findSecondLargestNumber([2, 5, 6, 4, 1, 3, 10, 8, 7]))