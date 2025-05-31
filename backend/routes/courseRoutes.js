const auth = require('../middleware/auth');
const role = require('../middleware/role');
const express = require('express');
const router = express.Router();
const { createCourse, getCourses, getCourse, updateCourse, deleteCourse } = require('../controllers/courseController');
router.post('/', auth, role('admin'), createCourse);
router.put('/:id', auth, role('admin'), updateCourse);
router.delete('/:id', auth, role('admin'), deleteCourse);

// Public access to get courses
router.get('/', getCourses);
router.get('/:id', getCourse);

module.exports = router;