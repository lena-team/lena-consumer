const { Sequelize, sequelize } = require('../db');

const City = sequelize.define('cities', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  city: {
    type: Sequelize.STRING,
  },
});

const sync = () => City.sync();

const findAll = () => City.findAll();

const create = city => City.create({
  city,
});

module.exports = {
  sync,
  create,
  findAll,
};
