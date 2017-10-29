const rp = require('request-promise');
const helpers = require('../helpers/');


const randomReview = () => {
  const review = {
    userId: 1, // TBD - userId: helpers.randomUserId(),
    product_id: 1, // TBD - productId: helpers.randomProductId(),
    review: helpers.randomText(),
    rating: helpers.randomNumber(1, 5),
    createdAt: helpers.randomDate(),
  };

  return review;
};

const createRandomReview = () => {
  const options = {
    method: 'POST',
    uri: `${helpers.CONSUMER_URL}/review`,
    headers: {
      'content-type': 'application/json',
    },
    body: randomReview(),
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

createRandomReview();

module.exports = {
  createRandomReview,
};
