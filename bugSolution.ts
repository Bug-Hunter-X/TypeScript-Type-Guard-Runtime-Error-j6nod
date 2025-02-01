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
  //Use a safer approach
  console.log('This line is unreachable because of the type guard and the type checking, but it is still good practice to include a runtime type check as well.');
} else {
  console.log('Not a number');
}

//Additional solution: Using a safer approach
function printNumberSafe(num: any): void {
    if (typeof num === 'number') {
        console.log(num);
    } else {
        console.error("Invalid input: Not a number");
    }
}

printNumberSafe(myValue); //This will print an error message to the console because myValue is a string.