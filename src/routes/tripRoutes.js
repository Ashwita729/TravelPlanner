const Express = require('express');
const { createTrip, getTrips, updateTrip, deleteTrip } = require('../controllers/tripController');
const { protect } = require('../middlewares/authMiddleware');
const router = Express.Router();


router.route('/').get(protect, getTrips).post(protect, createTrip);
router.route('/:id').put(protect, updateTrip).delete(protect, deleteTrip);


module.exports = router;