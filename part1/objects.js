const object1 = {
  name: "Arto",
  age: 35,
  education: "PHD",
};

const object2 = {
  name: "Full Stack web application development",
  level: "intermediate studies",
  size: 5,
};

const object3 = {
  name: {
    first: "Jesse",
    last: "Lam",
  },
  grades: [2, 3, 4, 5],
  department: "UAB",
};

console.log(object1.name);
const fieldAge = "age";
console.log(object1[fieldAge]);

object1.address = "Helinski";
console.log(object1.address);
object1["secret number"] = 12341;
console.log(object1["secret number"]);
