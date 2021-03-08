export interface IBackendFrameworks {
  ExpressJs: string;
  NestJs: string;
  HapiJs: string;
  SailsJs: string;
}

export interface IDatabase {
  PostgresSQL: string;
  MySQL: string;
  MongoDB: string;
  Casandra: string;
}

export interface IORMs {
  Sequelize: string;
  TypeORM: string;
  Kenx: string;
}

export interface ICache {
  Redis: string;
  Memcached: string;
}

export interface IUnitTesting {
  Jest: string;
  Jasmine: string;
  Mocha: string;
}

export interface IMessagingBroker {
  RabbitMQ: string;
  Kafka: string;
}

export interface BackendCommands extends IBackendFrameworks, IDatabase, IORMs, ICache, IUnitTesting, IMessagingBroker {}
