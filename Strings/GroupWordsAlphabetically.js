const words = [
    "Apple",
    "Animals",
    "Bat",
    "Ball",
    "Cat",
    "Candy",
    "Dog",
    "Dare",
    "Earth",
    "Exam",
    "Gang",
    "Gun",
    "Hat",
    "Hate"]

const group = [];
for (let word of words) {
    (group[word.slice(0, 1)] = group[word.slice(0, 1)] || []).push(word)
}

console.log(group)













// let person = {
//   name: "Titus",
//   greet() {
//     console.log("Hello " + this.name);
//   }
// };

// let user = { name: "John" };

// let greetUser = person.greet.bind(user);

// console.dir(greetUser)
// greetUser();




const add = (a) => (b) => a+b;

console.log(add(2)(3));


















































