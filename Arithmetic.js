var Arithmetic = /** @class */ (function () {
    function Arithmetic(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
    }
    Arithmetic.prototype.addition = function () {
        return this.number1 + this.number2;
    };
    Arithmetic.prototype.subtraction = function () {
        return this.number1 - this.number2;
    };
    Arithmetic.prototype.multiplication = function () {
        return this.number1 * this.number2;
    };
    Arithmetic.prototype.division = function () {
        return this.number1 / this.number2;
    };
    return Arithmetic;
}());
var arithmeticObj1 = new Arithmetic(10, 5);
var arithmeticObj2 = new Arithmetic(20, 3);
console.log(arithmeticObj1.addition());
console.log(arithmeticObj1.subtraction());
console.log(arithmeticObj1.multiplication());
console.log(arithmeticObj1.division());
console.log(arithmeticObj2.addition());
console.log(arithmeticObj2.subtraction());
console.log(arithmeticObj2.multiplication());
console.log(arithmeticObj2.division());
