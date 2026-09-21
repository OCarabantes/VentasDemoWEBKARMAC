import React from 'react';
import ContactSection from '../components/ContactSection';

export default function ContactPage() {
  return (
    <div className="contact-page-container">
      <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <ContactSection />
      </div>
      <footer style={{ textAlign: 'center', padding: '0.65rem 1rem', fontSize: '0.78rem', color: '#94a3b8', borderTop: '1px solid rgba(226, 232, 240, 0.8)' }}>
        © {new Date().getFullYear()} Frigorífico Karmac S.A. · Plantas en Lautaro, Huechuraba y Quilicura · Inocuidad y Calidad BRCGS
      </footer>
    </div>
  );
}
