const models = require('../models');

models.user.sync()
  .then(() => models.zipcode.sync())
  .then(() => models.city.sync())
  .catch((err) => {
    throw err;
  });
