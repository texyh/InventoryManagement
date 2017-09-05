'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('assets', {
      id : {
        allowNull :false,
        primaryKey:true,
        type: Sequelize.INTEGER
      },

      assetName: {
        allowNull :false,
        type: Sequelize.STRING,
      },

      description: {
        allowNull :false,
        type: Sequelize.STRING,
      },

      serialNumber: {
        allowNull :false,
        type: Sequelize.STRING,
        unique:true,
      },

      companySerialCode: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },

      dateBought: {
        type: Sequelize.DATE,

      },
      
      status: {
         type: Sequelize.ENUM,
         values: ['assigned', 'lost', 'available'],
         defaultValue: 'available'         
      }

    });
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.dropTable('assets');
  }
};
