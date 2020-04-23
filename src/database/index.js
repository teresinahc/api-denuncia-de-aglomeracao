import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import File from '../app/models/File';
import Complaint from '../app/models/Complaint';

const models = [File, Complaint]; // add other models here

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));

    models.map(
      (model) => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();
