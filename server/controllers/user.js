const models = require('../models');

module.exports = {
  get: (req, res) => {
    const { product } = req.query;

    models.user.findAll(product)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  post: (req, res) => {

  },
};
