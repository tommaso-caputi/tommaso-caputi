#!/usr/bin/env node
import boxen from "boxen";
import chalk from "chalk";
import inquirer from "inquirer";
import clear from "clear";
import open from "open";

clear();

const data = {
    name: chalk.hex('#E88873').bold("Tommaso Caputi"),
    email: chalk.blueBright('mailto:tommasocaputi85@gmail.com'),
    github: chalk.hex('#E3DAFF')("https://github.com/tommaso-caputi"),
    linkedin: chalk.hex('#f8c471')("https://www.linkedin.com/in/tommaso-caputi/"),
    website: chalk.hex('#9FFFCB')("https://tommasocaputi.com"),

    labelEmail: chalk.blueBright.bold("Email:"),
    labelGitHub: chalk.hex('#C0BABC').bold("GitHub:"),
    labelLinkedin: chalk.hex('#F8C537').bold("LinkedIn:"),
    labelWebsite: chalk.hex('#59FFC8').bold("Website:"),
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelEmail}  ${data.email}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedin}  ${data.linkedin}`,
        `${data.labelWebsite}  ${data.website}`,
        ``,
    ].join("\n"),
    {
        float: 'left',
        borderStyle: 'none',
        titleAlignment: 'left',
        textAlignment: 'left',
    }
);

console.log(me);


const prompt = inquirer.createPromptModule();

const questions = [{
    type: "list",
    name: "action",
    message: "What do you want to do?",
    choices: [
        {
            name: `Send me an ${chalk.blueBright.bold("email")}? 📩`,
            value: () => {
                open("mailto:tommasocaputi85@gmail.com");
                console.log("\nLooking forward to hearing your message and replying to you!\n");
            }
        },
        {
            name: `Visit my ${chalk.hex('#59FFC8').bold("website")}? 🌐`,
            value: () => {
                open("https://tommasocaputi.com");
                console.log("\nThanks for the visit to my site!\n");
            }
        },
        {
            name: "Exit! 👋",
            value: () => { console.log("👋 See you later! Have a nice day\n"); }
        }
    ]
}];

prompt(questions).then(answer => answer.action());
