//b-
console.log(printVariables(1,2,3));

function  printVariables(value1=7,value2=4,value3=9){
//f
    var localVar=3;
    testingVar=5; 

    return [value1, value2, value3];
    // return(arguments)


}

//2
console.log("Function Expression")
// console.log(printVariables1)
const printVariables1 = function(value1, value2, value3) {
    var localVar1 = 3;
    testingVar1 = 5;
    return [value1, value2, value3];
};

//Assignment 2
const sumTwoNum = (num1=0, num2=0 ) => {
    if (isNaN(num1)==0 || isNaN(num2)==0) {
        return "Both inputs must be valid numbers!";
    }
    return num1 + num2;
};
