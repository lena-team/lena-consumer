const rp = require('request-promise');
const helpers = require('../helpers/');


const randomCity = () => {
  const city = {
    city: helpers.randomString(10),
    createdAt: helpers.randomDate(),
  };

  return city;
};

const createRandomCity = () => {
  const options = {
    method: 'POST',
    uri: `${helpers.CONSUMER_URL}/city`,
    headers: {
      'content-type': 'application/json',
    },
    body: randomCity(),
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

createRandomCity();

module.exports = {
  createRandomCity,
};
