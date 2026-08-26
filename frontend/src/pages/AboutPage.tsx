import React, { useState } from 'react';
import { 
  Globe, 
  ShieldCheck, 
  Flame, 
  Factory, 
  PackageCheck, 
  TrendingUp, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface Destination {
  id: string;
  country: string;
  flag: string;
  region: string;
  focus: string;
  compliance: string;
  volume: string;
}

const exportDestinations: Destination[] = [
  {
    id: 'peru',
    country: 'Perú',
    flag: '🇵🇪',
    region: 'Latinoamérica',
    focus: 'Cortes primarios envasados al vacío y canal Foodservice',
    compliance: 'Certificación Sanitaria SENASA / SAG Chile',
    volume: 'Abastecimiento continuo semanal'
  },
  {
    id: 'colombia',
    country: 'Colombia',
    flag: '🇨🇴',
    region: 'Latinoamérica',
    focus: 'Porcionados a medida y Co-manufacturing para franquicias QSR',
    compliance: 'Protocolo de Inocuidad INVIMA',
    volume: 'Envíos programados de alta escala'
  },
  {
    id: 'ecuador',
    country: 'Ecuador',
    flag: '🇪🇨',
    region: 'Latinoamérica',
    focus: 'Productos procesados de vacuno y cerdo congelado',
    compliance: 'Habilitación Sanitaria AGROCALIDAD',
    volume: 'Contenedores consolidados refrigerados'
  },
  {
    id: 'costarica',
    country: 'Costa Rica',
    flag: '🇨🇷',
    region: 'Centroamérica',
    focus: 'Formatos retail y distribución mayorista especializada',
    compliance: 'Standard SENASA Costa Rica',
    volume: 'Línea de envasado al vacío directo'
  },
  {
    id: 'china',
    country: 'China',
    flag: '🇨🇳',
    region: 'Asia-Pacífico',
    focus: 'Cortes industriales congelados, grasa cárnica y subproductos',
    compliance: 'Registro GACC (General Administration of Customs China)',
    volume: 'Exportación masiva de alto tonelaje'
  },
  {
    id: 'korea',
    country: 'Corea del Sur',
    flag: '🇰🇷',
    region: 'Asia-Pacífico',
    focus: 'Cortes premium con estrictos controles de marmoleo y frescura',
    compliance: 'Acreditación APQA (Animal and Plant Quarantine Agency)',
    volume: 'Cadenas de frío ultra-monitoreadas'
  },
  {
    id: 'cuba',
    country: 'Cuba',
    flag: '🇨🇺',
    region: 'Caribe',
    focus: 'Abastecimiento institucional y programas de proteína de alta calidad',
    compliance: 'Certificación Veterinaria de Exportación',
    volume: 'Despachos marítimos periódicos'
  }
];

export default function AboutPage() {
  const [selectedDestination, setSelectedDestination] = useState<Destination>(exportDestinations[0]);

  const scrollToCapabilities = () => {
    const element = document.getElementById('capacidades');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--color-bg-light)', color: 'var(--color-text)' }}>
      
      {/* 1. HERO INTRO (Above the Fold) */}
      <section 
        style={{
          position: 'relative',
          padding: '6rem 0 5rem',
          backgroundImage: `linear-gradient(rgba(18, 20, 24, 0.88), rgba(18, 20, 24, 0.85)), url('/img/karmacPlanta.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          overflow: 'hidden'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '850px' }}>
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                backgroundColor: 'rgba(139, 30, 30, 0.85)', 
                padding: '0.4rem 1.1rem', 
                borderRadius: '99px', 
                fontSize: '0.85rem', 
                fontWeight: '700', 
                letterSpacing: '0.5px',
                marginBottom: '1.5rem',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <Award size={16} color="white" />
              LIDERAZGO Y CALIDAD EN PROCESAMIENTO CÁRNICO GLOBAL
            </div>
            
            <h1 
              style={{ 
                fontSize: 'clamp(2.5rem, 4.5vw, 4.2rem)', 
                fontWeight: 900, 
                lineHeight: 1.1, 
                marginBottom: '1.5rem',
                color: 'white'
              }}
            >
              KARMAC: De la Región al Mundo
            </h1>

            <p 
              style={{ 
                fontSize: '1.35rem', 
                fontWeight: 600, 
                color: '#f1f5f9', 
                marginBottom: '1.25rem',
                fontStyle: 'italic'
              }}
            >
              "Excelencia cárnica que conecta los mejores orígenes con el mundo."
            </p>

            <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: '1.7', marginBottom: '2.5rem', maxWidth: '780px' }}>
              En Frigorífico KARMAC combinamos más de 30 años de tradición procesadora con tecnología industrial de última generación en nuestra planta certificada de más de 13.000 m². Impulsados por un equipo humano de excelencia, elaboramos soluciones cárnicas a medida y abastecemos con rigurosa inocuidad tanto a los principales gigantes globales del QSR como a exigentes mercados internacionales en América y Asia.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={scrollToCapabilities} className="btn btn-primary" style={{ padding: '0.85rem 1.8rem', fontSize: '1rem' }}>
                Conoce Nuestras Capacidades <ChevronRight size={18} />
              </button>
              
              <a 
                href="/contacto" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline"
                style={{ padding: '0.85rem 1.8rem', fontSize: '1rem' }}
              >
                Contacto Internacional <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KEY METRICS COUNTER (Interactive Stat Strip) */}
      <section style={{ backgroundColor: 'var(--color-primary-dark)', color: 'white', padding: '2.5rem 0', borderBottom: '4px solid var(--color-primary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.8rem', fontWeight: 900, color: 'white', lineHeight: 1 }}>+30 Million</div>
              <div style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.5rem', color: '#f8fafc', fontWeight: 600 }}>
                Kg Procesados Anualmente
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.8rem', fontWeight: 900, color: 'white', lineHeight: 1 }}>7+</div>
              <div style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.5rem', color: '#f8fafc', fontWeight: 600 }}>
                Países de Exportación Directa
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.8rem', fontWeight: 900, color: 'white', lineHeight: 1 }}>100%</div>
              <div style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.5rem', color: '#f8fafc', fontWeight: 600 }}>
                Procesos HACCP & BRCGS
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.8rem', fontWeight: 900, color: 'white', lineHeight: 1 }}>Top Tier</div>
              <div style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.5rem', color: '#f8fafc', fontWeight: 600 }}>
                Co-Manufacturer QSR Global
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE GLOBAL REACH MODULE */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--color-bg-dark)', color: 'white' }}>
        <div className="container">
          <div className="section-heading text-center" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="badge-pill" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white', margin: '0 auto 1rem' }}>
              <Globe size={16} /> COBERTURA INTERNACIONAL
            </div>
            <h2 className="section-title" style={{ color: 'white' }}>Red Global de Comercio y Exportación</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', color: '#cbd5e1' }}>
              Nuestra cadena de frío ininterrumpida y certificaciones sanitarias nos permiten conectar los mejores cortes sudamericanos con mercados estratégicos en América y Asia.
            </p>
          </div>

          {/* Interactive Selector */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '3rem', alignItems: 'center' }}>
            {/* Country List Chips */}
            <div>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.5px' }}>
                Selecciona un destino de exportación:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {exportDestinations.map((dest) => (
                  <div
                    key={dest.id}
                    className={`country-chip ${selectedDestination.id === dest.id ? 'active' : ''}`}
                    onClick={() => setSelectedDestination(dest)}
                  >
                    <span style={{ fontSize: '1.4rem' }}>{dest.flag}</span>
                    <span style={{ flexGrow: 1 }}>{dest.country}</span>
                    <span style={{ fontSize: '0.75rem', opacity: 0.8, background: 'rgba(0,0,0,0.2)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                      {dest.region}
                    </span>
                    <ChevronRight size={16} />
                  </div>
                ))}
              </div>
            </div>

            {/* Destination Detail Card */}
            <div 
              style={{ 
                background: 'linear-gradient(145deg, #1e232a, #16191e)', 
                borderRadius: '16px', 
                padding: '2.5rem', 
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ fontSize: '3rem' }}>{selectedDestination.flag}</span>
                  <div>
                    <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'white', margin: 0 }}>
                      {selectedDestination.country}
                    </h3>
                    <span style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.9rem' }}>
                      Mercado de Exportación Activo
                    </span>
                  </div>
                </div>
                <Globe size={36} color="rgba(255,255,255,0.2)" />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <div style={{ color: '#94a3b8', fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.25rem' }}>
                    Enfoque de Producto & Servicio:
                  </div>
                  <div style={{ color: 'white', fontSize: '1.05rem', fontWeight: 600 }}>
                    {selectedDestination.focus}
                  </div>
                </div>

                <div>
                  <div style={{ color: '#94a3b8', fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.25rem' }}>
                    Normativa & Inocuidad Sanitaria:
                  </div>
                  <div style={{ color: '#60a5fa', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <ShieldCheck size={16} /> {selectedDestination.compliance}
                  </div>
                </div>

                <div>
                  <div style={{ color: '#94a3b8', fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.25rem' }}>
                    Capacidad Logística:
                  </div>
                  <div style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>
                    {selectedDestination.volume}
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <a 
                  href="/contacto" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary" 
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Solicitar Cotización para {selectedDestination.country} <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE CAPABILITIES — Ganadero / Ranch Edition */}
      <section id="capacidades" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#0d0c09' }}>

        {/* ── INTRO FULL-BLEED BANNER ── */}
        <div
          style={{
            position: 'relative',
            height: '420px',
            backgroundImage: `linear-gradient(to right, rgba(8,6,3,0.95) 40%, rgba(8,6,3,0.4) 100%), url('/img/rebañoVacunos.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div className="container">
            <div style={{ maxWidth: '600px' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                backgroundColor: 'rgba(180, 120, 40, 0.2)',
                border: '1px solid rgba(180, 120, 40, 0.5)',
                color: '#d4a055',
                padding: '0.35rem 1rem', borderRadius: '99px',
                fontSize: '0.78rem', fontWeight: 800, letterSpacing: '1.5px',
                textTransform: 'uppercase', marginBottom: '1.25rem',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#d4a055', display: 'inline-block' }} />
                DEL CAMPO A TU MESA — ORIGEN GARANTIZADO
              </div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: '1rem' }}>
                Nuestras Capacidades<br />
                <span style={{ color: '#d4a055' }}>Industriales &amp; Ganaderas</span>
              </h2>
              <p style={{ color: '#b0a898', fontSize: '1.05rem', lineHeight: '1.7' }}>
                Desde los campos de Argentina, Uruguay y Brasil hasta tu operación HORECA o franquicia QSR. Cada corte que procesamos lleva décadas de expertise ganadero y certificación internacional.
              </p>
            </div>
          </div>
          {/* Decorative diagonal fade */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px', background: 'linear-gradient(to bottom, transparent, #0d0c09)' }} />
        </div>

        {/* ── CAPABILITY 1: FULL IMAGE LEFT ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '400px' }}>
          <div style={{
            backgroundImage: `url('/img/vacunoPastando.png')`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            position: 'relative',
          }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 60%, #0d0c09 100%)' }} />
            <div style={{
              position: 'absolute', bottom: '2rem', left: '2rem',
              background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '0.5rem 1rem', borderRadius: '8px', color: 'white', fontSize: '0.8rem',
            }}>
              📍 Origen: Argentina · Uruguay · Paraguay · Brasil
            </div>
          </div>
          <div style={{ padding: '3.5rem 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ color: '#d4a055', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ display: 'inline-block', width: '28px', height: '2px', background: '#d4a055' }} /> CAPACIDAD 01
            </div>
            <h3 style={{ fontSize: '1.7rem', fontWeight: 900, color: 'white', marginBottom: '1rem', lineHeight: 1.2 }}>
              Abastecimiento &amp;<br />Origen Premium
            </h3>
            <p style={{ color: '#9e9587', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '1.5rem' }}>
              Seleccionamos el ganado más ternero de las pampas sudamericanas, garantizando razas de alto marmoleo (Angus, Hereford), bienestar animal certificado y cadena de frío ininterrumpida desde el campo hasta nuestra planta.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {[
                { label: 'Razas Seleccionadas', val: 'Angus · Hereford' },
                { label: 'Trazabilidad', val: '100% desde origen' },
                { label: 'Temperatura cadena', val: '0°C – 4°C' },
                { label: 'Países de origen', val: 'AR · UY · PY · BR' },
              ].map(({ label, val }) => (
                <div key={label} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '0.75rem' }}>
                  <div style={{ color: '#64584a', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.25rem' }}>{label}</div>
                  <div style={{ color: '#e5ddd0', fontSize: '0.85rem', fontWeight: 700 }}>{val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CAPABILITY 2: IMAGE RIGHT ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '400px' }}>
          <div style={{ padding: '3.5rem 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#111009' }}>
            <div style={{ color: '#d4a055', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ display: 'inline-block', width: '28px', height: '2px', background: '#d4a055' }} /> CAPACIDAD 02
            </div>
            <h3 style={{ fontSize: '1.7rem', fontWeight: 900, color: 'white', marginBottom: '1rem', lineHeight: 1.2 }}>
              Co-Manufacturing<br />&amp; Maquila QSR
            </h3>
            <p style={{ color: '#9e9587', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '1.5rem' }}>
              Producimos bajo especificación exacta para las franquicias más exigentes del mundo. Hamburguesas, medallones y porcionados a medida con control de gramaje, porcentaje de grasa y temperatura de proceso certificados lote a lote.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {['Burger King®', "Carl's Jr.®", 'Agrosuper®', 'Formatos Custom'].map(tag => (
                <span key={tag} style={{
                  padding: '0.4rem 0.9rem', borderRadius: '99px',
                  border: '1px solid rgba(212, 160, 85, 0.4)',
                  color: '#d4a055', fontSize: '0.8rem', fontWeight: 700,
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div style={{
            backgroundImage: `linear-gradient(to left, rgba(8,6,3,0.1) 0%, rgba(17,16,9,0.6) 100%), url('/img/karmacPlanta.png')`,
            backgroundSize: 'cover', backgroundPosition: 'center',
          }} />
        </div>

        {/* ── CAPABILITIES 3 & 4: CARD ROW ── */}
        <div style={{ backgroundColor: '#0d0c09', padding: '4rem 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>

              {/* Card 3 */}
              <div style={{
                position: 'relative', borderRadius: '16px', overflow: 'hidden',
                border: '1px solid rgba(212,160,85,0.15)', minHeight: '320px',
                backgroundImage: `linear-gradient(to bottom, rgba(13,12,9,0.2) 0%, rgba(13,12,9,0.92) 60%), url('/img/rebañoVacunos.png')`,
                backgroundSize: 'cover', backgroundPosition: 'center top',
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                padding: '2rem',
              }}>
                <div style={{ color: '#d4a055', fontWeight: 800, fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>CAPACIDAD 03</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 900, color: 'white', marginBottom: '0.75rem', lineHeight: 1.2 }}>
                  Cortes &amp; Envasado<br />de Alta Calidad
                </h3>
                <p style={{ color: '#9e9587', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                  Líneas de desposte de precisión, envasado termosellado al vacío y congelado I.Q.F. a –40°C. Cada presentación diseñada para retail, HORECA e institucional.
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {['Al Vacío', 'I.Q.F. –40°C', 'Retail Ready', 'Foodservice'].map(t => (
                    <span key={t} style={{ padding: '0.25rem 0.65rem', borderRadius: '4px', background: 'rgba(212,160,85,0.12)', color: '#d4a055', fontSize: '0.72rem', fontWeight: 700 }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Card 4 */}
              <div style={{
                borderRadius: '16px', border: '1px solid rgba(212,160,85,0.15)',
                background: 'linear-gradient(145deg, #141209, #1a170e)',
                padding: '2.25rem', display: 'flex', flexDirection: 'column',
              }}>
                <div style={{ color: '#d4a055', fontWeight: 800, fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>CAPACIDAD 04</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 900, color: 'white', marginBottom: '0.75rem', lineHeight: 1.2 }}>
                  Inocuidad &amp;<br />Certificación Internacional
                </h3>
                <p style={{ color: '#9e9587', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Laboratorio microbiológico in-situ, auditorías permanentes y habilitación sanitaria para 7 mercados de exportación. Cada lote es trazable y auditable.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                  {[
                    { label: 'BRCGS Global Standard', pct: 100 },
                    { label: 'HACCP & BPM', pct: 100 },
                    { label: 'Habilitación SAG Export', pct: 100 },
                    { label: 'Cumplimiento INVIMA / SENASA', pct: 97 },
                  ].map(({ label, pct }) => (
                    <div key={label}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#b0a898', marginBottom: '0.3rem' }}>
                        <span>{label}</span>
                        <span style={{ color: '#d4a055', fontWeight: 700 }}>{pct}%</span>
                      </div>
                      <div style={{ height: '4px', background: 'rgba(255,255,255,0.06)', borderRadius: '99px', overflow: 'hidden' }}>
                        <div style={{ width: `${pct}%`, height: '100%', background: 'linear-gradient(90deg, #7a4a10, #d4a055)', borderRadius: '99px' }} />
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="/contacto" target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    color: '#d4a055', fontWeight: 700, fontSize: '0.85rem',
                    textDecoration: 'none', borderTop: '1px solid rgba(212,160,85,0.15)',
                    paddingTop: '1rem', marginTop: 'auto',
                    transition: 'color 0.2s',
                  }}
                >
                  Solicitar documentación técnica <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM CTA ── */}
        <div style={{
          backgroundImage: `linear-gradient(rgba(10,8,4,0.88), rgba(10,8,4,0.88)), url('/img/rebañoVacunos.png')`,
          backgroundSize: 'cover', backgroundPosition: 'center 60%',
          padding: '4rem 0', textAlign: 'center',
          borderTop: '1px solid rgba(212,160,85,0.12)',
        }}>
          <div className="container">
            <p style={{ color: '#d4a055', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              ¿LISTO PARA TRABAJAR JUNTOS?
            </p>
            <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 900, color: 'white', marginBottom: '1rem' }}>
              Desde el origen hasta tu operación.<br />Hablemos de volumen y especificaciones.
            </h3>
            <a
              href="/contacto" target="_blank" rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '0.9rem 2.5rem', fontSize: '1rem' }}
            >
              Contactar Equipo Comercial <ArrowRight size={16} />
            </a>
          </div>
        </div>

      </section>

    </div>
  );
}

