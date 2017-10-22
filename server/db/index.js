const Sequelize = require('sequelize');
const CONFIG = require('../config/inventory');

const NODE_ENV = process.env.NODE_ENV || 'dev';

const sequelize = new Sequelize(CONFIG[NODE_ENV]);

module.exports = {
  Sequelize,
  sequelize,
};
