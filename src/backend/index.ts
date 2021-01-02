import makeDir from "make-dir";
import { askAboutDatabase, askAboutFrameworks } from "./inquirers/backend-inquirers";
const cmd = require('node-cmd');


async function backend() {
    let commands:any=[];
    // const path = await makeDir('myProject');
    // console.log(path)
    // cmd.runSync('cd myProject');
    const framework = await askAboutFrameworks();
    commands.push(framework);

    const database = await askAboutDatabase()

    // console.log("Hi from backend")
}

export default backend;