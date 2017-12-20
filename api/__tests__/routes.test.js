const request = require('supertest');
const app = require('../app');

beforeAll(() => {
	process.env.NODE_ENV = 'test';
});

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

const testUser = {
	fullName: 'Testy McTesterson',
	email: 'test@example.com',
	password: 'test',
};

describe('User functionality', () => {
	test('It should create a user @ POST /user/create', () => {
		return request(app).post('/user/create').send(testUser).then(res => {
			expect(res.statusCode).toBe(200);
			expect(res.body.fullName).toBe('Testy McTesterson');
			expect(res.body.email).toBe('test@example.com');
			expect(res.body.password).not.toBe('test');
		});
	});
});