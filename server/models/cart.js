const { Sequelize, sequelize } = require('../db');

const Cart = sequelize.define('carts', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  product_id: { // to be fixed, with product table id
    type: Sequelize.INTEGER,
  },
  quantity: {
    type: Sequelize.INTEGER,
  },
});


const sync = () => Cart.sync();

const findAll = () => Cart.findAll();

const create = cart => Cart.create(cart);

module.exports = {
  Cart,
  sync,
  create,
  findAll,
};
