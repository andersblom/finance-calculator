exports.validateUserInput = (req, res, next) => {
	res.status(200);
	res.send(req.body);
};
