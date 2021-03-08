import { to } from 'await-to-js';
import makeDir from 'make-dir';
import {
  askAboutCache,
  askAboutDatabase,
  askAboutFrameworks,
  askAboutMessaging,
  askAboutORM,
  askAboutUnitTesting,
} from './inquirers/backend-inquirers';
import * as cmd from 'node-cmd';
import * as ora from 'ora';

async function backend(projectName: string) {
  const commands: any[] = [];
  const err: any = '';
  const path = await makeDir(projectName);
  let framework;
  let database;
  let orms;
  let cache;
  let unitTesting;
  let messageBorker;
  process.chdir(`${projectName}`);
  cmd.runSync('npm init -y');
  framework = await askAboutFrameworks();
  database = await askAboutDatabase();
  orms = await askAboutORM();
  cache = await askAboutCache();
  unitTesting = await askAboutUnitTesting();
  messageBorker = await askAboutMessaging();
  if (err) {
    return process.exit(0);
  }
  commands.push(framework, database, orms, cache, unitTesting, messageBorker);
  if (checkCanceledCommands(commands)) {
    commands.forEach((command) => {
      runCommands(command);
    });
  }
}

function checkCanceledCommands(commands: string[]): boolean {
  for (const element of commands) {
    if (!element) {
      return false;
    }
  }
  return true;
}

function runCommands(command: string) {
  const spinner = ora({
    test: command,
    spinner: 'circle',
  }).start();
  const commandResponse = cmd.runSync(command);
  if (!commandResponse.err) {
    spinner.succeed();
  } else {
    return process.exit(1);
  }
}

export default backend;
