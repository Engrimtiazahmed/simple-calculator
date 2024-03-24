#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Please enter first number", type: "number", name: "firstNumber" },
    {
        message: "Please enter second number",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "Please sellect one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
    },
]);
// Conditional statement 
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Substraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please enter a valid number");
}
