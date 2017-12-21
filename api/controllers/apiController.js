exports.checkApiStatus = (req, res) => {
	res.status(403);
	res.json({
		message: 'Nothing to see here.'
	});
};
