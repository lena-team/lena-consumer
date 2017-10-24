const { Sequelize, sequelize } = require('../db');

const Address = sequelize.define('addresses', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: { // to be fixed, with user id
    type: Sequelize.INTEGER,
  },
  zipcode_id: { // to be fixed, with user id
    type: Sequelize.INTEGER,
  },
  city_id: { // to be fixed, with user id
    type: Sequelize.INTEGER,
  },
  address: {
    type: Sequelize.STRING,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
});

const sync = () => Address.sync();

const findAll = () => Address.findAll();

const create = address => Address.create(address);

module.exports = {
  sync,
  create,
  findAll,
};
