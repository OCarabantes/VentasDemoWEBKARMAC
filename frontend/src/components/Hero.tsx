import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Flame, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="hero hero-burger">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
      >
        <source src="/video/burgerEnCoccion.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay hero-overlay-burger"></div>

      <div className="container" style={{ position: 'relative', zIndex: 2, padding: '3.25rem 1.5rem 3.5rem' }}>
        <div className="hero-content" style={{ maxWidth: '780px' }}>

          {/* Main Title */}
          <h1
            className="hero-title"
            style={{
              fontSize: 'clamp(2.1rem, 4vw, 3.5rem)',
              lineHeight: 1.12,
              marginBottom: '0.85rem',
              fontWeight: 900,
              letterSpacing: '-0.025em',
            }}
          >
            El socio cárnico <br />
            <span
              style={{
                color: '#fde047',
                background: 'linear-gradient(135deg, #ffffff 0%, #fde047 50%, #f59e0b 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 4px 25px rgba(253, 224, 71, 0.35))',
              }}
            >
              detrás de tu marca.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="hero-subtitle"
            style={{
              fontSize: 'clamp(1rem, 1.35vw, 1.2rem)',
              lineHeight: 1.6,
              color: '#f1f5f9',
              maxWidth: '680px',
              marginBottom: '1.75rem',
              textShadow: '0 2px 10px rgba(0,0,0,0.6)',
              fontWeight: 500,
            }}
          >
            Maquila cárnica a tu medida: tú pones la marca, nosotros la calidad.
          </p>

          {/* Action Buttons */}
          <div className="hero-actions" style={{ marginBottom: '2rem' }}>
            <Link
              to="/contacto"
              className="btn btn-primary"
              style={{
                padding: '0.9rem 2rem',
                fontSize: '1rem',
                fontWeight: 800,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                boxShadow: '0 8px 20px rgba(227, 27, 35, 0.45)',
                background: 'linear-gradient(135deg, #e31b23 0%, #b91c1c 100%)',
              }}
            >
              <Flame size={19} />
              Cotizar Maquila para tu Marca
              <ChevronRight size={19} />
            </Link>
            <Link
              to="/catalogo"
              className="btn btn-outline"
              style={{
                padding: '0.9rem 1.85rem',
                fontSize: '1rem',
                fontWeight: 700,
                borderColor: 'rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(8px)',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
              }}
            >
              Ver Catálogo Completo
            </Link>
          </div>

          {/* Credibility / Social Proof Stats Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap',
              paddingTop: '1.15rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.15)',
              fontSize: '0.88rem',
              color: '#cbd5e1',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <CheckCircle2 size={17} style={{ color: '#4ade80' }} />
              <span>Más de <strong>+1.700.000</strong> elaborados cárnicos</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <CheckCircle2 size={17} style={{ color: '#4ade80' }} />
              <span><strong>100%</strong> Carne Seleccionada</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <CheckCircle2 size={17} style={{ color: '#4ade80' }} />
              <span>Recetas Confidenciales & Exclusivas</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

