import React from 'react';

const logos = [
  { src: '/img/LOGOBK.png',      alt: 'Burger King'    },
  { src: '/img/LOGOCARLS.png',   alt: "Carl's Jr"      },
  { src: '/img/LOGOAGROSUPER.png', alt: 'Agrosuper'    },
  { src: '/img/APUNTOLOGO.png',  alt: 'Carnes A Punto' },
  { src: '/img/LogoSAG.png',     alt: 'SAG Chile'      },
  { src: '/img/LogBRCGS.png',    alt: 'BRCGS'          },
];

// Render 3 identical sets → animation moves -33.333% = exactly 1 set
const sets = [...logos, ...logos, ...logos];

export default function PartnersStrip() {
  return (
    <section
      style={{
        background: '#ffffff',
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0',
        padding: '2.25rem 0',
        color: '#0f172a',
      }}
    >
      <div style={{ marginBottom: '1.25rem', textAlign: 'center' }}>
        <p
          style={{
            color: '#64748b',
            fontSize: '0.75rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '2.5px',
            margin: 0,
          }}
        >
          Partners Estratégicos &amp; Certificaciones de Calidad
        </p>
      </div>

      <div className="marquee-container">
        <div className="marquee-track">
          {sets.map((logo, i) => (
            <div className="marquee-item" key={i}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
