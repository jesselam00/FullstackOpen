const sum = (p1, p2) => {
  console.log(p1);
  console.log(p2);
  return p1 + p2;
};

const result = sum(3, 5);
console.log("Result is " + result);

const square = (p) => {
  console.log(p);
  return p * p;
};

const result2 = square(6);
console.log("Result is " + result2);

const square2 = (p) => p * p;

const result3 = square2(9);
console.log(result3);

const t = [1, 2, 3];
const tSquared = t.map((p) => p * p);
console.log(tSquared);

function product(a, b) {
  return a * b;
}
console.log(product(5, 9));

const average = function (a, b) {
  return (a + b) / 2;
};
console.log(average(2, 5));
