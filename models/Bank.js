import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Bank = sequelize.define('Bank', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(49),
    allowNull: false,
  },
}, {
  tableName: 'banks',
  timestamps: false,
});

export default Bank;
