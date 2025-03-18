import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ServiceDetails = sequelize.define('ServiceDetails', {
  chave: {
    type: DataTypes.STRING,
    allowNull: false
  },
  valor: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

ServiceDetails.associate = models => {
  ServiceDetails.belongsTo(models.Service, {
    foreignKey: 'serviceId',
    as: 'service'
  });
};

export default ServiceDetails;