import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="hero-video"
      >
        <source src="/video/Video%20fondo.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Compromiso y Calidad en Cada Corte</h1>
          <p className="hero-subtitle">
            Somos tu socio de confianza. Entregamos carnes de primer nivel con un trato cercano, asegurando que tu negocio siempre cuente con lo mejor desde el origen hasta tu mesa.
          </p>
          <div className="hero-actions">
            <Link to="/contacto" className="btn btn-primary">
              Trabajemos Juntos <ChevronRight size={20} />
            </Link>
            <Link to="/catalogo" className="btn btn-outline">
              Ver Nuestros Productos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
