exports.logErrors = (err, req, res, next) => {
	console.error(err.stack);
	next(err);
};

exports.sendClientErrors = (err, req, res, next) => {
	if (req.xhr) {
		res.status(500);
		res.json({
			message: 'Something went wrong!',
		});
	} else {
		next(err);
	}
};

exports.catchAllErrors = (err, req, res, next) => {
	res.status(500);
	res.json({
		message: 'Something went wrong!',
		error: err
	});
};
