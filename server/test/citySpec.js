process.env.NODE_ENV = 'test';

const server = require('../index.js');
const supertest = require('supertest');
const setup = require('../db/setup');

const request = supertest.agent(server);

describe('Server City Spec', () => {
  before((done) => {
    setup.sync()
      .then(() => {
        done();
      });
  });

  it('should get all city', (done) => {
    request
      .get('/city')
      .expect(200, done);
  });

  it('should create city', (done) => {
    const cityParams = {
      city: 'San Francisco',
    };

    request
      .post('/city')
      .send(cityParams)
      .set('Accept', 'application/json')
      .expect(201, done);
  });
});
