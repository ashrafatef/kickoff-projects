#!/usr/bin/env node

import backend from './backend';
import frontend from './frontend';
import * as yargs from 'yargs';
import { describe, string } from 'yargs';

// const yargs = require("yargs");
const chalk = require('chalk');
const figlet = require('figlet');
const inquirer = require('inquirer');

// const options = yargs
//  .usage("Usage: -n <name>")
//  .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
//  .argv;

// const greeting = `Hello, ${options.name}!`;

const args = yargs
    .option('f', {
        type: 'string',
        alias: 'frontend',
        describe: 'provide frontend project name'
    })
    .option('b', {
        type: 'string',
        alias: 'backend',
        describe: 'provide backend project name'
    })
    .help()
    .argv;


(
    async () => {
        console.log(
            chalk.yellow(
                figlet.textSync('Kick Off', { horizontalLayout: 'full' })
            )
        );

        if (args.f) {
            // frontend(args.f)
            console.log("Frontend Coming Soon ^-^")
            process.exit(1);

        } else if (args.b) {
             await backend(args.b)
        } else {
            process.exit(1);
        }
        process.exit(0)
    }
)()