const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  materia: { type: String, required: true},
  date: { type: Date, required: true },
});

module.exports = mongoose.model('Booking', bookingSchema);