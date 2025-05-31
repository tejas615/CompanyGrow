const User = require('../models/User');
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// controllers/courseController.js
const Course = require('../models/Course');
exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.json(course);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
exports.getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.json(course);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(course);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
exports.deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Course deleted' });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};