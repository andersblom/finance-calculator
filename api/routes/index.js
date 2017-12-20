const express = require('express');
const handleAsync = require('../handlers/handleAsync');
const apiController = require('../controllers/apiController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', apiController.checkApiStatus);
router.post('/user/create', 
	handleAsync(userController.validateUserInput),
	handleAsync(userController.createNewUser),
	handleAsync(authController.login),
);

module.exports = router;
