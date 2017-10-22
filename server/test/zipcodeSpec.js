process.env.NODE_ENV = 'test';

const server = require('../index.js');
const supertest = require('supertest');

const request = supertest.agent(server);

describe('Server Zipcode Spec', () => {
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
