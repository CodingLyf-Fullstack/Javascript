let str = "abcdef"

function rotateByKSteps(k) {
  
      // This takes the last k characters from the string
    // Example: if str = "ABCDE" and k = 2 , this gives "DE"
    let lastPart = str.slice(str.length - k);

    // This takes everything before those last k characters
    // From start of string till (length - k)
    // Example: "ABCDE" , this gives "ABC"
    let firstPart = str.slice(0, str.length - k);

    // Join both parts: last comes first, first goes after
    // Result: "DE" + "ABC" -> "DEABC"
    return lastPart + firstPart;
}

console.log(rotateByKSteps(3))