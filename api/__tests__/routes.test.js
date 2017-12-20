process.env.NODE_ENV = 'test';

const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');

const User = require('../models/User');

beforeAll(() => {
	User.remove({}, err => {
	});
});

afterEach(() => {
	User.remove({}, err => {
	});
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
			expect(res.statusCode).toBe(201);
			expect(res.body.user.email).toBe('test@example.com');
			expect(res.body.user.password).not.toBe('test');
			expect(res.body.user.userLevel).toBe(0);
		});
	});
});