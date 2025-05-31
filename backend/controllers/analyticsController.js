const Project = require('../models/Project');
const Course = require('../models/Course');
const User = require('../models/User');

exports.getAnalytics = async (req, res) => {
  try {
    const courseCount = await Course.countDocuments();
    const projectCount = await Project.countDocuments();
    const employeeCount = await User.countDocuments({ role: 'employee' });

    res.json({ courseCount, projectCount, employeeCount });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};