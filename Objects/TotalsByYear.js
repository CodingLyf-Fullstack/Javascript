let data =[
    {"year":"2018", "name":"test", "total":1200},
    {"year":"2019", "name":"wath", "total":1500},
    {"year":"2019", "name":"wath", "total":1800},
    {"year":"2020", "name":"zooi", "total":1000},
];

const totalsByYear = data.reduce((acc, cur) => {
    acc[cur.year] = (acc[cur.year] || 0) + cur.total;
    return acc;
}, {})

console.log(totalsByYear)