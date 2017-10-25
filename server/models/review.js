const { Sequelize, sequelize } = require('../db');

const Review = sequelize.define('reviews', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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
});

const sync = () => Review.sync();

const findAll = () => Review.findAll();

const create = review => Review.create(review);

module.exports = {
  Review,
  sync,
  create,
  findAll,
};
