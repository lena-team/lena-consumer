const { Sequelize, sequelize } = require('../db');
const { Cart } = require('./cart');
const { Review } = require('./review');
const { Payment } = require('./payment');
const { Address } = require('./address');

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
  gender: {
    type: Sequelize.INTEGER,
  },
  firstname: {
    type: Sequelize.STRING,
  },
  lastname: {
    type: Sequelize.STRING,
  },
}, {
  indexes: [
    {
      // unique: true,
      name: 'gender_age',
      fields: ['id', 'gender', 'age'],
    },
  ],
});

User.hasMany(Cart);
User.hasMany(Review);
User.hasMany(Payment);
User.hasMany(Address);

// Cart.belongsTo(User);
// Review.belongsTo(User);
// Payment.belongsTo(User);
// Address.belongsTo(User);

const sync = () => User.sync();

const findAll = () => User.findAll();

const create = user => User.create(user);

module.exports = {
  User,
  sync,
  create,
  findAll,
};
