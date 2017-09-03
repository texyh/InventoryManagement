// 'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
      },
      avatar_url: {
        type: Sequelize.STRING,
      },
      position: {
        type: Sequelize.ENUM,
        values: ['admin', 'manager', 'employee'],
        defaultValue: 'employee'
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      account_status: {
        type: Sequelize.ENUM,
        values: ['active', 'suspended'],
        defaultValue: 'active'
      }
    });
  },
  down(queryInterface) {
    return queryInterface.dropTable('users');
  },
}