let input = "i like this program very much";

let inputArr = input.split(" ");

const output = inputArr.reduce((acc, cur) => {

    return `${cur} ${acc}`

});

console.log(output)