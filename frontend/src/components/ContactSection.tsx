import React from 'react';
import { User, Phone, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contacto" className="contact">
      <div id="cotizar"></div>
      <div className="container">
        <div className="section-heading text-center" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Cotiza tu Pedido</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 0.5rem', fontWeight: 700, fontSize: '1.25rem' }}>
            Llegamos a todo el país. Exportamos al mundo.
          </p>
          <p className="section-subtitle" style={{ margin: '0 auto var(--spacing-lg)' }}>
            Completa el formulario o contacta directamente a nuestro equipo comercial para gestionar tu abastecimiento.
          </p>
        </div>

        <div className="contact-grid">
          <div>
            <div className="contact-info-card">
              <User className="contact-info-icon" size={24} />
              <div>
                <h4 style={{ marginBottom: '0.25rem', color: 'var(--color-text)' }}>Roberto García - Gerente de Exportaciones</h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Especialista en mercados internacionales y certificación BCR.</p>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.875rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Phone size={14}/> +56 9 8765 4321</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Mail size={14}/> export@karmac.cl</span>
                </div>
              </div>
            </div>
            
            <div className="contact-info-card">
              <User className="contact-info-icon" size={24} />
              <div>
                <h4 style={{ marginBottom: '0.25rem', color: 'var(--color-text)' }}>Camila Soto - Ventas HORECA</h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Atención personalizada para hoteles, restaurantes y casinos.</p>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.875rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Phone size={14}/> +56 9 1122 3344</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Mail size={14}/> horeca@karmac.cl</span>
                </div>
              </div>
            </div>

            <div className="contact-info-card">
              <User className="contact-info-icon" size={24} />
              <div>
                <h4 style={{ marginBottom: '0.25rem', color: 'var(--color-text)' }}>Supermercado Ventas</h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Canal comercial para minimarkets, supermercados y cadenas.</p>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.875rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Phone size={14}/> +56 9 3344 5566</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Mail size={14}/> supermercados@karmac.cl</span>
                </div>
              </div>
            </div>

            <div className="contact-info-card">
              <Phone className="contact-info-icon" size={24} />
              <div>
                <h4 style={{ marginBottom: '0.25rem', color: 'var(--color-text)' }}>Canal Mayorista Nacional (WhatsApp)</h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Cotizaciones rápidas y disponibilidad de stock en tiempo real.</p>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.875rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Phone size={14}/> +56 9 5566 7788</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Nombre / Razón Social</label>
                <input type="text" id="name" className="form-control" placeholder="Ej: Restaurante El Buen Sabor SPA" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="rut">RUT de Empresa</label>
                <input type="text" id="rut" className="form-control" placeholder="Ej: 76.xxx.xxx-x" />
              </div>
              <div className="form-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-sm)' }}>
                <div>
                  <label className="form-label" htmlFor="phone">Teléfono</label>
                  <input type="tel" id="phone" className="form-control" placeholder="+56 9..." />
                </div>
                <div>
                  <label className="form-label" htmlFor="type">Tipo de Cliente</label>
                  <select id="type" className="form-control">
                    <option>Restaurante / HORECA</option>
                    <option>Supermercado / Minimarket / Cadena</option>
                    <option>Carnicería</option>
                    <option>Distribuidor Mayorista</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="message">Mensaje / Requerimiento</label>
                <textarea id="message" className="form-control" placeholder="Indique los cortes, volumen estimado y frecuencia de compra..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: 'var(--spacing-sm)' }}>
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
