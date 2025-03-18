import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Service = sequelize.define('Service', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  client: {
    type: DataTypes.STRING,
    allowNull: false
  },
  job_type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('agendado', 'em_andamento', 'concluído', 'cancelado'),
    defaultValue: 'agendado'
  }
});

Service.associate = models => {
  Service.hasMany(models.ServiceDetails, {
    foreignKey: 'serviceId',
    as: 'details'
  });
};

export default Service;