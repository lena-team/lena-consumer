process.env.NODE_ENV = 'test';

const server = require('../index.js');
const supertest = require('supertest');
const setup = require('../db/setup');

const request = supertest.agent(server);

describe('Server Payment Spec', () => {
  before((done) => {
    setup.sync()
      .then(() => {
        done();
      });
  });

  it('should get all payment', (done) => {
    request
      .get('/payment')
      .expect(200, done);
  });

  it('should create payment', (done) => {
    const paymentParams = {
      user_id: 1,
      card_type: 'American Express',
      card_number: '1234567890123456',
      card_expiry: '12/21',
      card_cvv: '1234',
    };

    request
      .post('/payment')
      .send(paymentParams)
      .set('Accept', 'application/json')
      .expect(201, done);
  });
});
