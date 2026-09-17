import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Flame,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Clock,
  ArrowRight,
  Percent,
  CheckCircle2,
  Shuffle,
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export interface DealProduct {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  discount: number; // between 5 and 33
  originalPrice: number;
  offerPrice: number;
  unit: string;
  image: string;
  badge: string;
  savings: number;
  link: string;
}

const DEALS_DATA: DealProduct[] = [
  {
    id: 'deal-1',
    name: 'Lomo Vetado Angus Premium',
    category: 'Vacuno',
    categorySlug: 'vacuno',
    discount: 33, // Max 33%
    originalPrice: 18990,
    offerPrice: 12720,
    unit: 'kg',
    image: '/productos/vacuno/LOMO VETADO.png',
    badge: '🔥 Súper Oferta Semanal',
    savings: 6270,
    link: '/catalogo?categoria=vacuno&ficha=lomo-vetado',
  },
  {
    id: 'deal-2',
    name: 'Baby Ribs de Cerdo BBQ',
    category: 'Cerdo',
    categorySlug: 'cerdo',
    discount: 28,
    originalPrice: 11990,
    offerPrice: 8630,
    unit: 'kg',
    image: '/productos/cerdo/BabyRibs.png',
    badge: 'Línea Parrillera',
    savings: 3360,
    link: '/catalogo?categoria=cerdo&ficha=baby-ribs',
  },
  {
    id: 'deal-3',
    name: 'Entraña Fina de Vacuno',
    category: 'Vacuno',
    categorySlug: 'vacuno',
    discount: 22,
    originalPrice: 21500,
    offerPrice: 16770,
    unit: 'kg',
    image: '/productos/vacuno/ENTRAÑA.png',
    badge: 'Corte Estrella',
    savings: 4730,
    link: '/catalogo?categoria=vacuno&ficha=entraña',
  },
  {
    id: 'deal-4',
    name: 'Medallones Salmón Austral 100g',
    category: 'Salmón',
    categorySlug: 'salmon',
    discount: 30,
    originalPrice: 15800,
    offerPrice: 11060,
    unit: 'caja',
    image: '/productos/salmon/Medallas Salmon 100g uds.png',
    badge: 'Congelado IQF',
    savings: 4740,
    link: '/catalogo?categoria=salmon&ficha=medalla-salmon',
  },
  {
    id: 'deal-5',
    name: 'Hamburguesas Vacuno 135g (Caja 24u)',
    category: 'Elaborados',
    categorySlug: 'elaborados',
    discount: 18,
    originalPrice: 24900,
    offerPrice: 20410,
    unit: 'caja',
    image: '/productos/vacuno/HAMBURGUESA 135G.png',
    badge: 'Foodservice & QSR',
    savings: 4490,
    link: '/catalogo?categoria=elaborados&ficha=hamburguesa-135',
  },
  {
    id: 'deal-6',
    name: 'Punta de Picana Vacuno',
    category: 'Vacuno',
    categorySlug: 'vacuno',
    discount: 15,
    originalPrice: 13990,
    offerPrice: 11890,
    unit: 'kg',
    image: '/productos/vacuno/PUNTA DE PICANA.png',
    badge: 'Ideal al Espiedo',
    savings: 2100,
    link: '/catalogo?categoria=vacuno&ficha=punta-picana',
  },
  {
    id: 'deal-7',
    name: 'Pechuga de Pollo Deshuesada',
    category: 'Pollo y Aves',
    categorySlug: 'ave',
    discount: 12,
    originalPrice: 5800,
    offerPrice: 5100,
    unit: 'kg',
    image: '/img/categories/cat-corte-pollo.jpg',
    badge: 'Mayorista HORECA',
    savings: 700,
    link: '/catalogo?categoria=ave',
  },
  {
    id: 'deal-8',
    name: 'Lomo Liso Vacuno Exportación',
    category: 'Vacuno',
    categorySlug: 'vacuno',
    discount: 5, // Min 5%
    originalPrice: 16500,
    offerPrice: 15675,
    unit: 'kg',
    image: '/productos/vacuno/Lomo Liso.png',
    badge: 'Corte Tradicional',
    savings: 825,
    link: '/catalogo?categoria=vacuno&ficha=lomo-liso',
  },
];

