const mongoose = require('mongoose');

const AdSchema = new mongoose.Schema({
  profile: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  number: {
    type: Number
  },
  images: {
    type: [String],
    required: [true, 'Ad image required'],
    default: ['default.jpg'],
  },
  price: {
    type: Number,
    required: [true, 'Ad price required'],
  },
  desc: {
    type: String,
    required: [true, 'Ad price required'],
    trim: true,
  },
  created: {
    type: Date,
    default: Date.now(),
    required: true,
  },
});

const Ad = mongoose.model('Ad', AdSchema);
module.exports = Ad;
