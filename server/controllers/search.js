const inventory = require('../helpers/inventoryService');

module.exports = {
  get: (req, res) => {
    const { product } = req.query;

    inventory.get(product)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
};
