#!/usr/bin/env node

import backend from './backend';
import frontend from './frontend';
import * as yargs from 'yargs';
import { describe, string } from 'yargs';

import * as chalk from 'chalk';
import * as figlet from 'figlet';

const args = yargs
  .option('f', {
    type: 'string',
    alias: 'frontend',
    describe: 'provide frontend project name',
  })
  .option('b', {
    type: 'string',
    alias: 'backend',
    describe: 'provide backend project name',
  })
  .help().argv;

(async () => {
  console.info(chalk.default.yellow(figlet.default.textSync('Kick Off', { horizontalLayout: 'full' })));

  if (args.f) {
    frontend(args.f);
  } else if (args.b) {
    await backend(args.b);
  } else {
    process.exit(1);
  }
  process.exit(0);
})();
