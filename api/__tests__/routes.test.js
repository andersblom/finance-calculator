const request = require('supertest');
const app = require('../app');

describe('Test API status', () => {
	test('It should be online, responding to a GET /', () => {
		return request(app).get('/').then(res => {
			// Checking for statusCode to be 200 (OK)
			expect(res.statusCode).toBe(200);
			// Checking to make sure there is a "message" key on the response object
			expect(Object.keys(res.body)).toEqual(['message']);
		});
	});
});