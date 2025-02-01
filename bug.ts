function printNumber(num: number): void {
  console.log(num);
}

function checkIfNumber(value: any): value is number {
  return typeof value === 'number';
}

let myValue: any = 10;

if (checkIfNumber(myValue)) {
  printNumber(myValue);
} else {
  console.log('Not a number');
}

myValue = 'hello';
if (checkIfNumber(myValue)) {
  printNumber(myValue); // This line will cause a runtime error if type checking is not strict enough
} else {
  console.log('Not a number');
}