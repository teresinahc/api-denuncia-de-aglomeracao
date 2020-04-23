import Sequelize, { Model } from 'sequelize';

class Complaint extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
        date_time: Sequelize.STRING,
        address: Sequelize.STRING,
        lat: Sequelize.STRING,
        long: Sequelize.STRING,
        completed: Sequelize.BOOLEAN,
        category: Sequelize.STRING,
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.hasMany(models.File, {
      foreignKey: 'photo_id',
      as: 'photo',
    });
  }
}

export default Complaint;
