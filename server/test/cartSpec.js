process.env.NODE_ENV = 'test';

const server = require('../index.js');
const supertest = require('supertest');
const setup = require('../db/setup');

const request = supertest.agent(server);

describe('Server Cart Spec', () => {
  before((done) => {
    setup.sync()
      .then(() => {
        done();
      });
  });

  it('should get all cart', (done) => {
    request
      .get('/cart')
      .expect(200, done);
  });

  it('should create cart', (done) => {
    const cartParams = {
      user_id: 1,
      product_id: 1,
      quantity: 9,
    };

    request
      .post('/cart')
      .send(cartParams)
      .set('Accept', 'application/json')
      .expect(201, done);
  });
});
