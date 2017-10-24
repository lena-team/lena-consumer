const models = require('../models');

const sync = () => models.user.sync()
  .then(() => models.zipcode.sync())
  .then(() => models.city.sync())
  .then(() => models.address.sync())
  .then(() => models.cart.sync())
  .then(() => models.payment.sync())
  .then(() => models.review.sync())
  .catch((err) => {
    throw err;
  });

sync();

module.exports = {
  sync,
};
