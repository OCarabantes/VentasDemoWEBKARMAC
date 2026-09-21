import React from 'react';
import { Link } from 'react-router-dom';
import { Snowflake, ShieldCheck, MapPin, Award, Building } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

function FacilitySection({
  badge,
  title,
  description,
  features,
  imageUrl,
  imageAlt,
  reverse = false,
  delay = 0,
}: {
  badge: string;
  title: string;
  description: string;
  features: { icon: React.ReactNode; text: string }[];
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean;
  delay?: number;
}) {
  const textReveal = useScrollReveal({ direction: reverse ? 'right' : 'left', delay });
  const imageReveal = useScrollReveal({ direction: reverse ? 'left' : 'right', delay: delay + 100 });

  return (
    <div
      className="about-grid"
      style={{
        marginBottom: '5rem',
        alignItems: 'center',
        direction: reverse ? 'rtl' : 'ltr',
      }}
    >
      <div ref={textReveal.ref} style={{ ...textReveal.style, direction: 'ltr' }} className="about-content">
        <div
          style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, rgba(160, 35, 42, 0.1), rgba(212, 160, 85, 0.1))',
            color: 'var(--color-primary)',
            fontWeight: 700,
            padding: '0.4rem 1rem',
            borderRadius: '6px',
            fontSize: '0.8rem',
            marginBottom: '0.85rem',
            letterSpacing: '0.5px',
          }}
        >
          {badge}
        </div>
        <h2 className="section-title" style={{ color: 'var(--color-text)', fontSize: '2rem' }}>
          {title}
        </h2>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
          {description}
        </p>
        <div className="about-features">
          {features.map((f, i) => (
            <div key={i} className="about-feature" style={{ color: 'var(--color-text)' }}>
              {f.icon}
              <span>{f.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div
        ref={imageReveal.ref}
        style={{
          ...imageReveal.style,
          direction: 'ltr',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 16px 40px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.5s ease',
        }}
        className="about-image"
      >
        <img
          src={imageUrl}
          alt={imageAlt}
          style={{ width: '100%', height: '380px', objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}

export default function FacilitiesPage() {
  const headerReveal = useScrollReveal({ direction: 'up' });
  const bannerReveal = useScrollReveal({ direction: 'up', delay: 100 });

  return (
    <div style={{ paddingTop: '4rem', paddingBottom: '4rem', background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)' }}>
      <div className="container">
        {/* Header */}
        <div
          ref={headerReveal.ref}
          style={{ ...headerReveal.style, textAlign: 'center', marginBottom: '4rem' }}
          className="section-heading text-center"
        >
          <h1 className="section-title">Nuestras Instalaciones y Planta Frigorífica</h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Contamos con más de 30 años de infraestructura especializada, tecnología de punta y certificaciones de inocuidad para abastecer al mercado nacional e internacional.
          </p>
        </div>

        {/* 1. Planta de Producción Lautaro */}
        <FacilitySection
          badge="PROCESAMIENTO Y FAENA"
          title="Planta de Producción Lautaro (+13.000 m²)"
          description="Ubicada estratégicamente en la Región de La Araucanía (Camino Pillanlelbún Lote LA5 N° 1B3, Lautaro), nuestra planta principal cuenta con más de 13.000 m² construidos dedicados al desposte, procesamiento, envasado al vacío y almacenamiento congelado bajo estándares HACCP y BRCGS."
          features={[
            { icon: <Snowflake className="about-feature-icon" size={22} />, text: 'Cámaras frigoríficas de alta capacidad con monitoreo térmico 24/7' },
            { icon: <ShieldCheck className="about-feature-icon" size={22} />, text: 'Faena e inocuidad certificada para exportación mundial' },
            { icon: <Award className="about-feature-icon" size={22} />, text: 'Líneas de desposte automatizado y empaque termosellado' },
          ]}
          imageUrl="/img/karmacPlanta.png"
          imageAlt="Planta de Producción Lautaro de más de 13.000 m2"
        />

        {/* 2. Distribuidora Cordillera */}
        <FacilitySection
          badge="CENTRO DE LOGÍSTICA Y DESPACHO"
          title="Distribuidora Cordillera (Quilicura)"
          description="Ubicado en Cordillera 451, Quilicura, Santiago. Nuestro centro logístico principal gestiona el flujo de distribución rápida hacia supermercados, cadenas HORECA, carnicerías y distribuidores de todo Chile."
          features={[
            { icon: <MapPin className="about-feature-icon" size={22} />, text: 'Flotas de camiones refrigerados con control GPS de temperatura' },
            { icon: <ShieldCheck className="about-feature-icon" size={22} />, text: 'Despacho garantizado sin romper la cadena de frío' },
          ]}
          imageUrl="/img/DistribuidoraKarmac.png"
          imageAlt="Distribuidora Cordillera Quilicura"
          reverse
          delay={50}
        />

        {/* 3. Oficina Central */}
        <FacilitySection
          badge="CASA MATRIZ Y ADMINISTRACIÓN"
          title="Oficina Central (Edificio 577, Ciudad Empresarial)"
          description="Ubicada en Av. Del Valle Sur 577 Of. 602, Huechuraba, Santiago. Desde aquí opera nuestra gerencia comercial, equipo de exportaciones, atención a clientes y administración corporativa."
          features={[
            { icon: <Building className="about-feature-icon" size={22} />, text: 'Atención a clientes corporativos e instituciones' },
            { icon: <Award className="about-feature-icon" size={22} />, text: 'Gestión de negocios internacionales y comercio exterior' },
          ]}
          imageUrl="/img/Ciudad%20empresarial.png"
          imageAlt="Oficina Central Edificio 577 Ciudad Empresarial Huechuraba"
          delay={100}
        />

        {/* 4. Banner de Cobertura Nacional */}
        <div
          ref={bannerReveal.ref}
          style={{
            ...bannerReveal.style,
            background: 'linear-gradient(135deg, #ffffff 0%, #fef2f2 100%)',
            borderRadius: '20px',
            padding: '3.5rem',
            color: '#0f172a',
            marginTop: '2rem',
            border: '1px solid rgba(227, 27, 35, 0.15)',
            boxShadow: '0 20px 40px rgba(227, 27, 35, 0.06)',
          }}
        >
          <div className="about-grid" style={{ alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', color: '#0f172a', fontFamily: 'var(--font-display)' }}>
                Presencia Operacional y Cobertura Nacional
              </h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Con la sinergia entre nuestra Casa Matriz en Huechuraba, la Distribuidora Cordillera en Quilicura y la Planta de Producción de más de 13.000 m² en Lautaro, garantizamos continuidad operacional y entregas puntuales a lo largo de todo Chile.
              </p>
              <Link to="/contacto" className="btn btn-primary" style={{ padding: '0.9rem 2rem' }}>
                Ir a Contacto ↗
              </Link>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img
                src="/img/TerritorioChileConUbicacionesDeEmpresas.png"
                alt="Mapa de presencia operacional Karmac Chile"
                style={{ maxHeight: '360px', width: 'auto', margin: '0 auto', borderRadius: '12px' }}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
