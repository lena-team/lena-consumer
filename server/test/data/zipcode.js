const rp = require('request-promise');
const helpers = require('../helpers/');


const randomZipcode = () => {
  const zipcode = {
    zipcode: helpers.randomNumber(6),
    createdAt: helpers.randomDate(),
  };

  return zipcode;
};

const createRandomZipcode = () => {
  const options = {
    method: 'POST',
    uri: `${helpers.CONSUMER_URL}/zipcode`,
    headers: {
      'content-type': 'application/json',
    },
    body: randomZipcode(),
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

createRandomZipcode();

module.exports = {
  createRandomZipcode,
};
