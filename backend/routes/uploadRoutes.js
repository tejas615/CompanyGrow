const auth = require('../middleware/auth');
const role = require('../middleware/role');

const express = require('express');
const router = express.Router();
const { uploadFile, multerUploads } = require('../controllers/uploadController');
const auth = require('../middleware/auth');

router.post('/', auth, multerUploads, uploadFile);

module.exports = router;
