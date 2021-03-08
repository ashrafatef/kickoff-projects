import { to } from "await-to-js";
import makeDir from "make-dir";
import { askAboutCache, askAboutDatabase, askAboutFrameworks, askAboutMessaging, askAboutORM, askAboutUnitTesting } from "./inquirers/backend-inquirers";
const cmd = require('node-cmd');
const ora = require('ora');

async function backend(projectName: string) {
    let commands: any[] = [];
    let err: any
    const path = await makeDir(projectName);
    let framework, database, orms, cache, unitTesting, messageBorker;
    process.chdir(`${projectName}`)
    cmd.runSync('npm init -y');
    framework = await askAboutFrameworks();
    database = await askAboutDatabase();
    orms = await askAboutORM();
    cache = await askAboutCache();
    unitTesting = await askAboutUnitTesting()
    messageBorker = await askAboutMessaging()
    if (err) {
        return process.exit(0)
    }
    commands.push(framework, database, orms, cache, unitTesting, messageBorker)
    if (checkCanceledCommands(commands)) {
        commands.forEach((command) => {
            runCommands(command)
        })
    }
}

function checkCanceledCommands(commands: string[]): boolean {
    for (let index = 0; index < commands.length; index++) {
        const element = commands[index];
        if (!element) {
            return false
        }
    }
    return true
}

function runCommands(command: string) {
    const spinner = ora({
        test: command,
        spinner: 'circle'
    }).start();
    let commandResponse = cmd.runSync(command)
    if (!commandResponse.err) {
        spinner.succeed()
    } else {
        return process.exit(1)
    }
}

export default backend;