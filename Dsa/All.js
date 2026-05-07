let users = [
  { name: "Ram", age: 20 },
  { name: "Rajesh", age: 25 },
  { name: "Rajkishoee", age: 26 },
  { name: "Raj", age: 20 },
  { name: "Rajib", age: 25 },
];

const result = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(result); // {"20":2,"25":2,"26":1}

const output = users.reduce(function (acc, curr) {
  if (curr.age > 24) {
    acc.push(curr.name);
  }
  return acc;
}, []);

console.log(output); // ["Rajesh","Rajkishoee","Rajib"]
