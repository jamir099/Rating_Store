const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  ratings: [{ userId: mongoose.Schema.Types.ObjectId, rating: Number }]
}, { timestamps: true });

module.exports = mongoose.model('Store', storeSchema);
