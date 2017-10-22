const { Sequelize, sequelize } = require('../db');

const Zipcode = sequelize.define('zipcodes', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  zipcode: {
    type: Sequelize.INTEGER,
  },
});

const sync = () => Zipcode.sync();

const findAll = () => Zipcode.findAll();

const create = zipcode => Zipcode.create({
  zipcode,
});

module.exports = {
  sync,
  create,
  findAll,
};
