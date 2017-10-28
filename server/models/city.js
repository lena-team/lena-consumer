const { Sequelize, sequelize } = require('../db');
const { Address } = require('./address');

const City = sequelize.define('cities', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  city: {
    type: Sequelize.STRING,
  },
}, {
  indexes: [
    {
      // unique: true,
      fields: ['city', 'createdAt'],
    },
  ],
});

City.hasOne(Address);

const sync = () => City.sync();

const findAll = () => City.findAll();

const create = city => City.create({
  city,
});

module.exports = {
  City,
  sync,
  create,
  findAll,
};
