var firstNumber = parseInt(window.prompt("Enter first number:"))
var secondNumber =parseInt(window.prompt("Enter second number:"))
var operator = prompt("Pick any operator:")

let result;
if (operator == '+'){
    result = firstNumber + secondNumber;
} else if (operator == '*'){
    result = firstNumber * secondNumber;
}else if (operator == '-'){
    result = firstNumber - secondNumber;
} else if (operator == '/'){
    result = firstNumber/secondNumber;
} else if (operator == '%'){
    result = firstNumber%secondNumber;
};

alert(result);