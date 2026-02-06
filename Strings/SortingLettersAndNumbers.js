let input = "orange 3 apple 1 banana 2";

let words = input.split(" ");
let letters = words.filter(w => isNaN(w)).sort((a,b) => a.localeCompare(b));
let numbers = words.filter(w => !isNaN(w)).sort((a,b) => a - b);

let lettersIndex = 0; ; let numberIndex =0;

let newWords = words.map(w => isNaN(w) ? letters[lettersIndex++] : numbers[numberIndex++]);

console.log(newWords.join(" "));
