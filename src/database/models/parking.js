import { DataTypes, Model } from 'sequelize';

export default function (sequelize) {
  class Parking extends Model {
    static associate(models) {
      Parking.belongsTo(models.user, { foreignKey: 'owner_id' });
    }
  }

  Parking.init({
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    availability: {
      type: DataTypes.ENUM('available', 'occupied', 'reserved'),
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('car', 'bike', 'scooter', 'other'),
      allowNull: false,
    },
    total_spaces: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    available_spaces: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  }, {
    modelName: 'parking',
    sequelize,
  });

  return Parking;
}
