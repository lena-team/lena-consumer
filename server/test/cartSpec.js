// process.env.NODE_ENV = 'test';

const server = require('../index.js');
const supertest = require('supertest');
const setup = require('../db/setup');

const request = supertest.agent(server);

describe('Server Cart Spec', () => {
  before((done) => {
    setup.sync()
      .then(() => {
        // add user
        const userParams = {
          username: 'nandakishore',
          password: '1234abcd',
          email: 'nsaboo@github.com',
          age: 22,
          mobile: 919980499811,
          gender: 1,
          firstname: 'Nandakishore',
          lastname: 'Saboo',
        };

        request
          .post('/user')
          .send(userParams)
          .set('Accept', 'application/json')
          .expect(201, done);
      });
  });

  it('should get all cart', (done) => {
    request
      .get('/cart')
      .expect(200, done);
  });

  it('should create cart', (done) => {
    const cartParams = {
      userId: 1,
      productId: 1,
      quantity: 9,
    };

    request
      .post('/cart')
      .send(cartParams)
      .set('Accept', 'application/json')
      .expect(201, done);
  });
});
