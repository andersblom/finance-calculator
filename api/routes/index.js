const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.status(200);
	res.json({
		message: 'Welcome to the API. This is the root route, and if you are seeing this, that means the API is up and running.'
	});
});

module.exports = router;
