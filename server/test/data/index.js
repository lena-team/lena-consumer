const user = require('./user');
const cart = require('./cart');

const seedRandomData = () => {
  user.createRandomUser();
  cart.createRandomCart();
};

seedRandomData();

module.exports = {
  user,
  cart,
};
