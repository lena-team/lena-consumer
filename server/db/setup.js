const models = require('../models');
const { Sequelize, ENV_CONFIG_DB } = require('./index');

const sequelize = new Sequelize({
  username: ENV_CONFIG_DB.username,
  password: ENV_CONFIG_DB.password,
  dialect: ENV_CONFIG_DB.dialect,
});

const createDatabase = () => sequelize.query(`CREATE DATABASE IF NOT EXISTS ${ENV_CONFIG_DB.database}`);

const dropDatabase = () => sequelize.query(`DROP DATABASE IF EXISTS ${ENV_CONFIG_DB.database}`);

const sync = () => dropDatabase()
  .then(() => createDatabase())
  .then(() => models.user.sync())
  .then(() => models.zipcode.sync())
  .then(() => models.city.sync())
  .then(() => models.address.sync())
  .then(() => models.cart.sync())
  .then(() => models.payment.sync())
  .then(() => models.review.sync())
  .catch((err) => {
    throw err;
  });

sync();

module.exports = {
  sync,
};
