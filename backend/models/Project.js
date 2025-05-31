const ProjectSchema = new mongoose.Schema({
  name: String,
  description: String,
  requiredSkills: [String],
  assignedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});
module.exports = mongoose.model('Project', ProjectSchema);