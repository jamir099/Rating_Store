const express = require('express');
const { addStore, rateStore } = require('../controllers/storeController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/add', protect, addStore);
router.post('/:id/rate', protect, rateStore);

module.exports = router;
