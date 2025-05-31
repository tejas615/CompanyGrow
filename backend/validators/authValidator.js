// validators/authValidator.js
const { check } = require('express-validator');

exports.registerValidator = [
  check('name', 'Name is required').notEmpty(),
  check('email', 'Valid email is required').isEmail(),
  check('password', 'Password must be 6+ chars').isLength({ min: 6 }),
];

exports.loginValidator = [
  check('email', 'Valid email is required').isEmail(),
  check('password', 'Password is required').notEmpty(),
];
