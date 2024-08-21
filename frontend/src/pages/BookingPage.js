import React, { useState } from 'react';
import axios from 'axios';
import '../assets/styles/BookingPage.css';

function BookingPage() {
  const [name, setName] = useState('');
  const [materia, setMateria] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/bookings', { name, materia, date });
      alert('Reserva realizada con éxito');
      setName('');
      setDate('');
      setMateria('');
    } catch (error) {
      console.error('Error al realizar la reserva', error);
      alert('Hubo un problema al realizar la reserva. Inténtalo nuevamente.');
    }
  };

  return (
    <div className="booking-container">
      <h1>Reserva una Clase</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input 
            type="text" 
            placeholder="Nombre" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Materia:</label>
          <input 
            type="text" 
            placeholder="Materia" 
            value={materia} 
            onChange={(e) => setMateria(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Fecha:</label>
          <input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Reservar</button>
      </form>
    </div>
  );
}

export default BookingPage;