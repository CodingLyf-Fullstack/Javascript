const flatten = (arr) => {
    return arr.reduce((acc, cv) => {
        Array.isArray(cv) ? acc.push(...flatten(cv)) :
        acc.push(cv);
        return acc;
    }, [])
}

let res = [];
const arr = [1,2,[3,4],[7,[8,9],10]];
console.log(flatten(arr,1, res))