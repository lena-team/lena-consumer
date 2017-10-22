const { Sequelize, sequelize } = require('../db');

const User = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.INTEGER,
  },
  mobile: {
    type: Sequelize.STRING,
  },
  create_time: {
    type: Sequelize.DATE,
  },
  gender: {
    type: Sequelize.INTEGER,
  },
  firstname: {
    type: Sequelize.STRING,
  },
  lastname: {
    type: Sequelize.STRING,
  },
});

const findAll = () => User.findAll();

const create = user => User.create({
  user,
});

module.exports = {
  create,
  findAll,
};
