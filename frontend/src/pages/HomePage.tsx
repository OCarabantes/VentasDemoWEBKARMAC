import React from 'react';
import Hero from '../components/Hero';
import CategoryShowcase from '../components/CategoryShowcase';
import DealsRoulette from '../components/DealsRoulette';
import ValueProps from '../components/ValueProps';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Building2, PhoneCall, HeartHandshake } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function HomePage() {
  const promiseReveal = useScrollReveal({ direction: 'left' });
  const navHeadingReveal = useScrollReveal({ direction: 'up' });
  const card0Reveal = useScrollReveal({ delay: 0, direction: 'up' });
  const card1Reveal = useScrollReveal({ delay: 120, direction: 'up' });
  const card2Reveal = useScrollReveal({ delay: 240, direction: 'up' });
  const cardReveals = [card0Reveal, card1Reveal, card2Reveal];

  const navCards = [
    {
      icon: <ShoppingBag size={36} />,
      title: 'Catálogo de Cortes',
      desc: 'Revisa la oferta completa de vacuno, cerdo, aves y madurados.',
      link: '/catalogo',
      label: 'Ver Catálogo',
      external: false,
    },
    {
      icon: <Building2 size={36} />,
      title: 'Planta e Instalaciones',
      desc: 'Conoce nuestras centrales en Lautaro, Quilicura y Huechuraba.',
      link: '/instalaciones',
      label: 'Ver Instalaciones',
      external: false,
    },
    {
      icon: <PhoneCall size={36} />,
      title: 'Cotización y Contacto',
      desc: 'Ponte en contacto con nuestro equipo comercial directo.',
      link: '/contacto',
      label: 'Abrir Contacto',
      external: false,
    },
  ];

  return (
    <>
      <Hero />
      <CategoryShowcase />
      <DealsRoulette />
      <ValueProps />

      {/* Commitment Section — Parallax-like */}
      <section
        style={{
          padding: '7rem 0',
          position: 'relative',
          overflow: 'hidden',
          color: 'white',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'linear-gradient(to right, rgba(15, 23, 42, 0.86) 0%, rgba(15, 23, 42, 0.6) 60%, rgba(227, 27, 35, 0.35) 100%), url("/FondosDecorativos/CarneCortadaYalienada.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            zIndex: 0,
          }}
        ></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div ref={promiseReveal.ref} style={{ ...promiseReveal.style, maxWidth: '680px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fde047', marginBottom: '1rem' }}>
              <HeartHandshake size={26} />
              <span style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.85rem' }}>Nuestra Promesa</span>
            </div>
            <h2
              className="section-title"
              style={{
                color: 'white',
                marginBottom: '1.5rem',
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              }}
            >
              Cercanía que impulsa tu negocio
            </h2>
            <p style={{ color: '#e2e8f0', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: 1.8 }}>
              Entendemos que detrás de cada pedido hay un restaurante, una carnicería o un negocio que depende de nosotros.
              En Frigorífico Karmac no solo entregamos los mejores cortes; construimos relaciones duraderas basadas en la confianza,
              la puntualidad y la atención personalizada.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
              <div style={{ borderLeft: '3px solid #e31b23', paddingLeft: '1.5rem' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem', color: '#ffffff' }}>Calidad de Origen</h4>
                <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.6 }}>Seleccionamos y preparamos nuestra carne garantizando terneza, frescura y el mejor sabor en cada corte.</p>
              </div>
              <div style={{ borderLeft: '3px solid #e31b23', paddingLeft: '1.5rem' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem', color: '#ffffff' }}>Atención Directa</h4>
                <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.6 }}>Un equipo comprometido en resolver tus requerimientos, adaptando cada pedido a la medida de tu emprendimiento.</p>
              </div>
            </div>
            <Link
              to="/contacto"
              className="btn btn-primary"
              style={{ padding: '1rem 2.25rem', fontSize: '1.05rem' }}
            >
              Conversemos de tu Proyecto <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)' }}>
        <div className="container">
          <div
            ref={navHeadingReveal.ref}
            style={{ ...navHeadingReveal.style, textAlign: 'center', marginBottom: '3.5rem' }}
            className="section-heading text-center"
          >
            <h2 className="section-title">Explora Frigorífico Karmac</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Accede directamente a nuestras secciones principales.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {navCards.map((card, idx) => (
              <div
                key={idx}
                ref={cardReveals[idx].ref}
                style={{
                  ...cardReveals[idx].style,
                  background: 'white',
                  padding: '2.5rem 2rem',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  textAlign: 'center',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(227, 27, 35, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(227, 27, 35, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '72px',
                    height: '72px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, rgba(227, 27, 35, 0.08), rgba(217, 119, 6, 0.08))',
                    color: 'var(--color-primary)',
                    marginBottom: '1.25rem',
                  }}
                >
                  {card.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-text)' }}>
                  {card.title}
                </h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {card.desc}
                </p>
                {card.external ? (
                  <a href={card.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    {card.label} <ArrowRight size={16} />
                  </a>
                ) : (
                  <Link to={card.link} className="btn btn-outline product-action">
                    {card.label} <ArrowRight size={16} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
