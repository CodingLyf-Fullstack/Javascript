let orders = [
{ id: 101, status: "completed" },
{ id: 102, status: "pending" },
{ id: 103, status: "completed" },
{ id: 104, status: "pending" },
{ id: 105, status: "cancelled" },
];

const output = orders.reduce((acc,cur) => {
    acc[cur.status] = (acc[cur.status] || 0)+1;
    return acc;
},{})

console.log(output)