export const up = (queryInterface, Sequelize) => queryInterface.createTable('payments', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  reservation_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'reservations',
      field: 'id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  },
  amount: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
  },
  payment_method: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM('pending', 'completed', 'failed'),
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

export const down = (queryInterface) => queryInterface.dropTable('payments');
