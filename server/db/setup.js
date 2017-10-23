const models = require('../models');

models.user.sync()
  .then(() => models.zipcode.sync())
  .then(() => models.city.sync())
  .then(() => models.review.sync())
  .then(() => models.cart.sync())
  .then(() => models.payment.sync())
  .then(() => models.address.sync())
  .catch((err) => {
    throw err;
  });
