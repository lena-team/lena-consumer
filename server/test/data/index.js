const user = require('./user');
const cart = require('./cart');
const address = require('./address');
const city = require('./city');
const zipcode = require('./zipcode');
const review = require('./review');
const payment = require('./payment');

const randomCallback = {
  createRandomUser: () => user.createRandomUser(),
  createRandomCart: () => cart.createRandomCart(),
  createRandomAddress: () => address.createRandomAddress(),
  createRandomCity: () => city.createRandomCity(),
  createRandomZipcode: () => zipcode.createRandomZipcode(),
  createRandomReview: () => review.createRandomReview(),
  createRandomPayment: () => payment.createRandomPayment(),
};

const seedRandomData = () => {
  const callbacks = Object.keys(randomCallback);
  const callbacksLength = callbacks.length;

  for (let i = 0; i < 100; i += 1) {
    const index = Math.floor(callbacksLength * Math.random());
    randomCallback[callbacks[index]]();
  }
};

setInterval(seedRandomData, 5000);

module.exports = {
  user,
  cart,
  address,
  city,
  zipcode,
  review,
  payment,
};
