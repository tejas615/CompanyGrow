const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  skillLevel: String,
  content: [String],
  enrolledUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});
module.exports = mongoose.model('Course', CourseSchema);