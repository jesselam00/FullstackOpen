class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("hello my name is " + this.name);
  }
}

const adam = new Person("Adam", 29);
adam.greet();

const janja = new Person("Janja", 23);
setTimeout(janja.greet.bind(janja), 500);
