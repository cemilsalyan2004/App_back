const express = require('express');
const authController = require('./../controllers/authController');

const router = express.Router();

// auth logic
router.route('/signup').post(authController.signup);
router.route('/login').post(authController.login);
router.route('/forgotPassword').post(authController.forgotPassword);
router.route('/resetPassword/:token').post(authController.resetPassword);

router.route('/').post(authController.userVerification);

module.exports = router;
