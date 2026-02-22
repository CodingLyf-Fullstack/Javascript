function add(a) {
    return function(b) {
        return b ? add(a+b) : a
    }
}

console.log(add(1)(2)(3)(4)(5)(6)())