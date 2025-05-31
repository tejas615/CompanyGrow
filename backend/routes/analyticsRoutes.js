const auth = require('../middleware/auth');
const role = require('../middleware/role');

const express = require('express');
const router = express.Router();
const { getAnalytics } = require('../controllers/analyticsController');

router.get('/', auth, role('admin'), getAnalytics);

module.exports = router;