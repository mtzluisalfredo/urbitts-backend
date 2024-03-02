export const up = (queryInterface, Sequelize) => queryInterface.addColumn('parkings', 'availability', {
  allowNull: false,
  type: Sequelize.INTEGER,
  defaultValue: 0,
});

export const down = (queryInterface) => queryInterface.removeColumn('parkings', 'availability');
