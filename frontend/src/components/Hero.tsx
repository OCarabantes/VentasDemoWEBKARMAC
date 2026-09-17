import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Award } from 'lucide-react';

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
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(227, 27, 35, 0.35)',
              border: '1px solid rgba(227, 27, 35, 0.6)',
              padding: '0.45rem 1.2rem',
              borderRadius: '99px',
              fontSize: '0.82rem',
              fontWeight: 800,
              letterSpacing: '1px',
              textTransform: 'uppercase' as const,
              marginBottom: '1.5rem',
              backdropFilter: 'blur(12px)',
              color: '#ffffff',
              boxShadow: '0 4px 16px rgba(227, 27, 35, 0.3)',
              animation: 'fade-in-down 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both',
            }}
          >
            <Award size={16} />
            Más de 30 años de excelencia cárnica
          </div>

          <h1 className="hero-title">
            Compromiso y Calidad<br />
            <span style={{ color: '#fde047' }}>en Cada Corte</span>
          </h1>
          <p className="hero-subtitle">
            Somos tu socio de confianza. Entregamos carnes de primer nivel con un trato cercano,
            asegurando que tu negocio siempre cuente con lo mejor desde el origen hasta tu mesa.
          </p>
          <div className="hero-actions">
            <Link to="/contacto" className="btn btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '1.05rem' }}>
              Trabajemos Juntos <ChevronRight size={20} />
            </Link>
            <Link to="/catalogo" className="btn btn-outline" style={{ padding: '0.9rem 2rem', fontSize: '1.05rem' }}>
              Ver Nuestros Productos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
