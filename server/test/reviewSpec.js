// process.env.NODE_ENV = 'test';

const server = require('../index.js');
const supertest = require('supertest');
const setup = require('../db/setup');

const request = supertest.agent(server);

describe('Server Review Spec', () => {
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

  it('should get all review', (done) => {
    request
      .get('/review')
      .expect(200, done);
  });

  it('should create review', (done) => {
    const reviewParams = {
      userId: 1,
      productId: 1,
      review: 'this product is amazing, i really liked it and would like to rate 5 on 5',
      rating: 5,
    };

    request
      .post('/review')
      .send(reviewParams)
      .set('Accept', 'application/json')
      .expect(201, done);
  });
});
