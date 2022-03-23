class Animal {
  constructor(family) {
    this.family = family;
  }

  walk = () => {
    return "andando...";
  };
}

class Dog extends Animal {
  // com construtor
  constructor(name, age) {
    super("Carnívoros");
    this.name = name;
    this.age = age;
  }
  // sem construtor
  // name = "Rex";
  // age = 2;

  bark = () => {
    return `${this.name}: au! au!`;
  };
}

// sem construtor
// let rex = new Dog();

// com construtor
let rex = new Dog("Rex", 2);
console.log(rex);
console.log(rex.bark());

let max = new Dog("Max", 2);
console.log(max);
console.log(max.bark());

console.log(max.walk());
console.log(max.family);
