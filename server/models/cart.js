const { Sequelize, sequelize } = require('../db');

const Cart = sequelize.define('carts', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: { // to be fixed, with user id
    type: Sequelize.INTEGER,
  },
  product_id: { // to be fixed, with product table id
    type: Sequelize.INTEGER,
  },
  quantity: {
    type: Sequelize.INTEGER,
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

const sync = () => Cart.sync();

const findAll = () => Cart.findAll();

const create = cart => Cart.create(cart);

module.exports = {
  sync,
  create,
  findAll,
};
