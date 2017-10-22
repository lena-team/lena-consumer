const Promise = require('bluebird');
const request = require('request');
const INVENTORY = require('../config/inventory.js');

module.exports = {
  get: (product) => {
    const options = {
      method: 'GET',
      uri: INVENTORY.URI,
      qs: {
        auth_token: INVENTORY.AUTH_TOKEN,
        product,
      },
      headers: { 'User-Agent': INVENTORY.USER_AGENT },
      json: true,
    };

    return new Promise((resolve, reject) => {
      request.get(options, (error, response, body) => {
        if (response.statusCode === 200) {
          resolve(body);
        } else {
          reject(error || 'Product Not Found');
        }
      });
    });
  },

  post: () => {
    // place holder for post
  },
};
