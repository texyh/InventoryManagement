require('dotenv').config({ silent: true });

const development = {
  url: process.env.DATABASE_URL || 'postgres://postgres:password@localhost:5432/inventory_db_dev',
  dialect: 'postgres',
};

const test = {
  url: process.env.DATABASE_URL || 'postgres://postgres:password@localhost:5432/inventory_db_test',
  dialect: 'postgres',
};

const production = {
  url: process.env.DATABASE_URL,
  dialect: 'postgres',
};

module.exports = {
  production,
  staging: production,
  development,
  test,
};