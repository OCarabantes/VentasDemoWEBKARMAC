import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Briefcase } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <img src="/img/LOGO.png" alt="Frigorífico Karmac Logo" style={{ height: '96px', width: 'auto', display: 'block' }} />
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
            <Briefcase size={16} /> Intranet
          </Link>
        </div>

        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
