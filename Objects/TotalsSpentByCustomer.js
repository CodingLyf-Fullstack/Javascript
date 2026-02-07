let orders = [
    {
        orderId: 1,
        customerName: "Alice",
        items: [
            { name: "Laptop", price: 1000 },
            { name: "Mouse", price: 50 },
        ],
        status: "Completed",
    },
    {
        orderId: 2,
        customerName: "Bob",
        items: [{ name: "Phone", price: 500 }],
        status: "Pending",
    },
    {
        orderId: 3,
        customerName: "Alice",
        items: [{ name: "Keyboard", price: 100 }],
        status: "Completed",
    },
    {
        orderId: 4,
        customerName: "Charlie",
        items: [{ name: "Monitor", price: 300 }],
        status: "Completed",
    },
];

const output = orders.filter(order => {
    return order.status == 'Completed'
}).reduce((acc, cur) => {
    const total = cur.items.reduce((acc, cur) => {
        return acc+cur.price
    },0);
    acc[cur.customerName] = (acc[cur.customerName] || 0 )+total;
    return acc;
},{})

let outputArr = []
for(let o in output) {
    outputArr.push({customerName: o, totalSpent: output[o]})
}

console.log(outputArr)