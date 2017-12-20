const express = require('express');
const apiController = require('../controllers/apiController');

const router = express.Router();

router.get('/', apiController.checkApiStatus);

module.exports = router;
