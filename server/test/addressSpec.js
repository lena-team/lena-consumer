process.env.NODE_ENV = 'test';

const server = require('../index.js');
const supertest = require('supertest');
const setup = require('../db/setup');

const request = supertest.agent(server);

describe('Server Address Spec', () => {
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

        // add zipcode
        const zipcodeParams = {
          zipcode: 55555,
        };

        // add city
        const cityParams = {
          city: 'San Francisco',
        };

        request
          .post('/user')
          .send(userParams)
          .set('Accept', 'application/json')
          .expect(201, () => {
            request
              .post('/zipcode')
              .send(zipcodeParams)
              .set('Accept', 'application/json')
              .expect(201, () => {
                request
                  .post('/city')
                  .send(cityParams)
                  .set('Accept', 'application/json')
                  .expect(201, done);
              });
          });
      });
  });

  it('should get all address', (done) => {
    request
      .get('/address')
      .expect(200, done);
  });

  it('should create address', (done) => {
    const addressParams = {
      userId: 1,
      zipcodeId: 1,
      cityId: 1,
      address: '1, 1349 street, Milpitas',
    };

    request
      .post('/address')
      .send(addressParams)
      .set('Accept', 'application/json')
      .expect(201, done);
  });
});
