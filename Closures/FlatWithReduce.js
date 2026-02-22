const arr = [1,[2,[3,[4]]]]

const flat = function(arr) {
    return arr.reduce((acc, cur) => {
        if(Array.isArray(cur)) {
            acc.push(...flat(cur))
        } else {
            acc.push(cur)
        }
        return acc;
    }, []);
}

console.log(flat(arr))