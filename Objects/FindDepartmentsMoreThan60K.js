
let employees = [
{ name: "Alice", department: "IT", salary: 70000 },
{ name: "Bob", department: "HR", salary: 50000 },
{ name: "Charlie", department: "IT", salary: 80000 },
{ name: "David", department: "Finance", salary: 90000 },
{ name: "Eve", department: "HR", salary: 55000 },
{ name: "Frank", department: "Finance", salary: 85000 },
];

const employeesWith60K = employees
.filter(e => e.salary > 60000)
.map((e) => {
   return e.department;
})

console.log([...new Set(employeesWith60K)]);




