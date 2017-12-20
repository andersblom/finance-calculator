const express = require('express');
const apiController = require('../controllers/apiController');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', apiController.checkApiStatus);
router.post('/user/create', 
	userController.validateUserInput,
	// userController.createNewUser,
	// authController.login,
);

module.exports = router;
