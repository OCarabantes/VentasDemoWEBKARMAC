import React from 'react';
import { Snowflake, ShieldCheck, MapPin, Award, Building } from 'lucide-react';

export default function FacilitiesPage() {
  return (
    <div style={{ paddingTop: '4rem', paddingBottom: '4rem', backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-heading text-center" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="section-title">Nuestras Instalaciones y Planta Frigorífica</h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Contamos con más de 30 años de infraestructura especializada, tecnología de punta y certificaciones de inocuidad para abastecer al mercado nacional e internacional.
          </p>
        </div>

        {/* 1. Planta de Producción Lautaro */}
        <div className="about-grid" style={{ marginBottom: '5rem', alignItems: 'center' }}>
          <div className="about-content">
            <div style={{ display: 'inline-block', backgroundColor: 'rgba(139, 30, 30, 0.1)', color: 'var(--color-primary)', fontWeight: '700', padding: '0.35rem 0.85rem', borderRadius: '4px', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
              PROCESAMIENTO Y FAENA
            </div>
            <h2 className="section-title" style={{ color: 'var(--color-text)', fontSize: '2rem' }}>
              Planta de Producción Lautaro (+13.000 m²)
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              Ubicada estratégicamente en la Región de La Araucanía (Camino Pillanlelbún Lote LA5 N° 1B3, Lautaro), nuestra planta principal cuenta con más de 13.000 m² construidos dedicados al desposte, procesamiento, envasado al vacío y almacenamiento congelado bajo estándares HACCP y BRCGS.
            </p>
            <div className="about-features">
              <div className="about-feature" style={{ color: 'var(--color-text)' }}>
                <Snowflake className="about-feature-icon" size={22} />
                <span>Cámaras frigoríficas de alta capacidad con monitoreo térmico 24/7</span>
              </div>
              <div className="about-feature" style={{ color: 'var(--color-text)' }}>
                <ShieldCheck className="about-feature-icon" size={22} />
                <span>Faena e inocuidad certificada para exportación mundial</span>
              </div>
              <div className="about-feature" style={{ color: 'var(--color-text)' }}>
                <Award className="about-feature-icon" size={22} />
                <span>Líneas de desposte automatizado y empaque termosellado</span>
              </div>
            </div>
          </div>
          <div className="about-image" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 12px 24px rgba(0,0,0,0.12)' }}>
            <img 
              src="/img/karmacPlanta.png" 
              alt="Planta de Producción Lautaro de más de 13.000 m2" 
              style={{ width: '100%', height: '380px', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* 2. Distribuidora Cordillera */}
        <div className="about-grid" style={{ marginBottom: '5rem', alignItems: 'center' }}>
          <div className="about-image" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 12px 24px rgba(0,0,0,0.12)' }}>
            <img 
              src="/img/DistribuidoraKarmac.png" 
              alt="Distribuidora Cordillera Quilicura" 
              style={{ width: '100%', height: '380px', objectFit: 'cover' }}
            />
          </div>
          <div className="about-content">
            <div style={{ display: 'inline-block', backgroundColor: 'rgba(139, 30, 30, 0.1)', color: 'var(--color-primary)', fontWeight: '700', padding: '0.35rem 0.85rem', borderRadius: '4px', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
              CENTRO DE LOGÍSTICA Y DESPACHO
            </div>
            <h2 className="section-title" style={{ color: 'var(--color-text)', fontSize: '2rem' }}>
              Distribuidora Cordillera (Quilicura)
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              Ubicado en Cordillera 451, Quilicura, Santiago. Nuestro centro logístico principal gestiona el flujo de distribución rápida hacia supermercados, cadenas HORECA, carnicerías y distribuidores de todo Chile.
            </p>
            <div className="about-features">
              <div className="about-feature" style={{ color: 'var(--color-text)' }}>
                <MapPin className="about-feature-icon" size={22} />
                <span>Flotas de camiones refrigerados con control GPS de temperatura</span>
              </div>
              <div className="about-feature" style={{ color: 'var(--color-text)' }}>
                <ShieldCheck className="about-feature-icon" size={22} />
                <span>Despacho garantizado sin romper la cadena de frío</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Oficina Central (Ciudad Empresarial) */}
        <div className="about-grid" style={{ marginBottom: '5rem', alignItems: 'center' }}>
          <div className="about-content">
            <div style={{ display: 'inline-block', backgroundColor: 'rgba(139, 30, 30, 0.1)', color: 'var(--color-primary)', fontWeight: '700', padding: '0.35rem 0.85rem', borderRadius: '4px', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
              CASA MATRIZ Y ADMINISTRACIÓN
            </div>
            <h2 className="section-title" style={{ color: 'var(--color-text)', fontSize: '2rem' }}>
              Oficina Central (Edificio 577, Ciudad Empresarial)
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              Ubicada en Av. Del Valle Sur 577 Of. 602, Huechuraba, Santiago. Desde aquí opera nuestra gerencia comercial, equipo de exportaciones, atención a clientes y administración corporativa.
            </p>
            <div className="about-features">
              <div className="about-feature" style={{ color: 'var(--color-text)' }}>
                <Building className="about-feature-icon" size={22} />
                <span>Atención a clientes corporativos e instituciones</span>
              </div>
              <div className="about-feature" style={{ color: 'var(--color-text)' }}>
                <Award className="about-feature-icon" size={22} />
                <span>Gestión de negocios internacionales y comercio exterior</span>
              </div>
            </div>
          </div>
          <div className="about-image" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 12px 24px rgba(0,0,0,0.12)' }}>
            <img 
              src="/img/Ciudad%20empresarial.png" 
              alt="Oficina Central Edificio 577 Ciudad Empresarial Huechuraba" 
              style={{ width: '100%', height: '380px', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* 4. Banner de Cobertura Nacional */}
        <div style={{ backgroundColor: 'var(--color-bg-dark)', borderRadius: '16px', padding: '3rem', color: 'white', marginTop: '2rem' }}>
          <div className="about-grid" style={{ alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', color: 'white' }}>
                Presencia Operacional y Cobertura Nacional
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Con la sinergia entre nuestra Casa Matriz en Huechuraba, la Distribuidora Cordillera en Quilicura y la Planta de Producción de más de 13.000 m² en Lautaro, garantizamos continuidad operacional y entregas puntuales a lo largo de todo Chile.
              </p>
              <a href="/contacto" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Contactar a Ventas ↗
              </a>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img 
                src="/img/TerritorioChileConUbicacionesDeEmpresas.png" 
                alt="Mapa de presencia operacional Karmac Chile" 
                style={{ maxHeight: '360px', width: 'auto', margin: '0 auto', borderRadius: '8px' }}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
