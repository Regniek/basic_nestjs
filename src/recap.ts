const myName = 'Alice';
const myAge = 42;

const suma = (a: number, b: number) => a + b;

suma(1, 2);

class Person {
  private age: number;
  name: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getSummary() {
    return `My name is ${this.name} and I'm ${this.age} years old`;
  }
}

const Juank = new Person('Juank', 42);
Juank.getSummary();
