import React from 'react';
import '../assets/styles/BlogPage.css';

function BlogPage() {
  return (
    <div className="blog-container">
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
      <main>
        <section className="math-section">
          <div className="image-side left-side"></div>
          <div className="content">
            <h2>Matemáticas</h2>
            <p>Contenido relacionado con matemáticas...</p>
          </div>
          <div className="image-side right-side"></div>
        </section>
        <section className="physics-section">
          <div className="image-side left-side"></div>
          <div className="content">
            <h2>Física</h2>
            <p>Contenido relacionado con física...</p>
          </div>
          <div className="image-side right-side"></div>
        </section>
        <section className="slider-section">
          <div className="slider">
            <div className="slide"><img src="../assets/images/header.jpg" alt="Imagen 1" /></div>
            <div className="slide"><img src="../assets/images/login-image.jpg" alt="Imagen 2" /></div>
            <div className="slide"><img src="../assets/images/joshua-stannard.jpg" alt="Imagen 3" /></div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Tu Empresa de Clases Particulares. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default BlogPage;