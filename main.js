#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter Student's Name!", // value user ny jo name dia hy
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please do not enter empty value!";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "select the course for enroll ?",
        choices: ["HTML", "CSS", "JAVA SCRIPT", "TYPE SCRIPT", "PYTHON"]
    }
]);
const tuitionFee = {
    "HTML": 5000,
    "CSS": 8000,
    "JAVA SCRIPT": 10000,
    "TYPE SCRIPT": 12000,
    "PYTHON": 14000
};
console.log(`\nTuition fees: ${tuitionFee[answer.courses]}/-\n`);
console.log(`Balance: ${myBalance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "select payment methoud!",
        choices: ["banktransfer", "easypaisa", "jazzcash",]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money!",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please don't enter empty value!";
        },
    }
]);
console.log(`\nyou selected payment methoud ${paymentType.payment}\n`);
const tuitionFees = tuitionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount); // y function hy jo aik string ko parse karky floating number mn cinvert karta hy 
if (tuitionFees === paymentAmount) {
    console.log(`Congratulations, You Are Successfully Enrolled In ${answer.courses}.\n`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "what would you like to do for the next?",
            choices: ["view status", "Exit"]
        }
    ]);
    if (ans.select === "view status") {
        console.log("\n*********status*********\n");
        console.log(`student Name: ${answer.students}`);
        console.log(`student ID: ${randomNumber}`);
        console.log(`cours: ${answer.courses}`);
        console.log(`tuition fees paid: ${paymentAmount}`);
        console.log(`Balance ${myBalance += paymentAmount}`);
    }
    else {
        console.log("\n Exiting Student Management System");
    }
}
else {
    console.log("Invalid Amount Due To Course");
}
;
