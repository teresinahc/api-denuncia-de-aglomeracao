import Sequelize, { Model } from 'sequelize';

class Complaint extends Model {
  static init(sequelize) {
    super.init(
      {
        date_time: Sequelize.STRING,
        address: Sequelize.STRING,
        lat: Sequelize.STRING,
        long: Sequelize.STRING,
        category: Sequelize.STRING,
        status: Sequelize.STRING,
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,
      },
      { sequelize }
    );
  }
}

export default Complaint;
