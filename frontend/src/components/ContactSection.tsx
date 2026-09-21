import React, { useState } from 'react';
import { Phone, Mail, User, MapPin, Clock, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

export default function ContactSection() {
  const headingReveal = useScrollReveal({ direction: 'up' });
  const contentReveal = useScrollReveal({ direction: 'up', delay: 100 });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contacto" className="contact">
      <div id="cotizar"></div>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        
        {/* Compact Heading */}
        <div
          ref={headingReveal.ref}
          style={{ ...headingReveal.style, textAlign: 'center', marginBottom: '1.25rem' }}
          className="section-heading text-center"
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'rgba(227, 27, 35, 0.08)',
              color: 'var(--color-primary)',
              padding: '0.25rem 0.85rem',
              borderRadius: '99px',
              fontSize: '0.78rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '0.4rem',
            }}
          >
            <ShieldCheck size={14} />
            Atención Comercial Directa
          </div>
          <h2
            className="section-title"
            style={{
              fontSize: 'clamp(1.75rem, 2.5vw, 2.3rem)',
              margin: '0 0 0.35rem',
              fontWeight: 800,
              lineHeight: 1.15,
            }}
          >
            Cotiza tu Pedido o Maquila
          </h2>
          <p
            className="section-subtitle"
            style={{
              margin: '0 auto',
              fontSize: '0.92rem',
              color: '#64748b',
              maxWidth: '620px',
              lineHeight: 1.45,
            }}
          >
            Llegamos a todo Chile y exportamos al mundo. Contacta directamente al ejecutivo de tu área o envía tu solicitud.
          </p>
        </div>

        {/* 2-Column Compact Layout */}
        <div ref={contentReveal.ref} style={contentReveal.style} className="contact-compact-grid">
          
          {/* Left Column: Direct Commercial Channels (2x2 Grid) */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div className="contact-channels-grid">
              
              {/* 1. Exportaciones */}
              <div className="contact-mini-card">
                <div className="mini-card-icon">
                  <User size={18} />
                </div>
                <div style={{ flex: 1 }}>
                  <h4>Exportaciones & BRCGS</h4>
                  <p className="contact-person">Roberto García · Gerente</p>
                  <div className="contact-links">
                    <a href="tel:+56987654321"><Phone size={12} /> +56 9 8765 4321</a>
                    <a href="mailto:export@karmac.cl"><Mail size={12} /> export@karmac.cl</a>
                  </div>
                </div>
              </div>

              {/* 2. Ventas HORECA */}
              <div className="contact-mini-card">
                <div className="mini-card-icon">
                  <User size={18} />
                </div>
                <div style={{ flex: 1 }}>
                  <h4>Ventas HORECA & Foodservice</h4>
                  <p className="contact-person">Camila Soto · Ejecutiva</p>
                  <div className="contact-links">
                    <a href="tel:+56911223344"><Phone size={12} /> +56 9 1122 3344</a>
                    <a href="mailto:horeca@karmac.cl"><Mail size={12} /> horeca@karmac.cl</a>
                  </div>
                </div>
              </div>

              {/* 3. Retail & Supermercados */}
              <div className="contact-mini-card">
                <div className="mini-card-icon">
                  <User size={18} />
                </div>
                <div style={{ flex: 1 }}>
                  <h4>Supermercados & Cadenas</h4>
                  <p className="contact-person">Canal Retail & Minimarkets</p>
                  <div className="contact-links">
                    <a href="tel:+56933445566"><Phone size={12} /> +56 9 3344 5566</a>
                    <a href="mailto:supermercados@karmac.cl"><Mail size={12} /> supermercados@karmac.cl</a>
                  </div>
                </div>
              </div>

              {/* 4. WhatsApp Mayorista */}
              <div className="contact-mini-card highlight-wa">
                <div className="mini-card-icon-wa">
                  <WhatsAppIcon size={19} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.25rem' }}>
                    <h4>WhatsApp Mayorista</h4>
                    <span style={{ background: '#dcfce7', color: '#15803d', fontSize: '0.68rem', fontWeight: 800, padding: '0.1rem 0.4rem', borderRadius: '10px' }}>EN VIVO</span>
                  </div>
                  <p className="contact-person">Disponibilidad & Stock</p>
                  <div className="contact-links">
                    <a href="https://wa.me/56955667788" target="_blank" rel="noopener noreferrer" style={{ color: '#16a34a', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <WhatsAppIcon size={13} /> +56 9 5566 7788
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Plants & Operations Info Banner */}
            <div className="contact-facilities-banner">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <MapPin size={16} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                <span><strong>Plantas:</strong> Lautaro (IX Región) · Huechuraba · Quilicura</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <Clock size={16} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                <span>Lun a Vie: 08:30 - 18:00</span>
              </div>
            </div>
          </div>

          {/* Right Column: Compact Quotation Form */}
          <div className="contact-form-compact">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#0f172a', fontWeight: 800, fontSize: '0.95rem' }}>
                <Send size={15} style={{ color: 'var(--color-primary)' }} />
                <span>Formulario de Cotización</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Respuesta en menos de 24 hrs</span>
            </div>

            {submitted ? (
              <div
                style={{
                  background: '#f0fdf4',
                  border: '1px solid #bbf7d0',
                  color: '#15803d',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  textAlign: 'center',
                }}
              >
                <CheckCircle2 size={32} style={{ margin: '0 auto 0.5rem', color: '#16a34a' }} />
                <h4 style={{ fontWeight: 800, marginBottom: '0.25rem' }}>¡Solicitud enviada con éxito!</h4>
                <p style={{ fontSize: '0.85rem', color: '#166534' }}>Un ejecutivo comercial se contactará contigo a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row-2">
                  <div className="form-group-compact">
                    <label className="form-label-compact" htmlFor="name">Nombre / Razón Social *</label>
                    <input type="text" id="name" required className="form-control-compact" placeholder="Ej: Carnes Don Juan SpA" />
                  </div>
                  <div className="form-group-compact">
                    <label className="form-label-compact" htmlFor="rut">RUT Empresa</label>
                    <input type="text" id="rut" className="form-control-compact" placeholder="76.xxx.xxx-x" />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group-compact">
                    <label className="form-label-compact" htmlFor="phone">Teléfono / WhatsApp *</label>
                    <input type="tel" id="phone" required className="form-control-compact" placeholder="+56 9..." />
                  </div>
                  <div className="form-group-compact">
                    <label className="form-label-compact" htmlFor="email">Email Corporativo *</label>
                    <input type="email" id="email" required className="form-control-compact" placeholder="contacto@empresa.cl" />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group-compact">
                    <label className="form-label-compact" htmlFor="type">Tipo de Cliente</label>
                    <select id="type" className="form-control-compact">
                      <option>Restaurante / HORECA</option>
                      <option>Supermercado / Retail</option>
                      <option>Carnicería / Mayorista</option>
                      <option>Maquila (Marcas de Hamburguesas)</option>
                      <option>Exportación Internacional</option>
                    </select>
                  </div>
                  <div className="form-group-compact">
                    <label className="form-label-compact" htmlFor="volumen">Volumen Estimado</label>
                    <select id="volumen" className="form-control-compact">
                      <option>Mayor a 5.000 kg / mes</option>
                      <option>1.000 a 5.000 kg / mes</option>
                      <option>300 a 1.000 kg / mes</option>
                      <option>Pedido puntual de prueba</option>
                    </select>
                  </div>
                </div>

                <div className="form-group-compact">
                  <label className="form-label-compact" htmlFor="message">Requerimiento o Cortes de Interés</label>
                  <textarea
                    id="message"
                    rows={2}
                    className="form-control-compact"
                    style={{ resize: 'none' }}
                    placeholder="Indica cortes, gramajes, hamburguesas o frecuencia de entrega..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-submit-compact"
                >
                  <Send size={15} />
                  Enviar Solicitud de Cotización
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