export default function DealsRoulette() {
  const headingReveal = useScrollReveal({ direction: 'up' });
  const sliderRef = useRef<HTMLDivElement>(null);

  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedDealId, setSelectedDealId] = useState<string | null>(null);
  const [spinToast, setSpinToast] = useState<{ name: string; discount: number } | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Countdown timer simulation for promo urgency
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 28, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Autoplay carousel rotation
  useEffect(() => {
    if (isHovered || isSpinning) return;

    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        const maxScroll = scrollWidth - clientWidth;
        const cardWidth = 320;

        if (scrollLeft >= maxScroll - 20) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    }, 3800);

    return () => clearInterval(interval);
  }, [isHovered, isSpinning]);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 340;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Fun Roulette Spin Interaction
  const spinRoulette = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setSpinToast(null);

    let speed = 70;
    let steps = 0;
    const totalSteps = 24 + Math.floor(Math.random() * 8);

    const spinInterval = setInterval(() => {
      steps++;
      const randomIdx = Math.floor(Math.random() * DEALS_DATA.length);
      const currentDeal = DEALS_DATA[randomIdx];
      setSelectedDealId(currentDeal.id);

      // Scroll to that card
      const targetCard = document.getElementById(`deal-card-${currentDeal.id}`);
      if (targetCard && sliderRef.current) {
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }

      if (steps >= totalSteps) {
        clearInterval(spinInterval);
        setIsSpinning(false);
        const finalDeal = DEALS_DATA[randomIdx];
        setSelectedDealId(finalDeal.id);
        setSpinToast({ name: finalDeal.name, discount: finalDeal.discount });

        setTimeout(() => {
          setSpinToast(null);
        }, 6000);
      }
    }, speed);
  };

  const formatCLP = (amount: number) => {
    return '$' + amount.toLocaleString('es-CL');
  };

  return (
    <section
      style={{
        padding: '4.5rem 0 4.5rem',
        background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Subtle Accent Glows */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(227, 27, 35, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div
          ref={headingReveal.ref}
          style={{
            ...headingReveal.style,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '2.5rem',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--color-primary)',
                fontSize: '0.8rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '0.5rem',
              }}
            >
              <Flame size={18} />
              Oportunidades de Compra Mayorista
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display, 'Playfair Display', Georgia, serif)",
                fontSize: 'clamp(2rem, 3.8vw, 2.75rem)',
                fontWeight: 800,
                color: '#0f172a',
                letterSpacing: '-0.02em',
                margin: '0 0 0.5rem',
                lineHeight: 1.15,
              }}
            >
              Ruleta de Productos en Oferta
            </h2>
            <p
              style={{
                color: '#64748b',
                fontSize: '1rem',
                maxWidth: '620px',
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              Aprovecha descuentos exclusivos desde un <strong>5%</strong> hasta un <strong>33%</strong> en cortes y productos seleccionados para optimizar la rentabilidad de tu negocio.
            </p>
          </div>

          {/* Right Header Action: Timer & Spin Button & Arrows */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
            {/* Urgent Countdown Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.55rem 0.95rem',
                background: '#fff1f2',
                border: '1px solid #fecdd3',
                borderRadius: '999px',
                color: '#be123c',
                fontSize: '0.82rem',
                fontWeight: 700,
              }}
            >
              <Clock size={15} />
              <span>Vence en:</span>
              <span
                style={{
                  fontFamily: 'monospace',
                  background: '#be123c',
                  color: '#ffffff',
                  padding: '0.15rem 0.45rem',
                  borderRadius: '4px',
                  fontWeight: 800,
                }}
              >
                {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>

            {/* Interactive Roulette Spin Button */}
            <button
              onClick={spinRoulette}
              disabled={isSpinning}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.65rem 1.25rem',
                background: isSpinning
                  ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
                  : 'linear-gradient(135deg, #e31b23 0%, #b91c1c 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '999px',
                fontSize: '0.85rem',
                fontWeight: 800,
                letterSpacing: '0.5px',
                cursor: isSpinning ? 'not-allowed' : 'pointer',
                boxShadow: isSpinning
                  ? '0 0 20px rgba(245, 158, 11, 0.6)'
                  : '0 4px 15px rgba(227, 27, 35, 0.3)',
                transition: 'all 0.3s ease',
                transform: isSpinning ? 'scale(0.98)' : 'scale(1)',
              }}
              title="Haz clic para que la ruleta elija una oferta al azar"
            >
              <Shuffle size={16} />
              {isSpinning ? 'Girando ruleta...' : '¡Girar Ruleta!'}
            </button>

            {/* Carousel Navigation Arrows */}
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              <button
                onClick={() => scroll('left')}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  border: '1px solid #e2e8f0',
                  background: '#ffffff',
                  color: '#0f172a',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#e31b23';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.borderColor = '#e31b23';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.color = '#0f172a';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
                aria-label="Anterior oferta"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={() => scroll('right')}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  border: '1px solid #e2e8f0',
                  background: '#ffffff',
                  color: '#0f172a',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#e31b23';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.borderColor = '#e31b23';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.color = '#0f172a';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
                aria-label="Siguiente oferta"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Spin Toast Notification */}
        {spinToast && (
          <div
            style={{
              marginBottom: '1.75rem',
              padding: '0.85rem 1.5rem',
              background: 'linear-gradient(90deg, #15803d 0%, #16a34a 100%)',
              color: '#ffffff',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 10px 25px rgba(22, 163, 74, 0.3)',
              animation: 'fadeIn 0.3s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Sparkles size={22} color="#fef08a" />
              <div>
                <strong>¡La Ruleta ha seleccionado una oferta para ti!</strong>
                <span style={{ marginLeft: '0.5rem', color: '#f0fdf4', fontSize: '0.95rem' }}>
                  {spinToast.name} con un <strong>{spinToast.discount}% de descuento</strong>.
                </span>
              </div>
            </div>
            <Link
              to="/contacto"
              style={{
                background: '#ffffff',
                color: '#15803d',
                padding: '0.45rem 1rem',
                borderRadius: '8px',
                fontWeight: 800,
                fontSize: '0.82rem',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Cotizar ahora
            </Link>
          </div>
        )}

        {/* Roulette / Carousel Track */}
        <div
          ref={sliderRef}
          style={{
            display: 'flex',
            gap: '1.25rem',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            paddingBottom: '1.25rem',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            scrollBehavior: 'smooth',
          }}
          className="no-scrollbar"
        >
          {DEALS_DATA.map(deal => {
            const isSelected = selectedDealId === deal.id;

            return (
              <div
                key={deal.id}
                id={`deal-card-${deal.id}`}
                style={{
                  flex: '0 0 310px',
                  scrollSnapAlign: 'start',
                  background: '#ffffff',
                  borderRadius: '16px',
                  border: isSelected
                    ? '3px solid #e31b23'
                    : '1px solid #e2e8f0',
                  boxShadow: isSelected
                    ? '0 18px 40px rgba(227, 27, 35, 0.28)'
                    : '0 4px 20px rgba(15, 23, 42, 0.06)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  transform: isSelected ? 'scale(1.03) translateY(-4px)' : 'none',
                }}
                className="deal-roulette-card"
                onMouseEnter={e => {
                  if (!isSelected) {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 16px 32px rgba(15, 23, 42, 0.12)';
                    e.currentTarget.style.borderColor = 'rgba(227, 27, 35, 0.4)';
                  }
                }}
                onMouseLeave={e => {
                  if (!isSelected) {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(15, 23, 42, 0.06)';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                  }
                }}
              >
                {/* Top Floating Badges */}
                <div
                  style={{
                    position: 'absolute',
                    top: '0.85rem',
                    left: '0.85rem',
                    right: '0.85rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    zIndex: 2,
                  }}
                >
                  {/* Category Pill */}
                  <span
                    style={{
                      background: 'rgba(15, 23, 42, 0.75)',
                      backdropFilter: 'blur(6px)',
                      color: '#ffffff',
                      fontSize: '0.72rem',
                      fontWeight: 750,
                      padding: '0.28rem 0.65rem',
                      borderRadius: '999px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {deal.category}
                  </span>

                  {/* Discount Badge */}
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #e31b23 0%, #b91c1c 100%)',
                      color: '#ffffff',
                      fontSize: '0.82rem',
                      fontWeight: 900,
                      padding: '0.35rem 0.75rem',
                      borderRadius: '999px',
                      boxShadow: '0 4px 10px rgba(227, 27, 35, 0.35)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                    }}
                  >
                    <Percent size={12} strokeWidth={3} />
                    -{deal.discount}% OFF
                  </span>
                </div>

                {/* Product Image Stage */}
                <div
                  style={{
                    height: '190px',
                    background: 'radial-gradient(circle, #ffffff 40%, #f1f5f9 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1.25rem',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={deal.image}
                    alt={deal.name}
                    style={{
                      maxHeight: '150px',
                      maxWidth: '90%',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 10px 15px rgba(0, 0, 0, 0.12))',
                      transition: 'transform 0.4s ease',
                    }}
                    className="deal-product-img"
                  />
                  {isSelected && (
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        border: '2px dashed #e31b23',
                        borderRadius: '12px',
                        margin: '6px',
                        pointerEvents: 'none',
                      }}
                    />
                  )}
                </div>

                {/* Product Body Details */}
                <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      color: '#e31b23',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {deal.badge}
                  </span>

                  <h3
                    style={{
                      fontSize: '1.12rem',
                      fontWeight: 800,
                      color: '#0f172a',
                      lineHeight: 1.25,
                      margin: '0 0 0.75rem',
                      minHeight: '44px',
                    }}
                  >
                    {deal.name}
                  </h3>

                  {/* Pricing Box */}
                  <div
                    style={{
                      background: '#f8fafc',
                      borderRadius: '10px',
                      padding: '0.75rem 0.9rem',
                      marginBottom: '1rem',
                      border: '1px solid #f1f5f9',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        justifyContent: 'space-between',
                        marginBottom: '0.2rem',
                      }}
                    >
                      <span style={{ fontSize: '0.8rem', color: '#94a3b8', textDecoration: 'line-through' }}>
                        {formatCLP(deal.originalPrice)} /{deal.unit}
                      </span>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          color: '#15803d',
                          fontWeight: 800,
                          background: '#dcfce7',
                          padding: '0.15rem 0.45rem',
                          borderRadius: '4px',
                        }}
                      >
                        Ahorro {formatCLP(deal.savings)}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
                      <span
                        style={{
                          fontSize: '1.45rem',
                          fontWeight: 900,
                          color: '#e31b23',
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {formatCLP(deal.offerPrice)}
                      </span>
                      <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600 }}>
                        /{deal.unit} + IVA
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
                    <Link
                      to={deal.link}
                      style={{
                        flex: 1,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.35rem',
                        padding: '0.65rem 0.75rem',
                        background: '#0f172a',
                        color: '#ffffff',
                        borderRadius: '8px',
                        fontSize: '0.78rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = '#e31b23';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = '#0f172a';
                      }}
                    >
                      Ver Ficha <ArrowRight size={13} />
                    </Link>

                    <Link
                      to={`/contacto?producto=${encodeURIComponent(deal.name)}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0.65rem 0.85rem',
                        background: '#fee2e2',
                        color: '#b91c1c',
                        borderRadius: '8px',
                        fontSize: '0.78rem',
                        fontWeight: 800,
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                      }}
                      title="Cotizar precio por volumen"
                      onMouseEnter={e => {
                        e.currentTarget.style.background = '#e31b23';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = '#fee2e2';
                        e.currentTarget.style.color = '#b91c1c';
                      }}
                    >
                      Cotizar
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Bottom Navigation Dots & Info */}
        <div
          style={{
            marginTop: '1.75rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '1rem',
            borderTop: '1px solid #f1f5f9',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.85rem' }}>
            <CheckCircle2 size={16} color="#16a34a" />
            <span>Condiciones mayoristas válidas para pedidos con despacho en RM y regiones.</span>
          </div>

          <Link
            to="/catalogo"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#e31b23',
              fontWeight: 800,
              fontSize: '0.88rem',
              textDecoration: 'none',
            }}
          >
            Explorar todas las promociones en catálogo <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
