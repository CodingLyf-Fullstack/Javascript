

function flattenArray(arr) {
    let result = [];
    let stack = [...arr];

    while (stack.length) {
        let next = stack.pop();
        console.log(next)

        if (Array.isArray(next)) {
            stack.push(...next);
        } else {
            result.push(next);
        }
    }

    return result.reverse();
}

let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flatArray = flattenArray(nestedArray);
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]