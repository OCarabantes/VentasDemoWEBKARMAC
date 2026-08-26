import React from 'react';
import Hero from '../components/Hero';
import ValueProps from '../components/ValueProps';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Building2, PhoneCall, HeartHandshake } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProps />
      
      {/* New Commitment Section */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--color-bg-dark)', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'linear-gradient(to right, rgba(18, 20, 24, 0.95) 0%, rgba(18, 20, 24, 0.6) 100%), url("/FondosDecorativos/CarneCortadaYalienada.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          zIndex: 0
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '650px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
              <HeartHandshake size={28} />
              <span style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Nuestra Promesa</span>
            </div>
            <h2 className="section-title" style={{ color: 'white', marginBottom: '1.5rem', fontSize: '2.5rem' }}>
              Cercanía que impulsa tu negocio
            </h2>
            <p style={{ color: '#e2e8f0', fontSize: '1.125rem', marginBottom: '2rem', lineHeight: 1.8 }}>
              Entendemos que detrás de cada pedido hay un restaurante, una carnicería o un negocio que depende de nosotros. En Frigorífico Karmac no solo entregamos los mejores cortes; construimos relaciones duraderas basadas en la confianza, la puntualidad y la atención personalizada.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
              <div style={{ borderLeft: '3px solid var(--color-primary)', paddingLeft: '1.5rem' }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Calidad de Origen</h4>
                <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>Seleccionamos y preparamos nuestra carne garantizando terneza, frescura y el mejor sabor en cada corte.</p>
              </div>
              <div style={{ borderLeft: '3px solid var(--color-primary)', paddingLeft: '1.5rem' }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Atención Directa</h4>
                <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>Un equipo comprometido en resolver tus requerimientos, adaptando cada pedido a la medida de tu emprendimiento.</p>
              </div>
            </div>
            <Link to="/contacto" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              Conversemos de tu Proyecto <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards for Non-linear Layout */}
      <section style={{ padding: '4rem 0', backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <div className="section-heading text-center" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">Explora Frigorífico Karmac</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Accede directamente a nuestras secciones principales.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <ShoppingBag size={40} color="var(--color-primary)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Catálogo de Cortes</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Revisa la oferta completa de vacuno, cerdo, aves y madurados.</p>
              <Link to="/catalogo" className="btn btn-outline" style={{ border: '1px solid var(--color-primary)', color: 'var(--color-primary)' }}>
                Ver Catálogo <ArrowRight size={16} />
              </Link>
            </div>

            <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <Building2 size={40} color="var(--color-primary)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Planta e Instalaciones</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Conoce nuestras centrales en Lautaro, Quilicura y Huechuraba.</p>
              <Link to="/instalaciones" className="btn btn-outline" style={{ border: '1px solid var(--color-primary)', color: 'var(--color-primary)' }}>
                Ver Instalaciones <ArrowRight size={16} />
              </Link>
            </div>

            <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <PhoneCall size={40} color="var(--color-primary)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Cotización y Contacto</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Ponte en contacto con nuestro equipo comercial directo.</p>
              <a href="/contacto" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Abrir Contacto <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
