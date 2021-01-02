#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const backend_1 = __importDefault(require("./backend"));
const frontend_1 = __importDefault(require("./frontend"));
const yargs = require("yargs");
const chalk = require('chalk');
const figlet = require('figlet');
const inquirer = require('inquirer');
// const options = yargs
//  .usage("Usage: -n <name>")
//  .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
//  .argv;
// const greeting = `Hello, ${options.name}!`;
console.log(chalk.yellow(figlet.textSync('Kick Off', { horizontalLayout: 'full' })));
// console.log(greeting);
const args = process.argv.slice(2);
const projectType = args[0];
// console.log(agrs[0]);
if (projectType == "-f" || projectType == "frontend") {
    frontend_1.default();
}
else if (projectType == "-b" || projectType == "backend") {
    backend_1.default();
}
else {
    process.exit(1);
}
process.on('exit', function (code) {
    return console.log(`About to exit with code ${code}`);
});
// const questions = [
//     {
//         type: 'list',
//         name: 'visibility',
//         message: 'Public or private:',
//         choices: ['public', 'private'],
//         default: 'public'
//     }
// ];
// inquirer.prompt(questions).then((answers:any) => {
//     console.info('Answer:', answers);
// });;
