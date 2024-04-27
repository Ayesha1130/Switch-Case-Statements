// Task #3 Succeeded
console.log(chalk.bgMagentaBright("********************* Switch Case Statements **********************"));
import inquirer from "inquirer";
import chalk from "chalk";
let condition = true;
while (condition) {
    let dayOfWeek = await inquirer.prompt([
        {
            name: "day",
            type: "list",
            message: chalk.blue("Select your Day"),
            choices: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
            ],
        },
    ]);
    switch (dayOfWeek.day) {
        case "Monday":
            console.log(chalk.green("Monday: A fresh start to a new week! Let's make it productive and positive."));
            break;
        case "Tuesday":
            console.log(chalk.magenta("Tuesday: Embracing the flow of the week, let's stay focused and motivated."));
            break;
        case "Wednesday":
            console.log(chalk.green("Wednesday: Halfway through! Keep up the momentum, we're making progress."));
            break;
        case "Thursday":
            console.log(chalk.magenta("Thursday: Almost there! Push through, the weekend is just around the corner."));
            break;
        case "Friday":
            console.log(chalk.green("Friday: Cheers to the weekend approaching! Finish strong and enjoy the rewards."));
            break;
        case "Saturday":
            console.log(chalk.magenta("Saturday: Relax and recharge, it's the perfect time to pursue hobbies and unwind."));
            break;
        case "Sunday":
            console.log(chalk.green("Sunday: A day of rest and reflection. Prepare for the week ahead with positivity."));
            break;
        default:
            console.log(chalk.magenta("Invalid Input: Enjoy your weekend"));
            break;
    }
}
