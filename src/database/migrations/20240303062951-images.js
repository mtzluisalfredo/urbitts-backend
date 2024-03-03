export const up = (queryInterface, Sequelize) => queryInterface.createTable('images', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  parking_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'parkings',
      field: 'id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  },
  image_url: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  deletedAt: {
    type: Sequelize.DATE,
    allowNull: true,
  },
});

export const down = (queryInterface) => queryInterface.dropTable('images');
