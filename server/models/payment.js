const { Sequelize, sequelize } = require('../db');

const Payment = sequelize.define('payments', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: { // to be fixed, with user id
    type: Sequelize.INTEGER,
  },
  card_type: { // to be fixed, with product table id
    type: Sequelize.STRING,
  },
  card_number: {
    type: Sequelize.STRING,
  },
  card_expiry: {
    type: Sequelize.STRING,
  },
  card_cvv: {
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

const sync = () => Payment.sync();

const findAll = () => Payment.findAll();

const create = payment => Payment.create(payment);

module.exports = {
  sync,
  create,
  findAll,
};
