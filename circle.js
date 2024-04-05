class Circle {
  constructor(radius = 1.0, color = "red") {
    this.radius = radius;
    this.color = color;
  }

  getRadius() {
    return this.radius;
  }

  setRadius(radius) {
    this.radius = radius;
  }

  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }

  toString() {
    return `Circle - Radius: ${this.radius}, Color: ${this.color}`;
  }

  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

const myCircle = new Circle();
console.log(myCircle.toString());
console.log("Area:", myCircle.getArea());
console.log("Circumference:", myCircle.getCircumference());

myCircle.setRadius(5);
myCircle.setColor("green");
console.log(myCircle.toString());
console.log("Area:", myCircle.getArea());
console.log("Circumference:", myCircle.getCircumference());
