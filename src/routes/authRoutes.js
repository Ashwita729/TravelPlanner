const Express = require('express');
const { registerUser, authUser } = require('../controllers/authController');
const router = Express.Router();


router.post('/register', registerUser);
router.post('/login', authUser);


module.exports = router;