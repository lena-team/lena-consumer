process.env.NODE_ENV = 'test';

const server = require('../index.js');
const supertest = require('supertest');
const setup = require('../db/setup');

const request = supertest.agent(server);

describe('Server Zipcode Spec', () => {
  before((done) => {
    setup.sync()
      .then(() => {
        done();
      });
  });

  it('should get all zipcode', (done) => {
    request
      .get('/zipcode')
      .expect(200, done);
  });

  it('should create zipcode', (done) => {
    const zipcodeParams = {
      zipcode: 55555,
    };

    request
      .post('/zipcode')
      .send(zipcodeParams)
      .set('Accept', 'application/json')
      .expect(201, done);
  });
});
