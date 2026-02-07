const employees = [
    { name: "Mahesh", skills: ["JavaScript", "React", "Node.js"] },
    { name: "TATA", skills: ["Java", "Spring", "Node.js"] },
    { name: "Hema", skills: ["JavaScript", "Python", "Django"] },
];

const uniqueSkills = [
...new Set(employees.flatMap((employee) => employee.skills)),
].sort();

console.log(uniqueSkills)