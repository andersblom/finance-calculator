const express = require('express');

const router = express.Router();

router.get('/v1', (req, res) => {
	res.send('it works');
});

module.exports = router;
