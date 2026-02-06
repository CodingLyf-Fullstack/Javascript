let s1 = "Coding";
let s2 = "Lyf";

let length = Math.min(s1.length, s2.length);
let i = 0;

let output = "";
while (i < length) {
    output = `${output}${s1[i]}${s2[i]}`
    i++;
}
if (i < s1.length) {
    output = `${output}${s1.slice(i)}`
} else if (i < s2.length) {
    output = `${output}${s2.slice(i)}`
}
console.log(output)