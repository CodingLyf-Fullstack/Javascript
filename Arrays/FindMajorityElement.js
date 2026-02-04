// Reel 37:
// Find the Majority Element in an Array

// Problem:
// You are given an array of integers, where a majority element is defined as an element
// that appears more than n / 2 times (where n is the size of the array). Your task is to find
// and return the majority element.

// Input:
// [3, 3, 4, 2, 3, 3, 3, 1];
// Output: 3

let input = [3, 3, 4, 2, 3, 3, 3, 1];
function findTheMajorityElement(arr) {
    let frequency = {};
    for(let a of arr) {
        frequency[a] = (frequency[a] || 0) + 1;
        if(frequency[a] > arr.length / 2) {
            return a;
        }
    }


    return -1;
}

console.log(findTheMajorityElement(input))