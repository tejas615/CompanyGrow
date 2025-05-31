const AnalyticsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  monthlyStats: Object,
  badgeCount: Number
});
module.exports = mongoose.model('Analytics', AnalyticsSchema);