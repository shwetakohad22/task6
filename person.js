class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getDetails() {
    return `${this.name}, ${this.age} years old, living at ${this.address}`;
  }

  setName(name) {
    this.name = name;
  }

  setAge(age) {
    this.age = age;
  }

  setAddress(address) {
    this.address = address;
  }
}

const name1 = new Person("Harikaran", 23, "Tenkasi");
console.log(name1.getDetails());

name1.setAge(24);
name1.setAddress("Achanpudhur");
console.log(name1.getDetails());
