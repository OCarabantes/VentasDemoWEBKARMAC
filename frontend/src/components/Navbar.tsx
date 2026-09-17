import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Briefcase } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="navbar"
      style={{
        background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.94)',
        boxShadow: scrolled ? '0 8px 30px rgba(227, 27, 35, 0.08)' : '0 2px 10px rgba(0, 0, 0, 0.03)',
        borderBottom: '1px solid rgba(227, 27, 35, 0.12)',
        padding: scrolled ? '0.4rem 0' : '0.75rem 0',
      }}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <img
            src="/img/LOGO.png"
            alt="Frigorífico Karmac Logo"
            style={{
              height: scrolled ? '72px' : '88px',
              width: 'auto',
              display: 'block',
              transition: 'height 0.3s ease',
            }}
          />
        </Link>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" className={`navbar-link ${isActive('/') ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
            Inicio
          </Link>
          <Link to="/catalogo" className={`navbar-link ${isActive('/catalogo') ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
            Catálogo
          </Link>
          <Link to="/ventas" className={`navbar-link ${isActive('/ventas') ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
            Ventas
          </Link>
          <Link to="/instalaciones" className={`navbar-link ${isActive('/instalaciones') ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
            Instalaciones
          </Link>
          <Link to="/nosotros" className={`navbar-link ${isActive('/nosotros') ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
            Nosotros
          </Link>
          <Link
            to="/contacto"
            className={`navbar-link ${isActive('/contacto') ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </Link>
          <Link
            to="/intranet/login"
            className="btn btn-portal"
            onClick={() => setIsOpen(false)}
            title="Acceso Intranet"
          >
            <Briefcase size={14} /> Intranet
          </Link>
        </div>

        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
