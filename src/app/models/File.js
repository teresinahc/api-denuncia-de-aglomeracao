import Sequelize, { Model } from 'sequelize';

class File extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://0.0.0.0:3333/files/${this.path}`; // modify by your host || production host
          },
        },
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.belongsTo(models.Complaint, {
      foreignKey: 'complaint_id',
      as: 'complaint',
    });
  }
}

export default File;
