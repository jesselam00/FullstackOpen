const arto = {
  name: "Arto",
  age: 35,
  education: "PHD",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
  doAddition: function (a, b) {
    console.log(a + b);
  },
};

arto.greet();

arto.growOlder = function () {
  this.age += 1;
};

console.log("Before: " + arto.age);
arto.growOlder();
console.log("Arto after growing older: " + arto["age"]);

arto.doAddition(10, 25);

const referenceToAddition = arto.doAddition;
referenceToAddition(3, 5);

setTimeout(arto.greet, 500);

setTimeout(arto.greet.bind(arto), 500);
