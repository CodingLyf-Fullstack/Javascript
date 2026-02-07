const input = [
    { name: "Alice", department: "IT", salary: 70000 },
    { name: "Bob", department: "HR", salary: 50000 },
    { name: "Charlie", department: "IT", salary: 80000 },
    { name: "David", department: "Finance", salary: 60000 },
    { name: "Eve", department: "HR", salary: 55000 },
    { name: "Frank", department: "Finance", salary: 75000 },
];

const reduced = input.reduce((acc,curr) => {
    const dept = curr.department;
    acc[dept] = Math.max(acc[dept] || 0, curr.salary);
    return acc;
}, {});

const output = input.filter(e => {
    return e.salary === reduced[e.department]
})

console.log(output)
