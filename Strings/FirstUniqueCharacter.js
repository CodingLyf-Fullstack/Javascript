function findFirstUniqueCharacter(str) {
    let frequency = {}
    for (let char of str) {
        frequency[char] = (frequency[char] || 0) + 1
    }

    for (let char of str) {
        if (frequency[char] == 1)
            return char;
    }
}

let str = "javascript";
console.log(findFirstUniqueCharacter(str))