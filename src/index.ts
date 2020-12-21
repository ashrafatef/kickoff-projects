#!/usr/bin/env node

const yargs = require("yargs");
const chalk = require('chalk');
const figlet = require('figlet');
const inquirer = require('inquirer')

// const options = yargs
//  .usage("Usage: -n <name>")
//  .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
//  .argv;

// const greeting = `Hello, ${options.name}!`;

// console.log(greeting);
console.log(
    chalk.yellow(
        figlet.textSync('Kick Off', { horizontalLayout: 'full' })
    )
);
const questions = [
    {
        type: 'list',
        name: 'visibility',
        message: 'Public or private:',
        choices: ['public', 'private'],
        default: 'public'
    }
];
inquirer.prompt(questions).then((answers:any) => {
    console.info('Answer:', answers);
});;