require('dotenv').config({ silent: true });
const bcrypt = require('bcrypt');

function hashpassword(password) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      id: '-Kt1r1CLDv0e8IQ7nJtw',
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@email.com',
      avatar_url: '',
      position: 'admin',
      password: hashpassword(process.env.SEED_ADMIN_PASSWORD),
      account_status: 'active'
    }], {})
  },

  down: function (queryInterface) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
