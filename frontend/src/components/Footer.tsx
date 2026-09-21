import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Footer() {
  const footerReveal = useScrollReveal({ direction: 'up', threshold: 0.05 });

  return (
    <footer className="footer">
      <div className="container">
        <div ref={footerReveal.ref} style={footerReveal.style} className="footer-grid">
          {/* Columna 1: Info Empresa */}
          <div>
            <div className="footer-brand" style={{ marginBottom: '1.5rem' }}>
              <Link to="/">
                <img src="/img/LOGO.png" alt="KARMAC 09-31" style={{ height: '100px', width: 'auto', display: 'block' }} />
              </Link>
            </div>
            <p className="footer-desc" style={{ lineHeight: '1.8' }}>
              Frigorífico Karmac es una empresa chilena, con más de 30 años de experiencia en la elaboración y procesamiento de productos cárnicos.
            </p>
          </div>

          {/* Columna 2: QUIENES SOMOS */}
          <div>
            <h4 className="footer-title">QUIENES SOMOS</h4>
            <ul className="footer-links">
              <li><Link to="/nosotros" className="footer-link">Nuestra Empresa</Link></li>
              <li><Link to="/nosotros" className="footer-link">Directorio</Link></li>
              <li><Link to="/nosotros" className="footer-link">Equipo comercial</Link></li>
              <li><Link to="/instalaciones" className="footer-link">Nuestra Planta</Link></li>
            </ul>
          </div>

          {/* Columna 3: MERCADOS */}
          <div>
            <h4 className="footer-title">MERCADOS</h4>
            <ul className="footer-links">
              <li><Link to="/catalogo" className="footer-link">Países de Exportación</Link></li>
              <li><Link to="/catalogo" className="footer-link">Clientes</Link></li>
              <li><Link to="/instalaciones" className="footer-link">Habilitaciones</Link></li>
              <li><Link to="/instalaciones" className="footer-link">Certificaciones: BCR</Link></li>
            </ul>
          </div>

          {/* Columna 4: CONTACTO */}
          <div>
            <h4 className="footer-title">CONTACTO</h4>
            <div className="footer-contact-info">
              {/* Casa Matriz */}
              <div className="contact-item">
                <div className="contact-heading">
                  <MapPin size={16} color="var(--color-primary)" />
                  <span>CASA MATRIZ</span>
                </div>
                <p>Av. Del Valle Sur 577 Of. 602, Huechuraba, Santiago - Chile.</p>
                <div className="contact-phone">
                  <Phone size={16} color="var(--color-primary)" />
                  <span>+56 2 24819500</span>
                </div>
              </div>

              {/* Planta de Producción */}
              <div className="contact-item">
                <div className="contact-heading">
                  <MapPin size={16} color="var(--color-primary)" />
                  <span>PLANTA DE PRODUCCIÓN</span>
                </div>
                <p>Camino Pillanlelbún Lote LA5 N° 1B3, Lautaro, La Araucanía - Chile.</p>
                <div className="contact-phone">
                  <Phone size={16} color="var(--color-primary)" />
                  <span>+56 45 2992880</span>
                </div>
              </div>

              {/* Centro de Distribución */}
              <div className="contact-item">
                <div className="contact-heading">
                  <MapPin size={16} color="var(--color-primary)" />
                  <span>CENTRO DE DISTRIBUCIÓN</span>
                </div>
                <p>Cordillera 451, Quilicura, Santiago - Chile.</p>
                <div className="contact-phone">
                  <Phone size={16} color="var(--color-primary)" />
                  <span>+56 2 2414 4400</span>
                </div>
              </div>

              <div style={{ marginTop: '0.5rem' }}>
                <Link to="/contacto" style={{ color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', transition: 'all 0.3s ease' }}>
                  Ir a Formulario de Contacto ↗
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Frigorífico Karmac. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
