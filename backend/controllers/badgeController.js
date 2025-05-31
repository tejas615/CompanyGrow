const Badge = require('../models/Badge');

exports.createBadge = async (req, res) => {
  try {
    const badge = await Badge.create(req.body);
    res.json(badge);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getBadges = async (req, res) => {
  try {
    const badges = await Badge.find();
    res.json(badges);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getBadge = async (req, res) => {
  try {
    const badge = await Badge.findById(req.params.id);
    res.json(badge);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.updateBadge = async (req, res) => {
  try {
    const badge = await Badge.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(badge);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.deleteBadge = async (req, res) => {
  try {
    await Badge.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Badge deleted' });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};