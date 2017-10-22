const { Sequelize, sequelize } = require('../db');

const Zipcodes = sequelize.define('zipcodes', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  zipcode: {
    type: Sequelize.INTEGER,
  },
});

const findAll = () => Zipcodes.findAll();

const create = zipcode => Zipcodes.create({
  zipcode,
});

module.exports = {
  create,
  findAll,
};
