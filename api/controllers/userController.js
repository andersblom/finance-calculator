const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

require('../models/User');

const User = mongoose.model('User');

exports.validateUserInput = async (req, res, next) => {
	if (!req.body.email || !req.body.fullName || !req.body.password) {
		const error = new Error('One or more fields were left out');
		error.status = 400;
		return next(error);
	}
	if (!validator.isEmail(req.body.email)) {
		res.status(400);
		return next(new Error('Email is not valid.'));
	}

	const alreadyExistingUser = await User.findOne({ email: req.body.email });
	if (alreadyExistingUser !== null) {
		const error = new Error('user already exists!');
		error.status = 400;
		return next(error);
	}
	
	next();
};

exports.createNewUser = async (req, res, next) => {
	const user = new User({
		email: req.body.email,
		password: req.body.password,
		fullName: req.body.fullName
	});

	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(user.password, salt);

	user.password = hash;

	await user.save(err => {
		if (err) {
			next(err);
		} else {
			res.status(201);
			res.json({
				message: 'User was created',
				user: user
			});
		}
	});
};