const { Sequelize, sequelize } = require('../db');

const Payment = sequelize.define('payments', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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
}, {
  indexes: [
    {
      // unique: true,
      fields: ['userId', 'createdAt'],
    },
  ],
});

const sync = () => Payment.sync();

const findAll = () => Payment.findAll();

const create = payment => Payment.create(payment);

module.exports = {
  Payment,
  sync,
  create,
  findAll,
};
