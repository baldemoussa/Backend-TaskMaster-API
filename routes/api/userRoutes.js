const router = require("express").Router();
const userController = require('../../controllers/userController');

// POST /api/users/register - Create a new user
router.post('/register', userController.registerUser);
 
// POST /api/users/login - Authenticate a user and return a token
router.post('/login', userController.loginUser);
 
module.exports = router;