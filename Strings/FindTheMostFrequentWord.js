function findTheMostFrequentWord(str) {
    let frequency = {};
    // Count occurrences of each character
    const arr = str.split(" ");
    for (let char of arr) {
        frequency[char] = (frequency[char] || 0) + 1;
    }
   
    //Sort the frequency object based on values. 
    const values = Object.entries(frequency).sort(([,a],[,b]) => b - a);
    
    //Construct new object based on sorted 
    frequency = Object.fromEntries(values);
  
    //Get keys and return the first key, as object is sorted based on value,
    //first key is the word that repeated frequently 
    return Object.keys(frequency)[0];
}

console.log(findTheMostFrequentWord("cat and the dog the"));