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
}, {
  indexes: [
    {
      // unique: true,
      fields: ['userId', 'zipcodeId', 'cityId', 'createdAt'],
    },
  ],
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
