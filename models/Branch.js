import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Bank from './Bank.js';

const Branch = sequelize.define('Branch', {
  ifsc: {
    type: DataTypes.STRING(11),
    primaryKey: true,
    allowNull: false,
  },
  bank_id: {
    type: DataTypes.BIGINT,
    references: {
      model: Bank,
      key: 'id',
    },
  },
  branch: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  district: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  state: {
    type: DataTypes.STRING(26),
    allowNull: true,
  },
}, {
  tableName: 'branches',
  timestamps: false,
});

Branch.belongsTo(Bank, { foreignKey: 'bank_id' });

export default Branch;
