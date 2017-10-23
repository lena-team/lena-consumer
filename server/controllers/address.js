const models = require('../models');

module.exports = {
  get: (req, res) => {
    models.address.findAll()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  post: (req, res) => {
    const address = req.body;

    models.address.create(address)
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((err) => {
        res.status(404).send('Error Occurred');
        throw err;
      });
  },
};
