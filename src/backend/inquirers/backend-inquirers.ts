import to from 'await-to-js';
import { BackendFrameworks, Caches, DatabaseEngines, MessagingBrokers, ORMs, UnitTesting } from '../enums/backend-enums';
const { Select } = require('enquirer');

export async function askAboutFrameworks() {
    const message = "Pick a Framework";
    const choices = [BackendFrameworks.EPRESS, BackendFrameworks.HAPI, BackendFrameworks.NESTJS, BackendFrameworks.SALISJS]
    const choice: string = await selectSingleChoice(message, choices)
}

export async function askAboutDatabase() {
    const message = "Pick a Database";
    const choices = [DatabaseEngines.CASANDRA, DatabaseEngines.POSTGRES, DatabaseEngines.MONGO, DatabaseEngines.MYSQL]
    const choice: string = await selectSingleChoice(message, choices)
}

export async function askAboutORM() {
    const message = "Pick an ORM";
    const choices = [ORMs.KENX, ORMs.SEQUELIZE, ORMs.TYPEORM]
    const choice: string = await selectSingleChoice(message, choices)
}

export async function askAboutCache() {
    const message = "Pick a Cache";
    const choices = [Caches.RIDES, Caches.MEMCACHED, Caches.DYNAMODB]
    const choice: string = await selectSingleChoice(message, choices)
}

export async function askAboutUnitTesting() {
    const message = "Pick a Unit Testing Framework";
    const choices = [UnitTesting.JASMINE, UnitTesting.JEST, UnitTesting.MOCHA]
    const choice: string = await selectSingleChoice(message, choices)
}

export async function askAboutMessaging() {
    const message = "Pick a Messages Broker";
    const choices = [MessagingBrokers.RABBITMQ, MessagingBrokers.KAFKA]
    const choice: string = await selectSingleChoice(message, choices)
}

export async function askAboutDockerFile() {
    const message = "Pick a Database";
    const choices = [DatabaseEngines.CASANDRA, DatabaseEngines.POSTGRES, DatabaseEngines.MONGO, DatabaseEngines.MYSQL]
    const choice: string = await selectSingleChoice(message, choices)
}

export async function askAboutGitRepo() {
    const message = "Pick a Database";
    const choices = [DatabaseEngines.CASANDRA, DatabaseEngines.POSTGRES, DatabaseEngines.MONGO, DatabaseEngines.MYSQL]
    const choice: string = await selectSingleChoice(message, choices)
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
        console.log("err", err)
    }
    return response || "";
}