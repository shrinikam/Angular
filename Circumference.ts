class Circle {
  private readonly radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
  
  getRadius(): number {
    return this.radius;
  }
}

class CircleX extends Circle {
  constructor(radius: number) {
    super(radius);
  }

  getCircumference(): number {
    return 2 * Math.PI * this.getRadius();
  }
}
const circle1 = new CircleX(5);
const circle2 = new CircleX(10);
console.log(`Circle 1 area: ${circle1.getArea()}`);
console.log(`Circle 1 circumference: ${circle1.getCircumference()}`);
console.log(`Circle 2 area: ${circle2.getArea()}`);
console.log(`Circle 2 circumference: ${circle2.getCircumference()}`);
