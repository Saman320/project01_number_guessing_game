#! /usr/bin/env node
import inquirer from "inquirer";
async function startfunc() {
    const systemNumber = Math.floor(Math.random() * 10);
    const userNumber = await inquirer.prompt([
        {
            type: "number",
            name: "userGuess",
            message: "Enter Your Number Between 1 - 10:",
        },
    ]);
    const { userGuess } = userNumber;
    console.log("Your Guess: ", userGuess, "\nSyestem Guess: ", systemNumber);
    if (userGuess === systemNumber) {
        console.log("Your Guess is Correct \nYou Won");
    }
    else {
        console.log("Better luck Next Time");
    }
}
async function startAgain() {
    do {
        await startfunc();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "Restart",
            message: "Do you want to continue? \n Press Y or N ",
        });
    } while ((await again).Restart == "y" || (await again).Restart == "Y" || (await again).Restart == "yes" || (await again).Restart == "YES");
}
startAgain();
