module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('files', 'complaint_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'complaints',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: (queryInterface) =>
    queryInterface.removeColumn('files', 'complaint_id'),
};
