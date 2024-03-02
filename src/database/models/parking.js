import { DataTypes, Model } from 'sequelize';

export default function (sequelize) {
  class Parking extends Model {
    static associate(models) {
      Parking.belongsTo(models.user, { foreignKey: 'userId' });
    }
  }

  Parking.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(140),
      allowNull: false,
    },
    location: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    modelName: 'parking',
    sequelize,
  });

  return Parking;
}
