const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

require('../models/User');

const User = mongoose.model('User');

exports.login = async (req, res, next) => {
	const findUser = await User.findOne({ email: req.body.email });

	if (findUser === null) {
		const error = new Error('Email and password does not match.');
		error.status = 401; 
		return next(error);
	}
	
	const userPwIsCorrect = await bcrypt.compare(req.body.password, findUser.password)
		.then(res => {
			return res;
		})
	;
	
	if (!userPwIsCorrect) {
		const error = new Error('Password and email does not match.');
		error.status = 401; 
		return next(error);
	}

	res.status(200);
	res.json({
		message: 'Success! You are logged in.'
	});

	// Send JWT 

};
