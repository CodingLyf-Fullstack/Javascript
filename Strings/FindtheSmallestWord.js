function findtheSmallestWord(str) {
    let arr = str.split(" ");
    if(arr.length == 0) return "";
    if(arr.length == 1) return arr[0];
    let smallest = arr[0];
    for(let i = 1;i<arr.length;i++) {
        if(arr[i].length < smallest.length) {
            smallest = arr[i]
        }
    }
    return smallest;
}

console.log(findtheSmallestWord("CodingLyf is one of best insta channels"));