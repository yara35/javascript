//a-
// console.log(value1,value2,value3)

//c-
let x = printVariables(15,20,33)
console.log(x)

//d
let y = printVariables(3,5) 
console.log(y)
// to solve the problem of undefined value --> we can put default values for parameters:
// function printVariables(value1=0, value2=0, value3=0)

//e
let k = printVariables(1, 2, 3, 4, 5);
console.log(k);
//print the first three values
// Can you print them using (arguments)?
// return arguments


//f
console.log(typeof localVar);
console.log(testingVar);

printVariables1(1,2,3);

console.log("After calling function:");
console.log(typeof localVar);  
console.log(testingVar); 

//2
console.log(typeof localVar);   
console.log( testingVar); 

let result = printVariables(1, 2, 3);
console.log(result);

console.log();
console.log(typeof localVar);   
console.log(testingVar);

//Assignment2
// a- What if you insert less than 2 inputs? the output will be NaN
// solve this problem using ES6 feature --> const sumTwoNum = (num1=0, num2=0 ) => {} (using default values)
// b- What if the input is not a Number? use isNaN()
//if (isNaN(num1)==0 || isNaN(num2)==0) {
//     return "Both inputs must be valid numbers!";
// }