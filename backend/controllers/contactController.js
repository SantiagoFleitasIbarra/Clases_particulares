const Message = require('../models/Message');

const saveMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json({ message: 'Mensaje guardado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al guardar el mensaje', error });
  }
};

module.exports = {
  saveMessage,
};