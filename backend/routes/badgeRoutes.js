const auth = require('../middleware/auth');
const role = require('../middleware/role');

const express = require('express');
const router = express.Router();
const { createBadge, getBadges, getBadge, updateBadge, deleteBadge } = require('../controllers/badgeController');

router.post('/',auth, createBadge);
router.get('/',auth, getBadges);
router.get('/:id',auth, getBadge);
router.put('/:id',auth, updateBadge);
router.delete('/:id',auth, deleteBadge);

module.exports = router;