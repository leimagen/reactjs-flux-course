var readline = require("readline-sync");

var num1 = readline.question("Please enter a number: ");

var num2 = readline.question("Please enter another number: ");

var operator = readline.question("Please enter an operator (+,-,/,*)");

console.log(num1 + operator + num2);