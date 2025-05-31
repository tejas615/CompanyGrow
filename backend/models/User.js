const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['employee', 'admin'], default: 'employee' },
  skills: [String],
  badges: [String],
  enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  assignedProjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
});
module.exports = mongoose.model('User', UserSchema);