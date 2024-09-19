const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 20, maxlength: 60 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 8, maxlength: 16 },
  address: { type: String, required: true, maxlength: 400 },
  role: { type: String, enum: ['admin', 'user', 'storeOwner'], default: 'user' }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
