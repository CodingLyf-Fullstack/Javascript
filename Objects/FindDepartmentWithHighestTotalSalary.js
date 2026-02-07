let employees = [
    { name: "Alice", department: "IT", salary: 70000 },
    { name: "Bob", department: "HR", salary: 50000 },
    { name: "Charlie", department: "IT", salary: 80000 },
    { name: "David", department: "Finance", salary: 90000 },
    { name: "Eve", department: "HR", salary: 55000 },
    { name: "Frank", department: "Finance", salary: 85000 },
];

const totalSalariesDepartmentWise = employees.reduce((acc, cur) => {
    acc[cur.department] =  (acc[cur.department] || 0)+cur.salary
    return acc;
}, {});

console.log(totalSalariesDepartmentWise);

let maxTotal = 0; let department="";
for(let i in totalSalariesDepartmentWise) {
    if(totalSalariesDepartmentWise[i] > maxTotal) {
        department = i;
        maxTotal = totalSalariesDepartmentWise[i];
    }
}

console.log("Department: "+department)
