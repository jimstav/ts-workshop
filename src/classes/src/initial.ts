// Exercise 1
class Student {
  constructor(private name: string, private rollNumber: number) {}
}

const student1 = new Student('John', 24);
const student2 = new Student('Edward Dodd', 10);

// student2.rollNumber = 5; // error
console.log(student1, student2);

// Exercise 2
class Shape {
  constructor(protected color: string) {}

  draw(): void {
    console.log(`The shape is being drawn in ${this.color}.`);
  }
}

class Circle extends Shape {
  constructor(protected color: string) {
    super(color);
  }

  draw(): void {
    console.log(`The circle is being drawn in ${this.color}.`);
  }
}

const shape = new Shape('red');
shape.draw();

const circle = new Circle('green');
circle.draw();