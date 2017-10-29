const rp = require('request-promise');
const helpers = require('../helpers/');


const randomPayment = () => {
  const payment = {
    userId: 1, // TBD - userId: helpers.randomUserId(),
    card_type: helpers.randomText(10),
    card_number: helpers.randomNumber(1, 16),
    card_expiry: helpers.randomNumber(1, 4),
    createdAt: helpers.randomDate(),
  };

  return payment;
};

const createRandomPayment = () => {
  const options = {
    method: 'POST',
    uri: `${helpers.CONSUMER_URL}/payment`,
    headers: {
      'content-type': 'application/json',
    },
    body: randomPayment(),
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

createRandomPayment();

module.exports = {
  createRandomPayment,
};
