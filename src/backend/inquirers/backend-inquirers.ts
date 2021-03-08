import to from 'await-to-js';
import { YesNoInq } from '../../common/enums/shared.enum';
import { BackendFrameworks, Caches, DatabaseEngines, MessagingBrokers, ORMs, UnitTesting } from '../enums/backend-enums';
const { Select,prompt  } = require('enquirer');
const cmd = require('node-cmd');
import simpleGit, {SimpleGit} from 'simple-git';
import Commands from '../commands/commands';
import { IBackendFrameworks, ICache, IDatabase, IMessagingBroker, IORMs, IUnitTesting } from '../interfaces/backend-commands.interface';

export async function askAboutFrameworks() {
    const message = "Pick a Framework";
    const choices = [BackendFrameworks.EXPRESS, BackendFrameworks.HAPI, BackendFrameworks.NESTJS, BackendFrameworks.SALISJS]
    const choice: keyof IBackendFrameworks = await selectSingleChoice(message, choices)
    return Commands[choice]
}

export async function askAboutDatabase() {
    const message = "Pick a Database";
    const choices = [DatabaseEngines.CASANDRA, DatabaseEngines.POSTGRES, DatabaseEngines.MONGO, DatabaseEngines.MYSQL]
    const choice: keyof IDatabase = await selectSingleChoice(message, choices)
    return Commands[choice]
}

export async function askAboutORM() {
    const message = "Pick an ORM";
    const choices = [ORMs.KENX, ORMs.SEQUELIZE, ORMs.TYPEORM]
    const choice: keyof IORMs = await selectSingleChoice(message, choices)
    return Commands[choice]
}

export async function askAboutCache() {
    const message = "Pick a Cache";
    const choices = [Caches.RIDES, Caches.MEMCACHED]
    const choice: keyof ICache = await selectSingleChoice(message, choices)
    return Commands[choice]
}

export async function askAboutUnitTesting() {
    const message = "Pick a Unit Testing Framework";
    const choices = [UnitTesting.JASMINE, UnitTesting.JEST, UnitTesting.MOCHA]
    const choice: keyof IUnitTesting = await selectSingleChoice(message, choices)
    return Commands[choice]
}

export async function askAboutMessaging() {
    const message = "Pick a Messages Broker";
    const choices = [MessagingBrokers.RABBITMQ, MessagingBrokers.KAFKA]
    const choice: keyof IMessagingBroker = await selectSingleChoice(message, choices)
    return Commands[choice]
}

export async function askAboutDockerFile() {
    const message = "Pick a Database";
    const choices = [YesNoInq.YES, YesNoInq.NO]
    const choice: string = await selectSingleChoice(message, choices)
    //TODO create docker file if yes
    if (choice == YesNoInq.YES) {
        cmd.runSync('touch Dockerfile');
    }
}

export async function askAboutGitRepo() {
    const message = "Pick a Database";
    const choices = [YesNoInq.YES, YesNoInq.NO]
    const choice: string = await selectSingleChoice(message, choices)
    // TODO check if yes create the repo
    if (choice == YesNoInq.YES) {
        const git = simpleGit();
        const response = await prompt({
            type: 'input',
            name: 'remoteRepo',
            message: 'What is the remote URL?'
          });
        git.init().addRemote("origin",`${response.remoteRepo}`)
    }
}

async function selectSingleChoice(message: string, choices: string[]) {
    let err, response: any;
    const select = new Select({
        name: 'choice',
        message: message,
        choices: choices
    });
    [err, response] = await to(select.run());
    if (err) {
        console.log("err =================%%%%%%%%% ", err)
    }
    return response || "";
}