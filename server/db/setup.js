const models = require('../models');

models.user.sync()
  .then(() => models.zipcode.sync())
  .then(() => models.city.sync())
  .then(() => models.review.sync())
  .then(() => models.cart.sync())
  .catch((err) => {
    throw err;
  });
