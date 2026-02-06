function findNumberofOccurences(str) {

    let occurences = {};
    for(let s of str) {
        occurences[s] = (occurences[s] || 0) + 1;
    }

    return occurences;
}

console.log(findNumberofOccurences('javascript'))