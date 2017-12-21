process.env.NODE_ENV = 'test';

const request = require('supertest');
const app = require('../app');

const User = require('../models/User');

describe('Test API status', () => {
	test('It should be online, responding to a GET /', () => {
		return request(app).get('/').then(res => {
			// Checking for statusCode to be 200 (OK)
			expect(res.statusCode).toBe(403);
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
	beforeEach(() => {
		User.remove({}, () => {
		});
		const alreadyExistingUser = new User({
			fullName: 'iAlreadyExist',
			email: 'ialreadyexist@example.com',
			password: 'test',
		});
		alreadyExistingUser.save(() => {
		});
	});
	
	afterEach(() => {
		User.remove({}, () => {
		});
	});
	
	test('It should create a user @ POST /user/create', () => {
		return request(app).post('/user/create').send(testUser).then(res => {
			expect(res.statusCode).toBe(201);
			expect(res.body.user.email).toBe('test@example.com');
			expect(res.body.user.password).not.toBe('test');
			expect(res.body.user.userLevel).toBe(0);
		});
	});
	test('Creating a duplicate user should throw an error', () => {
		return request(app).post('/user/create').send({
			fullName: 'Mr. Duplicate Email',
			email: 'ialreadyexist@example.com',
			password: 'thiswillfail',
		}).then(res => {
			expect(res.statusCode).toBe(400);
		});
	});
});