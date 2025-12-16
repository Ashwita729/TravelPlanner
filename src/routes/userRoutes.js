const Express = require('express');
const { getAllUsers, updateUser } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');
const router = Express.Router();

router.get('/all', getAllUsers);
router.route('/').put(protect, updateUser);

module.exports = router;