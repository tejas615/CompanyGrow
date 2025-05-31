const BadgeSchema = new mongoose.Schema({
  title: String,
  description: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' }
});
module.exports = mongoose.model('Badge', BadgeSchema);