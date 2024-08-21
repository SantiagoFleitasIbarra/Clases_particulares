const Booking = require('../models/Booking');

const createBooking = async (req, res) => {
  try {
    const { name, materia, date } = req.body;
    const newBooking = new Booking({ name, materia, date });
    await newBooking.save();
    res.status(201).json({ message: 'Reserva creada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la reserva', error });
  }
};

const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las reservas', error });
  }
};

module.exports = {
  createBooking,
  getBookings,
};