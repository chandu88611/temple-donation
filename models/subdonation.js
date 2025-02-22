import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/sequalize.js';

class Subdonation extends Model {}

Subdonation.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  featured_image: DataTypes.STRING,
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  created_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  campaign_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'donationCampaign', // should match the name of the DonationCampaign table
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'Subdonation',
  tableName: 'subdonations',
  timestamps: false,
});

export default Subdonation;
