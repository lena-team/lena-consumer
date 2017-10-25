const rp = require('request-promise');
const helpers = require('../helpers/');


const randomUser = () => {
  const str = helpers.randomString();

  const user = {
    username: str,
    password: helpers.createHash(str),
    email: `${str}@lena.com`,
    age: helpers.randomAge(),
    mobile: helpers.randomMobile(),
    gender: helpers.randomGender(),
    firstname: str,
    lastname: str,
    createdAt: helpers.randomDate(),
  };

  return user;
};

const createRandomUser = () => {
  const options = {
    method: 'POST',
    uri: `${helpers.CONSUMER_URL}/user`,
    headers: {
      'content-type': 'application/json',
    },
    body: randomUser(),
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

createRandomUser();

module.exports = {
  createRandomUser,
};
