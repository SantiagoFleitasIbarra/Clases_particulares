import React from 'react';
import '../assets/styles/HomePage.css';
import backgroundImage from '../assets/images/daniel-olahh.jpg';

function HomePage() {
  return (
    <div className="home-container">
      <header className="header">
        <div className="container">
          <nav className="navbar">
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/booking">Reserva</a></li>
              <li><a href="/contact">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <section 
        className="hero" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Clases particulares</h1>
          <p>Texto.</p>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Tu Empresa de Clases Particulares. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;