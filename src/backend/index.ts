import makeDir from "make-dir";
import { askAboutCache, askAboutDatabase, askAboutFrameworks, askAboutMessaging, askAboutORM, askAboutUnitTesting } from "./inquirers/backend-inquirers";
const cmd = require('node-cmd');
const ora = require('ora');

async function backend() {
    let commands: string[] = [];
    const path = await makeDir('myProject');
    process.chdir('MyProject')
    cmd.runSync('npm init -y');
    const framework = await askAboutFrameworks();
    const database = await askAboutDatabase();
    const orms = await askAboutORM();
    const cache = await askAboutCache();
    const unitTesting = await askAboutUnitTesting()
    const messageBorker = await askAboutMessaging()

    commands.push(framework, database, orms, cache, unitTesting, messageBorker)
    commands.forEach((command)=>{
        runCommands(command)
    })

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