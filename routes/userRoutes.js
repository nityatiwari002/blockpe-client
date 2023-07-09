const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');

const router = express.Router(); 

router.route('/home').get(userController.home);
router.route('/about').get(userController.about);
router.route('/contact').get(userController.contact);
router.route('/login').get(userController.login).post(authController.loginExisting);
router.route('/signup').get(userController.signup).post(authController.makeAccount);
router.route('/').get(userController.getAllUsers);

router.route('/dashboard/:id').get(authController.protect, userController.getDetails).patch(authController.protect, userController.updateDetails).delete(authController.protect, userController.deleteUser)


module.exports = router;  
