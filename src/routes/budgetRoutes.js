const express = require('express');
const { createBudget, getBudgets, updateBudget } = require('../controllers/budgetController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/')
  .get(protect, getBudgets)
  .post(protect, createBudget);

router.route('/:id')
  .put(protect, updateBudget);

module.exports = router;
