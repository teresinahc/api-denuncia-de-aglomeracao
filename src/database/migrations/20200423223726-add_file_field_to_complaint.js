module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('complaints', 'photo_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'files',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: (queryInterface) =>
    queryInterface.removeColumn('complaints', 'photo_id'),
};
