let orders = [
    { id: 101, total: 250, status: "completed" },
    { id: 102, total: 150, status: "pending" },
    { id: 103, total: 200, status: "completed" },
];

const total = orders
.filter(o => o.status === 'completed')
.reduce((acc, cur) => {
    return acc.total+cur.total
});

console.log(total)

