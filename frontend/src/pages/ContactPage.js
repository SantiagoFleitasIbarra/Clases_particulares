import React, { useState } from 'react';
import '../assets/styles/ContactPage.css';

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensaje enviado por ${name}.`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-container">
      <h1>Contacto</h1>
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
          <label>Email:</label>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Mensaje:</label>
          <textarea 
            placeholder="Tu mensaje" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ContactPage;