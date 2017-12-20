exports.checkApiStatus = (req, res) => {
	res.status(200);
	res.json({
		message: 'Welcome to the API. This is the root route, and if you are seeing this, that means the API is up and running.'
	});
};
