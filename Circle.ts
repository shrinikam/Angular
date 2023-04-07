class Circle {
  radius: number;
  readonly PI: number = 3.14;

  constructor(radius: number) {
    this.radius = radius;
  }

  area(): number {
    return this.PI * this.radius * this.radius;
  }
}
const circle1 = new Circle(5);
const circle2 = new Circle(10);
console.log(`Area of circle 1: ${circle1.area()}`);
console.log(`Area of circle 2: ${circle2.area()}`);
