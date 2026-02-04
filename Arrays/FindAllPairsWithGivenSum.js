function findAllPairsWithGivenSum(arr, target) {
    const set = new Set();
    let sum = []
    for(let a of arr) {
        const complement = target - a;
        if(set.has(complement)) {
            sum.push([complement, a])
        } 
        set.add(a);
    }
    return sum;
}

console.log(findAllPairsWithGivenSum([1, 2, 3, 4, 5], 7))