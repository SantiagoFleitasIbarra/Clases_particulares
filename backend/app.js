const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bookingRoutes = require('./routes/bookingRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/tus-clases', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/bookings', bookingRoutes);
app.use('/api/contact', contactRoutes);  // Asegúrate de que la ruta sea correcta

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});