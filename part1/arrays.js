const t = [1, 2, 3];

t.push(4);

console.log("Length: " + t.length);
console.log("Second element: " + t[1]);

console.log("\nEach value: ");
t.forEach((value) => {
  console.log(value);
});

const t2 = t.concat(5);
console.log(t2);

const m1 = t.map((value) => value * 2);
console.log(m1);

const m2 = t.map((value) => "<li>" + value + "</li>");
console.log(m2);

const [first, second, third] = t;
console.log(first);
console.log(second);
console.log(third);
