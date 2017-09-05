const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const Asset = sequelize.define('Asset', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'id should not be empty' },
      },
    },
    assetName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Asset must have a  name.' },
      },
      field: 'asset_name',
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Asset must have a description.' },
      },
      field: 'description',
    },
    serialNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: { msg: 'Asset must have a serial number.' },
      },
      field: 'serial_number',
    },
    companySerialCode: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: { msg: 'Asset must have a company serial number.' },
        },
        field: 'serial_code',
      },

    dateBought: {
      type: DataTypes.DATE,
      field: 'date_bought',
    },
    
    status: {
      type: DataTypes.ENUM,
      values: ['assigned', 'lost', 'available'],
      field: 'status',
      defaultValue: 'available'
    },
  },
    {
      timestamps: false,
      tableName: 'assets',
    });


  return Asset;
};