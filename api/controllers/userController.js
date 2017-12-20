const validator = require('validator');

exports.validateUserInput = (req, res, next) => {
	if (!req.body.email || !req.body.fullName || !req.body.password) {
		const error = new Error('One or more fields were left out');
		error.status = 400;
		return next(error);
	}
	if (!validator.isEmail(req.body.email)) {
		res.status(400);
		return next(new Error('Email is not valid.'));
	}
	
	//Check if user already exists
	// ---

	next();
};

exports.createNewUser = async (req, res, next) => {
	next();
};