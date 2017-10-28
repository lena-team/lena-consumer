const { Sequelize, sequelize } = require('../db');
const { Address } = require('./address');

const Zipcode = sequelize.define('zipcodes', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  zipcode: {
    type: Sequelize.INTEGER,
  },
}, {
  indexes: [
    {
      // unique: true,
      fields: ['createdAt'],
    },
  ],
});

Zipcode.hasOne(Address);

const sync = () => Zipcode.sync();

const findAll = () => Zipcode.findAll();

const create = zipcode => Zipcode.create({
  zipcode,
});

module.exports = {
  Zipcode,
  sync,
  create,
  findAll,
};
