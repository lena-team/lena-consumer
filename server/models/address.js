const { Sequelize, sequelize } = require('../db');

const Address = sequelize.define('addresses', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  address: {
    type: Sequelize.STRING,
  },
});

const sync = () => Address.sync();

const findAll = () => Address.findAll();

const create = address => Address.create(address);

module.exports = {
  Address,
  sync,
  create,
  findAll,
};
