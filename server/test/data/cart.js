const rp = require('request-promise');
const helpers = require('../helpers/');


const randomCart = () => {
  const cart = {
    userId: 1, // TBD - userId: helpers.randomUserId(),
    product_id: 1, // TBD - productId: helpers.randomProductId(),
    quantity: helpers.randomNumber(1, 10),
    createdAt: helpers.randomDate(),
  };

  return cart;
};

const createRandomCart = () => {
  const options = {
    method: 'POST',
    uri: `${helpers.CONSUMER_URL}/cart`,
    headers: {
      'content-type': 'application/json',
    },
    body: randomCart(),
    json: true,
  };

  rp(options)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

createRandomCart();

module.exports = {
  createRandomCart,
};
