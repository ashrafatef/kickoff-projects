#!/usr/bin/env node

import backend from './backend';
import frontend from './frontend';

const yargs = require("yargs");
const chalk = require('chalk');
const figlet = require('figlet');
const inquirer = require('inquirer');

// const options = yargs
//  .usage("Usage: -n <name>")
//  .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
//  .argv;

// const greeting = `Hello, ${options.name}!`;




(
    async()=>{
        console.log(
            chalk.yellow(
                figlet.textSync('Kick Off', { horizontalLayout: 'full' })
            )
        );
        // console.log(greeting);
        const args:string[] = process.argv.slice(2);
        const projectType:string = args[0];
        // console.log(agrs[0]);
        
        if(projectType == "-f" || projectType == "frontend"){
            frontend()
        }else if(projectType == "-b" || projectType == "backend"){
            await backend()
        }else{
            process.exit(1);
        }
        
        process.on('exit', function(code) {
            return console.log(`About to exit with code ${code}`);
        });
    }
)()




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