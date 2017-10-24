process.env.NODE_ENV = 'test';

const server = require('../index.js');
const supertest = require('supertest');
const setup = require('../db/setup');

const request = supertest.agent(server);

describe('Server Address Spec', () => {
  before((done) => {
    setup.sync()
      .then(() => {
        done();
      });
  });

  it('should get all address', (done) => {
    request
      .get('/address')
      .expect(200, done);
  });

  it('should create address', (done) => {
    const addressParams = {
      user_id: 1,
      zipcode_id: 1,
      city_id: 1,
      address: '1, 1349 street, Milpitas',
    };

    request
      .post('/address')
      .send(addressParams)
      .set('Accept', 'application/json')
      .expect(201, done);
  });
});
