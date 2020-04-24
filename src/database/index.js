import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import File from '../app/models/File';
import Complaint from '../app/models/Complaint';

// Add other models here v
const models = [File, Complaint];

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
