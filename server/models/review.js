const { Sequelize, sequelize } = require('../db');

const Review = sequelize.define('reviews', {
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
  review: {
    type: Sequelize.STRING,
  },
  rating: {
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

const sync = () => Review.sync();

const findAll = () => Review.findAll();

const create = review => Review.create(review);

module.exports = {
  sync,
  create,
  findAll,
};
