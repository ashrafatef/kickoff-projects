export enum BackendFrameworks {
  EXPRESS = 'ExpressJs',
  NESTJS = 'NestJs',
  HAPI = 'HapiJs',
  SALISJS = 'SailsJs',
}

export enum DatabaseEngines {
  POSTGRES = 'PostgresSQL',
  MYSQL = 'MySQL',
  MONGO = 'MongoDB',
  CASANDRA = 'Casandra',
}

export enum ORMs {
  SEQUELIZE = 'Sequelize',
  TYPEORM = 'TypeORM',
  KENX = 'Kenx',
}

export enum Caches {
  RIDES = 'Redis',
  MEMCACHED = 'Memcached',
  // DYNAMODB = "DynamoDB"
}

export enum UnitTesting {
  JEST = 'Jest',
  JASMINE = 'Jasmine',
  MOCHA = 'Mocha',
}

export enum MessagingBrokers {
  RABBITMQ = 'RabbitMQ',
  KAFKA = 'Kafka',
}
