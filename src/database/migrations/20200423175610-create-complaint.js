'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('complaints', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      date_time: {
        type: Sequelize.DATE,
      },
      address: {
        type: Sequelize.STRING,
      },
      lat: {
        type: Sequelize.STRING,
      },
      long: {
        type: Sequelize.STRING,
      },
      category: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
    }, 
    {
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('complaints');
  }
};