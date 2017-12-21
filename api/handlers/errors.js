exports.logErrors = (err, req, res, next) => {
	process.env.NODE_ENV !== 'test' ? console.error(err.stack) : null; 
	next(err);
};

exports.sendClientErrors = (err, req, res, next) => {
	if (req.xhr) {
		res.status(err.status || 500);
		res.json({
			message: err.message || 'Something went wrong!',
		});
	} else {
		next(err);
	}
};

exports.catchAllErrors = (err, req, res, next) => { //eslint-disable-line no-unused-vars
	res.status(err.status || 500);
	res.json({
		message: err.message || 'Something went wrong!',
		error: err
	});
};
