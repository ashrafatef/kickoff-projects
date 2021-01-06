import { BackendCommands } from "../interfaces/backend-commands.interface";

const Commands: BackendCommands = {
    ExpressJs :"npm install express",
    HapiJs:"npm install @hapi/hapi",
    NestJs:"npm i -g @nestjs/cli && nest new",
    SailsJs:"npm install sails -g && sails new",
    PostgresSQL:"npm install pg",
    MySQL:"npm install mysql",
    MongoDB:"npm install mongodb --save",
    Casandra:"npm install cassandra-driver",
    Redis:"npm install redis",
    Memcached:"npm install memcached",
    Sequelize:"npm install --save sequelize",
    Kenx:"npm install knex --save",
    TypeORM:"npm install typeorm reflect-metadata --save",
    Jest:"npm install --save-dev jest",
    Jasmine:"npm install --save-dev jasmine",
    Mocha:"npm install --save-dev mocha",
    RabbitMQ:"npm install amqplib",
    Kafka:"npm install kafkajs"
}


export default Commands;