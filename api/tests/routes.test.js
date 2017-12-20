const request = require('supertest');
const app = require('../app');

describe('Test API status', () => {
  test('It should be online, responding to a GET /', () => {
    return request(app).get('/api').expect(200);
  });
});