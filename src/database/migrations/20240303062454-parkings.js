export const up = (queryInterface, Sequelize) => queryInterface.createTable('parkings', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  owner_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      field: 'id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  availability: {
    type: Sequelize.ENUM('available', 'occupied', 'reserved'),
    allowNull: false,
  },
  type: {
    type: Sequelize.ENUM('car', 'bike', 'scooter', 'other'),
    allowNull: false,
  },
  total_spaces: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  available_spaces: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
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

export const down = (queryInterface) => queryInterface.dropTable('parkings');
