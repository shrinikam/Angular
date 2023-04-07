var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    return Circle;
}());
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX(radius) {
        return _super.call(this, radius) || this;
    }
    CircleX.prototype.getCircumference = function () {
        return 2 * Math.PI * this.getRadius();
    };
    return CircleX;
}(Circle));
var circle1 = new CircleX(5);
var circle2 = new CircleX(10);
console.log("Circle 1 area: ".concat(circle1.getArea()));
console.log("Circle 1 circumference: ".concat(circle1.getCircumference()));
console.log("Circle 2 area: ".concat(circle2.getArea()));
console.log("Circle 2 circumference: ".concat(circle2.getCircumference()));
