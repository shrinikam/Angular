class Arithmetic {
  private number1: number;
  private number2: number;

  constructor(number1: number, number2: number) {
    this.number1 = number1;
    this.number2 = number2;
  }

  public addition(): number {
    return this.number1 + this.number2;
  }

  public subtraction(): number {
    return this.number1 - this.number2;
  }

  public multiplication(): number {
    return this.number1 * this.number2;
  }

  public division(): number {
    return this.number1 / this.number2;
  }
}
const arithmeticObj1 = new Arithmetic(10, 5);
const arithmeticObj2 = new Arithmetic(20, 3);
console.log(arithmeticObj1.addition()); 
console.log(arithmeticObj1.subtraction()); 
console.log(arithmeticObj1.multiplication()); 
console.log(arithmeticObj1.division()); 
console.log(arithmeticObj2.addition()); 
console.log(arithmeticObj2.subtraction()); 
console.log(arithmeticObj2.multiplication()); 
console.log(arithmeticObj2.division()); 
