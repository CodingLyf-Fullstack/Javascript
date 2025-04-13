var groupBy = function(data, key) {
  return data.reduce(function(acc, cv) {
      (acc[cv[key]] = acc[cv[key]] || []).push(cv);
      return acc;
  }, {});
};

console.log(groupBy(['one', 'two', 'three', 'four', 'five', 'six'], 'length'));

  let data =[
    {"id":"2018", "name":"test", "total":1200},
    {"id":"2019", "name":"wath", "total":1500},
    {"id":"2019", "name":"wath", "total":1800},
    {"id":"2020", "name":"zooi", "total":1000},
];

let map = data.reduce((prev, next) =>{
  if (next.id in prev) {
    prev[next.id].total += next.total;
  } else {
     prev[next.id] = next;
  }
  return prev;
}, {});

console.log(map)
let result = Object.keys(map).map(id => map[id]);

console.log(result);