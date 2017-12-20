exports.login = async (req, res) => {
	
	// Send JWT 

	res.status(200);
	res.json({
		message: 'logged in!',
	});
};
