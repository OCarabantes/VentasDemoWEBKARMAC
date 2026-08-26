import React from 'react';
import { ShieldCheck, Snowflake } from 'lucide-react';

export default function AboutMission() {
  return (
    <section id="nosotros" className="about">
      <div id="instalaciones"></div>
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title">Nuestra Planta y Misión</h2>
            <p>
              Somos un frigorífico comprometido con la excelencia. Nuestra misión es entregar carnes de primera calidad al mercado mayorista, asegurando la inocuidad y la trazabilidad en cada etapa del proceso.
            </p>
            <p>
              Operamos bajo los más estrictos estándares de la industria, garantizando que cada corte que llega a su negocio preserve su frescura, sabor y propiedades nutricionales.
            </p>
            
            <div className="about-features" style={{ marginTop: 'var(--spacing-md)' }}>
              <div className="about-feature">
                <Snowflake className="about-feature-icon" size={24} />
                <span>Estándares de refrigeración de última generación</span>
              </div>
              <div className="about-feature">
                <ShieldCheck className="about-feature-icon" size={24} />
                <span>Faena controlada y certificada sanitariamente</span>
              </div>
            </div>
          </div>
          
          <div className="about-image">
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
