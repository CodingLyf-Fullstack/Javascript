
function segregateByLength(input, key) {
    return input.reduce((acc, cur) => {
        acc[cur[key]] = acc[cur[key]] || [];
        acc[cur[key]].push(cur);
        return acc;
    },{})
}

console.log(segregateByLength(['one', 'two', 'three', 'four', 'five', 'six'], 'length'));