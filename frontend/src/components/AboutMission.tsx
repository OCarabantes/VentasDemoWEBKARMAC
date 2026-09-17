import React from 'react';
import { ShieldCheck, Snowflake } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AboutMission() {
  const textReveal = useScrollReveal({ direction: 'left' });
  const imageReveal = useScrollReveal({ direction: 'right', delay: 150 });

  return (
    <section id="nosotros" className="about">
      <div id="instalaciones"></div>
      <div className="container">
        <div className="about-grid">
          <div ref={textReveal.ref} style={textReveal.style} className="about-content">
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(160, 35, 42, 0.15)',
                color: '#ef6b6b',
                padding: '0.35rem 0.9rem',
                borderRadius: '99px',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.5px',
                textTransform: 'uppercase' as const,
                marginBottom: '1rem',
              }}
            >
              Nuestra Esencia
            </div>
            <h2 className="section-title" style={{ color: 'white' }}>Nuestra Planta y Misión</h2>
            <p>
              Somos un frigorífico comprometido con la excelencia. Nuestra misión es entregar carnes de primera calidad al mercado mayorista, asegurando la inocuidad y la trazabilidad en cada etapa del proceso.
            </p>
            <p>
              Operamos bajo los más estrictos estándares de la industria, garantizando que cada corte que llega a su negocio preserve su frescura, sabor y propiedades nutricionales.
            </p>

            <div className="about-features" style={{ marginTop: 'var(--spacing-md)' }}>
              <div className="about-feature">
                <Snowflake className="about-feature-icon" size={22} />
                <span>Estándares de refrigeración de última generación</span>
              </div>
              <div className="about-feature">
                <ShieldCheck className="about-feature-icon" size={22} />
                <span>Faena controlada y certificada sanitariamente</span>
              </div>
            </div>
          </div>

          <div ref={imageReveal.ref} style={imageReveal.style} className="about-image">
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?auto=format&fit=crop&w=800&q=80"
              alt="Planta Frigorífica Karmac"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
