// models/DonationCategory.js
import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/sequalize.js';

class DonationCategory extends Model {}

DonationCategory.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
}, {
  sequelize,
  modelName: 'DonationCategory',
  tableName: 'donationcategories', // Ensure the table name matches exactly with your references
  timestamps: false
});

export default DonationCategory;
