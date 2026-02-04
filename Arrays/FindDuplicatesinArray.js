// Find the Duplicates in an Array
// Problem: You are given an array of integers. Write a program to find all the
// duplicate elements in the array.

// Input: [4, 3, 2, 7, 8, 2, 3, 1];
// Output: [2, 3];

function findDuplicatesElements(arr) {
    const map = new Map();
    let duplicates = [];
    for(let num of arr) {
        if(map.has(num)) {
            duplicates.push(num)
        } else {
            map.set(num, map.get(num) ? map.get(num)+1: 0)
        }
    }
    return duplicates;
}

console.log(findDuplicatesElements([4, 3, 2, 4, 8, 2, 3, 1]));