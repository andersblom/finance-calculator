const validator = require('validator');

exports.validateUserInput = (req, res, next) => {
	if (!validator.isEmail(req.body.email)) {
		res.status(400);
		res.json({
			message: 'error',
		});
	}
	next();
};

exports.createNewUser = (req, res) => {
	res.status(200);
	res.send(req.body);
};
