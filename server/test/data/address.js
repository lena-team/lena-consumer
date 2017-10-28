const rp = require('request-promise');
const helpers = require('../helpers/');


const randomAddress = () => {
  const address = {
    userId: 1, // TBD - userId: helpers.randomUserId(),
    zipcodeId: 1, // TBD - zipcodeId: helpers.randomZipcodeId(),
    cityId: 1, // TBD - cityId: helpers.randomCityId(),
    createdAt: helpers.randomDate(),
  };

  return address;
};

const createRandomAddress = () => {
  const options = {
    method: 'POST',
    uri: `${helpers.CONSUMER_URL}/address`,
    headers: {
      'content-type': 'application/json',
    },
    body: randomAddress(),
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

createRandomAddress();

module.exports = {
  createRandomAddress,
};
