process.env.NODE_ENV = 'test';

const server = require('../index.js');
const supertest = require('supertest');
const setup = require('../db/setup');

const request = supertest.agent(server);

describe('Server Review Spec', () => {
  before((done) => {
    setup.sync()
      .then(() => {
        done();
      });
  });

  it('should get all review', (done) => {
    request
      .get('/review')
      .expect(200, done);
  });

  it('should create review', (done) => {
    const reviewParams = {
      user_id: 1,
      product_id: 1,
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
