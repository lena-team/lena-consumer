// process.env.NODE_ENV = 'test';

const server = require('../index.js');
const supertest = require('supertest');
const setup = require('../db/setup');

const request = supertest.agent(server);

describe('Server User Spec', () => {
  before((done) => {
    setup.sync()
      .then(() => {
        done();
      });
  });

  it('should get all user', (done) => {
    request
      .get('/user')
      .expect(200, done);
  });

  it('should create user', (done) => {
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
