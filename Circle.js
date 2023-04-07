var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.PI = 3.14;
        this.radius = radius;
    }
    Circle.prototype.area = function () {
        return this.PI * this.radius * this.radius;
    };
    return Circle;
}());
var circle1 = new Circle(5);
var circle2 = new Circle(10);
console.log("Area of circle 1: ".concat(circle1.area()));
console.log("Area of circle 2: ".concat(circle2.area()));
