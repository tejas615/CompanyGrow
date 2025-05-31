const express = require('express');
const router = express.Router();
const { createCheckoutSession } = require('../controllers/paymentController');
const auth = require('../middleware/authMiddleware');

router.post('/create-checkout-session', auth, createCheckoutSession);

module.exports = router;