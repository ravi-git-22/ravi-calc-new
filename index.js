function add(number1,number2){
    return number1 + number2;
}

function subtract(number1,number2){
    return number1 - number2;
}

function multiply(number1,number2){
    return number1 * number2;
}

function divide(number1,number2){
    return number1 / number2;
}

let calculator ={};
calculator.add = add;
calculator.subtract = subtract;
calculator.multiply = multiply;
calculator.divide = divide;
module.exports = calculator;