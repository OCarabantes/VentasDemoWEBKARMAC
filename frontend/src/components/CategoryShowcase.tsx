import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface CategoryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  tag: string;
}

const categories: CategoryItem[] = [
  {
    id: 'vacuno',
    title: 'Cortes de Vacuno',
    subtitle: 'Lomo Vetado, Entraña, Picana & Asiento',
    image: '/img/categories/cat-vacuno.jpg',
    link: '/catalogo?categoria=vacuno#catalog-products-section',
    tag: 'Angus & Wagyu',
  },
  {
    id: 'cerdo',
    title: 'Cerdo Seleccionado',
    subtitle: 'Baby Ribs BBQ, Lomo, Lomito & Malaya',
    image: '/img/categories/cat-cerdo.jpg',
    link: '/catalogo?categoria=cerdo#catalog-products-section',
    tag: 'Cortes Tiernos',
  },
  {
    id: 'salmon',
    title: 'Salmón & Pescados',
    subtitle: 'Medallones 100g y Trozos Calibrados',
    image: '/img/categories/cat-salmon.jpg',
    link: '/catalogo?categoria=salmon#catalog-products-section',
    tag: 'Pesca Austral',
  },
  {
    id: 'hamburguesas',
    title: 'Hamburguesas & QSR',
    subtitle: 'Medallones Especiales y Molidas Mayoristas',
    image: '/img/categories/cat-hamburguesas.jpg',
    link: '/catalogo?categoria=elaborados#catalog-products-section',
    tag: 'Co-Manufacturing',
  },
];

export default function CategoryShowcase() {
  const headingReveal = useScrollReveal({ direction: 'up' });
  const card0Reveal = useScrollReveal({ delay: 0, direction: 'up' });
  const card1Reveal = useScrollReveal({ delay: 100, direction: 'up' });
  const card2Reveal = useScrollReveal({ delay: 200, direction: 'up' });
  const card3Reveal = useScrollReveal({ delay: 300, direction: 'up' });
  const cardReveals = [card0Reveal, card1Reveal, card2Reveal, card3Reveal];

  return (
    <section
      style={{
        padding: '5rem 0 3.5rem',
        background: '#ffffff',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          ref={headingReveal.ref}
          style={{
            ...headingReveal.style,
            textAlign: 'center',
            marginBottom: '3rem',
          }}
        >
          {/* Eyebrow badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--color-primary)',
              fontSize: '0.78rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '0.65rem',
            }}
          >
            <Sparkles size={15} />
            Líneas de Producto
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display, 'Playfair Display', Georgia, serif)",
              fontSize: 'clamp(2.2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.02em',
              margin: '0 0 0.5rem',
            }}
          >
            Conoce Nuestra Línea de Productos
          </h2>
          <p
            style={{
              color: '#64748b',
              fontSize: '1.05rem',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Fabricamos para marcas de terceros y producimos bajo nuestra propia marca: cortes seleccionados y elaborados cárnicos con rigurosos estándares de inocuidad, terneza y calibración.
          </p>
        </div>

        {/* 4-Column Category Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {categories.map((cat, idx) => (
            <div
              key={cat.id}
              ref={cardReveals[idx].ref}
              style={cardReveals[idx].style}
            >
              <Link
                to={cat.link}
                style={{
                  position: 'relative',
                  display: 'block',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  aspectRatio: '3 / 4',
                  minHeight: '440px',
                  boxShadow: '0 8px 24px rgba(15, 23, 42, 0.08)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  textDecoration: 'none',
                }}
                className="group category-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 24px 48px rgba(15, 23, 42, 0.16)';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1.08)';
                const btn = e.currentTarget.querySelector('.category-btn') as HTMLElement;
                if (btn) {
                  btn.style.backgroundColor = 'var(--color-primary)';
                  btn.style.color = '#ffffff';
                  btn.style.borderColor = 'var(--color-primary)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(15, 23, 42, 0.08)';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1)';
                const btn = e.currentTarget.querySelector('.category-btn') as HTMLElement;
                if (btn) {
                  btn.style.backgroundColor = '#ffffff';
                  btn.style.color = '#0f172a';
                  btn.style.borderColor = 'transparent';
                }
              }}
            >
              {/* Background Image */}
              <img
                src={cat.image}
                alt={cat.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />

              {/* Tag / Badge at top */}
              <div
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  left: '1.25rem',
                  background: 'rgba(15, 23, 42, 0.75)',
                  backdropFilter: 'blur(8px)',
                  color: '#ffffff',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '99px',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                }}
              >
                {cat.tag}
              </div>

              {/* Dark Gradient Overlay for Readability */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(15, 23, 42, 0.92) 0%, rgba(15, 23, 42, 0.5) 45%, rgba(15, 23, 42, 0.08) 75%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '2rem 1.5rem',
                  color: 'white',
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display, 'Playfair Display', Georgia, serif)",
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    lineHeight: 1.2,
                    marginBottom: '0.35rem',
                    color: '#ffffff',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {cat.title}
                </h3>

                <p
                  style={{
                    color: '#cbd5e1',
                    fontSize: '0.85rem',
                    lineHeight: 1.4,
                    marginBottom: '1.25rem',
                  }}
                >
                  {cat.subtitle}
                </p>

                {/* White Action Button */}
                <div>
                  <span
                    className="category-btn"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      background: '#ffffff',
                      color: '#0f172a',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      padding: '0.65rem 1.35rem',
                      borderRadius: '4px',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                      transition: 'all 0.3s ease',
                      border: '1px solid transparent',
                    }}
                  >
                    Ver Cortes <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
