"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
// Initialize user balance and pin code
var myBalance = 10000; // Dollar
var myPin = 2023;
var pinAnswer = await inquirer_1.default.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
// 20232 === 2023 - false
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    // console.log(`Current Account Balance is ${myBalance}`)
    var operationAns = await inquirer_1.default.prompt([
        {
            name: "operation",
            message: "please saelect option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        var amountAns = await inquirer_1.default.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log("".concat(amountAns.amount, " withdraw successfully"));
            console.log("your remaining balance is: ".concat(myBalance));
        }
    }
    // =, -=, =+
    else if (operationAns.operation === "check balance") {
        console.log("your balance is: ".concat(myBalance));
    }
}
else {
    console.log("Incorrect pin number, Try again");
}
