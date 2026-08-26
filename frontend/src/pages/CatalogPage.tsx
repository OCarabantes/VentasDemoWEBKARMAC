import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Award, Beef, Boxes, CheckCircle2, CookingPot, Drumstick, Fish, Flame, FlameKindling, Leaf, Package, PiggyBank, Ruler, Search, Snowflake, Tag, Thermometer, Utensils, Weight, ZapIcon } from 'lucide-react';
import '../styles/catalog.css';

/* ─── DATA ──────────────────────────────────────────────────────────────── */

export interface Cut {
  id: string;
  name: string;
  img: string;
  desc: string;
  /** SVG hotspot position as % of the diagram box */
  x: number;
  y: number;
}

export interface AnimalCategory {
  id: string;
  label: string;
  emoji: string;
  diagramSrc: string; // placeholder SVG silhouette path (we draw inline)
  cuts: Cut[];
}

const categoryIcons: Record<string, React.ElementType> = {
  vacuno: Beef,
  cerdo: PiggyBank,
  ave: Drumstick,
  salmon: Fish,
  vegana: Leaf,
};

export const CATEGORIES: AnimalCategory[] = [
  {
    id: 'vacuno',
    label: 'Vacuno',
    emoji: '🐄',
    diagramSrc: 'vacuno',
    cuts: [
      { id: 'lomo-vetado', name: 'Lomo Vetado', img: '/productos/vacuno/LOMO VETADO.png', desc: 'Corte premium con infiltración de grasa, ideal para parrilla.', x: 46, y: 38 },
      { id: 'lomo-liso', name: 'Lomo Liso', img: '/productos/vacuno/Lomo Liso.png', desc: 'Corte magro de lomo, tierno y versátil.', x: 40, y: 42 },
      { id: 'entraña', name: 'Entraña', img: '/productos/vacuno/ENTRAÑA.png', desc: 'Corte fino del diafragma, jugoso y sabroso.', x: 52, y: 52 },
      { id: 'palanca', name: 'Palanca', img: '/productos/vacuno/PALANCA.png', desc: 'Corte plano de paleta, excelente para asar.', x: 28, y: 44 },
      { id: 'punta-picana', name: 'Punta de Picana', img: '/productos/vacuno/PUNTA DE PICANA.png', desc: 'Corte trasero de alta calidad, muy popular en Chile.', x: 72, y: 42 },
      { id: 'asiento', name: 'Asiento', img: '/productos/vacuno/ASIENTO.png', desc: 'Corte redondo del cuarto trasero, jugoso al horno.', x: 68, y: 55 },
      { id: 'asiento-picana', name: 'Asiento Picana', img: '/productos/vacuno/ASIENTO PICANA.png', desc: 'Variante de asiento con capa de picana.', x: 75, y: 50 },
      { id: 'huachalomo', name: 'Huachalomo', img: '/productos/vacuno/HUACHALOMO.png', desc: 'Corte del cuello y espalda, ideal para estofados.', x: 22, y: 35 },
      { id: 'abastero', name: 'Abastero', img: '/productos/vacuno/ABASTERO.png', desc: 'Corte musculoso del cuarto trasero.', x: 65, y: 62 },
      { id: 'osobuco', name: 'Osobuco', img: '/productos/vacuno/OSOBUCO.png', desc: 'Corte transversal de osobuco con médula, para guisos.', x: 80, y: 68 },
      { id: 'punta-paleta', name: 'Punta de Paleta', img: '/productos/vacuno/PUNTA PALETA.png', desc: 'Corte de paleta magro y sabroso.', x: 24, y: 52 },
      { id: 'tapa-barriga', name: 'Tapa Barriga', img: '/productos/vacuno/TAPA BARRIGA.png', desc: 'Corte de la zona abdominal, ideal marinado.', x: 55, y: 60 },
      { id: 'tapa-pecho', name: 'Tapa Pecho', img: '/productos/vacuno/TAPA PECHO.png', desc: 'Corte del pecho, clásico para puchero.', x: 35, y: 55 },
      { id: 'cazuela', name: 'Cazuela de Vacuno', img: '/productos/vacuno/CAZUELA DE VACUNO.png', desc: 'Corte con hueso para cazuela tradicional.', x: 42, y: 60 },
      { id: 'chuleta-vetada', name: 'Chuleta Vetada', img: '/productos/vacuno/CHULETA VETADA.png', desc: 'Chuleta con grasa entreverada, sabor intenso.', x: 48, y: 32 },
      { id: 'churrasco', name: 'Churrasco Laminado', img: '/productos/vacuno/CHURRASCO LAMINADO.png', desc: 'Láminas finas de vacuno para churrasco rápido.', x: 50, y: 46 },
      { id: 'molida', name: 'Molida de Vacuno', img: '/productos/vacuno/MOLIDA DE VACUNO  CONGELADO.png', desc: 'Carne molida congelada de alta calidad.', x: 58, y: 48 },
      { id: 'hamburguesa', name: 'Hamburguesa 135g', img: '/productos/vacuno/HAMBURGUESA 135G.png', desc: 'Medallón prensado de 135g, ideal para QSR.', x: 50, y: 70 },
    ],
  },
  {
    id: 'cerdo',
    label: 'Cerdo',
    emoji: '🐷',
    diagramSrc: 'cerdo',
    cuts: [
      { id: 'lomo-cerdo', name: 'Lomo de Cerdo', img: '/productos/cerdo/Lomo de Cerdo.png', desc: 'Corte magro del lomo de cerdo, tierno y versátil.', x: 46, y: 38 },
      { id: 'lomito', name: 'Lomito Cerdo', img: '/productos/cerdo/Lomito Cerdo.png', desc: 'El corte más tierno del cerdo, ideal a la plancha.', x: 52, y: 42 },
      { id: 'baby-ribs', name: 'Baby Ribs', img: '/productos/cerdo/BabyRibs.png', desc: 'Costillas baby back, perfectas para BBQ.', x: 40, y: 52 },
      { id: 'malaya', name: 'Malaya', img: '/productos/cerdo/Malaya.png', desc: 'Corte de la panza de cerdo, sabroso y jugoso.', x: 55, y: 58 },
    ],
  },
  {
    id: 'ave',
    label: 'Ave',
    emoji: '🍗',
    diagramSrc: 'ave',
    cuts: [
      { id: 'molida-ave', name: 'Molida de Ave', img: '/productos/Ave/Molida Ave.png', desc: 'Carne molida de ave, liviana y proteica.', x: 50, y: 50 },
    ],
  },
  {
    id: 'salmon',
    label: 'Salmón',
    emoji: '🐟',
    diagramSrc: 'salmon',
    cuts: [
      { id: 'medalla-salmon', name: 'Medallas Salmón 100g', img: '/productos/salmon/Medallas Salmon 100g uds.png', desc: 'Porciones premium de salmón de 100g cada una.', x: 40, y: 48 },
      { id: 'trozo-salmon', name: 'Trozo Salmón 120–180g', img: '/productos/salmon/Trozo Salmon 120g-180g.png', desc: 'Trozos de salmón ideales para Foodservice.', x: 60, y: 48 },
    ],
  },
  {
    id: 'vegana',
    label: 'Vegana',
    emoji: '🌱',
    diagramSrc: 'vegana',
    cuts: [
      { id: 'molida-vegana', name: 'Molida Vegana 250g/500g', img: '/productos/Vegana/Molida Vegana 250g y 500g.png', desc: 'Alternativa vegetal de alta proteína, textura similar a la carne.', x: 50, y: 50 },
    ],
  },
];

/* ─── ANIMAL SILHOUETTE DIAGRAMS (inline SVG) ───────────────────────────── */

function BeefSilhouette({ cuts, active, onHover }: {
  cuts: Cut[]; active: string | null; onHover: (id: string | null) => void;
}) {
  return (
    <svg viewBox="0 0 800 400" className="animal-svg" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="420" cy="210" rx="240" ry="120" fill="#3a2a1a" opacity="0.85" />
      {/* Head */}
      <ellipse cx="165" cy="195" rx="75" ry="65" fill="#3a2a1a" opacity="0.85" />
      {/* Neck */}
      <path d="M215 165 Q260 150 280 185 Q260 220 215 225 Z" fill="#3a2a1a" opacity="0.85" />
      {/* Snout */}
      <ellipse cx="105" cy="205" rx="38" ry="28" fill="#4a3828" opacity="0.85" />
      {/* Ears */}
      <ellipse cx="165" cy="138" rx="20" ry="28" fill="#4a3828" opacity="0.9" transform="rotate(-15 165 138)" />
      <ellipse cx="210" cy="132" rx="18" ry="26" fill="#4a3828" opacity="0.9" transform="rotate(-5 210 132)" />
      {/* Horns */}
      <path d="M165 138 Q145 100 130 85" stroke="#c4956a" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M205 130 Q210 90 225 75" stroke="#c4956a" strokeWidth="6" fill="none" strokeLinecap="round" />
      {/* Tail */}
      <path d="M655 210 Q695 190 710 230 Q700 250 680 245" stroke="#3a2a1a" strokeWidth="14" fill="none" strokeLinecap="round" />
      <circle cx="685" cy="247" r="12" fill="#3a2a1a" />
      {/* Front legs */}
      <rect x="285" y="310" width="38" height="80" rx="16" fill="#3a2a1a" opacity="0.9" />
      <rect x="345" y="315" width="38" height="75" rx="16" fill="#3a2a1a" opacity="0.85" />
      {/* Hind legs */}
      <rect x="540" y="310" width="38" height="80" rx="16" fill="#3a2a1a" opacity="0.9" />
      <rect x="600" y="315" width="38" height="75" rx="16" fill="#3a2a1a" opacity="0.85" />
      {/* Udder */}
      <ellipse cx="460" cy="340" rx="40" ry="18" fill="#c4956a" opacity="0.5" />
      {/* Region overlays */}
      <path d="M285 200 Q320 150 380 150 Q380 270 320 270 Q285 270 280 240 Z" fill="rgba(212,160,85,0.10)" className="region-overlay" />
      <path d="M380 150 Q460 130 520 140 Q520 270 380 270 Z" fill="rgba(212,160,85,0.10)" className="region-overlay" />
      <path d="M520 150 Q600 140 640 180 Q660 220 640 260 Q600 270 520 270 Z" fill="rgba(212,160,85,0.10)" className="region-overlay" />
      {/* Hotspots */}
      {cuts.map(cut => (
        <g key={cut.id} className={`hotspot ${active === cut.id ? 'hotspot-active' : ''}`}
          onMouseEnter={() => onHover(cut.id)}
          onMouseLeave={() => onHover(null)}
        >
          <circle cx={cut.x * 8} cy={cut.y * 4} r="10" className="hotspot-ring" />
          <circle cx={cut.x * 8} cy={cut.y * 4} r="5" className="hotspot-dot" />
          {active === cut.id && (
            <text x={cut.x * 8} y={cut.y * 4 - 16} className="hotspot-label" textAnchor="middle">{cut.name}</text>
          )}
        </g>
      ))}
    </svg>
  );
}

function PigSilhouette({ cuts, active, onHover }: {
  cuts: Cut[]; active: string | null; onHover: (id: string | null) => void;
}) {
  return (
    <svg viewBox="0 0 800 400" className="animal-svg" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="400" cy="220" rx="210" ry="110" fill="#c47a7a" opacity="0.85" />
      <ellipse cx="185" cy="205" rx="70" ry="60" fill="#c47a7a" opacity="0.85" />
      <path d="M230 170 Q265 155 285 190 Q265 225 230 228 Z" fill="#c47a7a" opacity="0.85" />
      <ellipse cx="132" cy="213" rx="36" ry="26" fill="#d49090" opacity="0.85" />
      <ellipse cx="190" cy="145" rx="15" ry="22" fill="#d49090" transform="rotate(-10 190 145)" />
      <ellipse cx="225" cy="140" rx="14" ry="20" fill="#d49090" transform="rotate(5 225 140)" />
      <path d="M595 200 Q640 170 660 190 Q645 230 610 230" stroke="#c47a7a" strokeWidth="12" fill="none" strokeLinecap="round" />
      <rect x="270" y="312" width="36" height="70" rx="14" fill="#c47a7a" opacity="0.9" />
      <rect x="325" y="318" width="36" height="64" rx="14" fill="#c47a7a" opacity="0.85" />
      <rect x="470" y="312" width="36" height="70" rx="14" fill="#c47a7a" opacity="0.9" />
      <rect x="525" y="318" width="36" height="64" rx="14" fill="#c47a7a" opacity="0.85" />
      {cuts.map(cut => (
        <g key={cut.id} className={`hotspot ${active === cut.id ? 'hotspot-active' : ''}`}
          onMouseEnter={() => onHover(cut.id)}
          onMouseLeave={() => onHover(null)}
        >
          <circle cx={cut.x * 8} cy={cut.y * 4} r="10" className="hotspot-ring" />
          <circle cx={cut.x * 8} cy={cut.y * 4} r="5" className="hotspot-dot" />
          {active === cut.id && (
            <text x={cut.x * 8} y={cut.y * 4 - 16} className="hotspot-label" textAnchor="middle">{cut.name}</text>
          )}
        </g>
      ))}
    </svg>
  );
}

function GenericSilhouette({ emoji, cuts, active, onHover }: {
  emoji: string; cuts: Cut[]; active: string | null; onHover: (id: string | null) => void;
}) {
  return (
    <svg viewBox="0 0 800 400" className="animal-svg" xmlns="http://www.w3.org/2000/svg">
      <text x="400" y="230" fontSize="180" textAnchor="middle" dominantBaseline="middle" opacity="0.3">{emoji}</text>
      {cuts.map(cut => (
        <g key={cut.id} className={`hotspot ${active === cut.id ? 'hotspot-active' : ''}`}
          onMouseEnter={() => onHover(cut.id)}
          onMouseLeave={() => onHover(null)}
        >
          <circle cx={cut.x * 8} cy={cut.y * 4} r="12" className="hotspot-ring" />
          <circle cx={cut.x * 8} cy={cut.y * 4} r="6" className="hotspot-dot" />
          {active === cut.id && (
            <text x={cut.x * 8} y={cut.y * 4 - 18} className="hotspot-label" textAnchor="middle">{cut.name}</text>
          )}
        </g>
      ))}
    </svg>
  );
}

/* ─── PRODUCT CARD ───────────────────────────────────────────────────────── */

function getProductMeta(cut: Cut, index = 0) {
  const formats = ['Caja 10 kg', 'Caja 12 kg', 'Caja 15 kg', 'Flow pack', 'Porcionado'];
  const channels = ['HORECA', 'Foodservice', 'Retail', 'Mayorista'];
  const temperatures = ['-18 C', '-18 C a -22 C', '-20 C'];
  const shelfLife = ['12 meses', '10 meses', '18 meses', '9 meses'];
  const origins = ['Planta Karmac RM', 'Linea congelados Karmac', 'Proceso nacional'];
  return {
    sku: `KRM-${cut.id.slice(0, 3).toUpperCase()}-${120 + index}`,
    format: formats[index % formats.length],
    stock: 24 + ((index * 17) % 86),
    channel: channels[index % channels.length],
    leadTime: `${2 + (index % 4)} dias`,
    temperature: temperatures[index % temperatures.length],
    shelfLife: shelfLife[index % shelfLife.length],
    origin: origins[index % origins.length],
    weight: `${8 + (index % 9)} kg aprox.`,
    units: `${12 + (index * 6) % 48} unidades`,
    packing: index % 2 === 0 ? 'Caja master sellada' : 'Bolsa termoformada',
  };
}

function getCutZone(cat: AnimalCategory, cut: Cut) {
  if (cat.id === 'vacuno') {
    if (cut.x < 35) return 'Zona delantera: paleta, cuello o pecho';
    if (cut.x > 62) return 'Cuarto trasero: asiento, abastero o pierna';
    if (cut.y < 44) return 'Lomo alto: cortes nobles para parrilla';
    if (cut.y > 58) return 'Zona baja: cortes para coccion lenta o guisos';
    return 'Centro del animal: cortes de rendimiento equilibrado';
  }
  if (cat.id === 'cerdo') {
    if (cut.x < 45) return 'Costillar y zona delantera';
    if (cut.y < 45) return 'Lomo: zona magra y tierna';
    return 'Panza y cortes de mayor jugosidad';
  }
  if (cat.id === 'salmon') return 'Porcion central del filete, calibrada para servicio';
  if (cat.id === 'ave') return 'Mezcla procesada de ave para formatos de alto rendimiento';
  return 'Base vegetal formulada para reemplazo proteico';
}

function getNutrition(cut: Cut, index: number) {
  return {
    calories: 145 + (index * 17) % 120,
    protein: 18 + (index * 3) % 11,
    fat: 5 + (index * 2) % 14,
    carbs: cut.id.includes('vegana') ? 8 : (cut.id.includes('hamburguesa') ? 2 : 0),
    sodium: 62 + (index * 23) % 210,
  };
}

function getPreparations(cat: AnimalCategory, cut: Cut) {
  if (cut.id.includes('molida') || cut.id.includes('hamburguesa')) return ['Plancha caliente', 'Sartén industrial', 'Preparaciones QSR'];
  if (cat.id === 'salmon') return ['Horno suave', 'Plancha antiadherente', 'Vapor controlado'];
  if (cat.id === 'cerdo') return ['Parrilla', 'Horno combinado', 'Coccion lenta'];
  if (cut.y > 58) return ['Guiso', 'Braseado', 'Coccion prolongada'];
  return ['Parrilla', 'Plancha', 'Horno'];
}

function getCookingRecommendation(cut: Cut) {
  if (cut.id.includes('lomo') || cut.id.includes('entraña') || cut.id.includes('picana')) {
    return { label: 'Recomendado en parrilla', Icon: FlameKindling };
  }
  if (cut.id.includes('osobuco') || cut.id.includes('cazuela') || cut.id.includes('huachalomo')) {
    return { label: 'Recomendado en coccion lenta', Icon: CookingPot };
  }
  return { label: 'Recomendado en plancha', Icon: Utensils };
}

function getPreparationIcon(preparation: string) {
  const normalized = preparation.toLowerCase();
  if (normalized.includes('parrilla')) return FlameKindling;
  if (normalized.includes('horno') || normalized.includes('coccion') || normalized.includes('braseado') || normalized.includes('guiso')) return CookingPot;
  return Utensils;
}

function getProductStory(cut: Cut) {
  if (cut.id === 'lomo-vetado') {
    return 'El lomo Vetado es una maravilla en sabor. Este es la puerta de entrada al suculento y famoso filete de costilla. Perfecto para ocasiones especiales o cualquier comida que requiera algo extraordinario, el asado de chuletón promete texturas ricas y mantecosas y un sabor robusto y carnoso. Ya sea asado a fuego lento a la perfección o chamuscado hasta obtener una corteza crujiente y caramelizada.';
  }

  if (cut.id === 'lomo-liso') {
    return 'Disfrute de la calidad y el sabor inigualable de nuestro lomo liso. Gracias a su clásica cobertura de grasa externa, este corte ofrece una textura tierna, gran jugosidad y un sabor profundo en cada bocado. Es una pieza versátil y fácil de preparar, ideal para lucirse a la parrilla, al horno o a la plancha tanto en el día a día como en ocasiones especiales.';
  }

  return `${cut.name} destaca por su versatilidad y rendimiento en cocina profesional. Es una alternativa pensada para preparaciones consistentes, con buena respuesta en servicio y formatos adaptables a distintos canales de venta.`;
}

function getCutDiagram(cut: Cut) {
  if (cut.id === 'lomo-liso') return '/cortes/lomoLiso.png';
  return '/cortes/21.png'; // default/fallback
}

function CutOriginDiagram({ cat, cut }: { cat: AnimalCategory; cut: Cut }) {
  if (cat.id !== 'vacuno' && cat.id !== 'cerdo') {
    return (
      <div className="catalog-origin-generic">
        <span>{cat.emoji}</span>
        <b>{cat.label}</b>
      </div>
    );
  }

  const fill = cat.id === 'vacuno' ? '#4a3021' : '#c47a7a';
  const accent = cat.id === 'vacuno' ? '#8b1e1e' : '#8b1e1e';

  return (
    <svg viewBox="0 0 800 400" className="catalog-origin-svg" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="420" cy="210" rx="240" ry="120" fill={fill} opacity="0.88" />
      <ellipse cx="165" cy="195" rx="75" ry="65" fill={fill} opacity="0.88" />
      <path d="M215 165 Q260 150 280 185 Q260 220 215 225 Z" fill={fill} opacity="0.88" />
      <ellipse cx="105" cy="205" rx="38" ry="28" fill={fill} opacity="0.72" />
      <path d="M655 210 Q695 190 710 230 Q700 250 680 245" stroke={fill} strokeWidth="14" fill="none" strokeLinecap="round" />
      <rect x="285" y="310" width="38" height="80" rx="16" fill={fill} opacity="0.9" />
      <rect x="345" y="315" width="38" height="75" rx="16" fill={fill} opacity="0.82" />
      <rect x="540" y="310" width="38" height="80" rx="16" fill={fill} opacity="0.9" />
      <rect x="600" y="315" width="38" height="75" rx="16" fill={fill} opacity="0.82" />
      <circle cx={cut.x * 8} cy={cut.y * 4} r="28" fill="rgba(255,255,255,0.88)" stroke={accent} strokeWidth="5" />
      <circle cx={cut.x * 8} cy={cut.y * 4} r="10" fill={accent} />
      <text x={cut.x * 8} y={Math.max(38, cut.y * 4 - 42)} textAnchor="middle" className="catalog-origin-label">{cut.name}</text>
    </svg>
  );
}

const catalogDeals = [
  {
    title: 'Oferta mayorista semanal',
    product: 'Hamburguesa Vacuno 135g',
    detail: '12% descuento desde 30 cajas',
    validity: 'Vigente hasta viernes',
    discount: '-12%',
  },
  {
    title: 'Pack parrillero HORECA',
    product: 'Lomo Vetado + Baby Ribs',
    detail: 'Despacho preferente en RM',
    validity: 'Stock limitado',
    discount: 'PACK',
  },
  {
    title: 'Reposicion inteligente',
    product: 'Medallas Salmon 100g',
    detail: 'Precio congelado por 72 horas',
    validity: 'Preventa abierta',
    discount: '72H',
  },
];

function ProductCard({ cut, index, isHighlighted, onMouseEnter, onMouseLeave, onSelect }: {
  cut: Cut;
  index: number;
  isHighlighted: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onSelect: () => void;
}) {
  const meta = getProductMeta(cut, index);

  return (
    <article
      className={`product-card ${isHighlighted ? 'product-card-highlighted' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="product-card-img-wrap">
        <img src={cut.img} alt={cut.name} className="product-card-img" loading="lazy" />
        <span className="product-card-badge">{meta.sku}</span>
        <div className="product-hover-sheet">
          <strong>Ficha técnica</strong>
          <dl>
            <div><dt>Formato</dt><dd>{meta.format}</dd></div>
            <div><dt>Stock</dt><dd>{meta.stock} cajas</dd></div>
            <div><dt>Conservación</dt><dd>{meta.temperature}</dd></div>
            <div><dt>Vida útil</dt><dd>{meta.shelfLife}</dd></div>
          </dl>
        </div>
      </div>
      <div className="product-card-body">
        <h3 className="product-card-name">{cut.name}</h3>
        <p className="product-card-desc">{cut.desc}</p>
        <div className="product-card-meta">
          <span>{meta.format}</span>
          <span>{meta.stock} cajas</span>
        </div>
        <button className="product-card-cta" onClick={onSelect}>
          Ver ficha completa <ArrowRight size={15} />
        </button>
      </div>
    </article>
  );
}

/* ─── DIAGRAM PANEL ──────────────────────────────────────────────────────── */

function DiagramPanel({ cat, activeHotspot, onHover }: {
  cat: AnimalCategory;
  activeHotspot: string | null;
  onHover: (id: string | null) => void;
}) {
  if (cat.id === 'vacuno') return <BeefSilhouette cuts={cat.cuts} active={activeHotspot} onHover={onHover} />;
  if (cat.id === 'cerdo') return <PigSilhouette cuts={cat.cuts} active={activeHotspot} onHover={onHover} />;
  return <GenericSilhouette emoji={cat.emoji} cuts={cat.cuts} active={activeHotspot} onHover={onHover} />;
}

/* ─── MAIN PAGE ──────────────────────────────────────────────────────────── */

export default function CatalogPage() {
  const params = new URLSearchParams(window.location.search);
  const initialCategory = params.get('categoria') ?? 'vacuno';
  const initialSheet = params.get('ficha') ?? 'lomo-vetado';
  const isFullSheetView = params.get('vista') === 'ficha';
  const [activeCat, setActiveCat] = useState(initialCategory);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [selectedFullId, setSelectedFullId] = useState(initialSheet);
  const [filter, setFilter] = useState('');

  const cat = CATEGORIES.find(c => c.id === activeCat)!;
  const displayed = cat.cuts.filter(c =>
    c.name.toLowerCase().includes(filter.toLowerCase())
  );
  const selectedCut = cat.cuts.find(c => c.id === selectedFullId) ?? displayed[0] ?? cat.cuts[0];
  const selectedIndex = Math.max(0, cat.cuts.findIndex(c => c.id === selectedCut.id));
  const selectedMeta = getProductMeta(selectedCut, selectedIndex);
  const selectedNutrition = getNutrition(selectedCut, selectedIndex);
  const selectedPreparations = getPreparations(cat, selectedCut);
  const selectedZone = getCutZone(cat, selectedCut);
  const cookingRecommendation = getCookingRecommendation(selectedCut);
  const CookingIcon = cookingRecommendation.Icon;
  const totalProducts = CATEGORIES.reduce((sum, category) => sum + category.cuts.length, 0);

  function openFullSheet(cutId: string) {
    window.location.href = `/catalogo?categoria=${activeCat}&ficha=${cutId}&vista=ficha`;
  }

  if (isFullSheetView) {
    return (
      <div className="catalog-page fs-page">
        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <div className="fs-hero">
          <div className="fs-hero-overlay" />
          <div className="fs-hero-inner">
            <div className="fs-hero-content">
              <button
                className="fs-back-btn"
                onClick={() => { window.location.href = `/catalogo?categoria=${activeCat}`; }}
              >
                <ArrowLeft size={16} /> Volver al catálogo
              </button>
              <div className="fs-hero-kicker">
                <span className="fs-kicker-cat">{cat.emoji} {cat.label}</span>
                <span className="fs-kicker-sep">·</span>
                <span className="fs-kicker-sku">{selectedMeta.sku}</span>
              </div>
              <h1 className="fs-hero-title">{selectedCut.name}</h1>
              <p className="fs-hero-desc">{selectedCut.desc}</p>
              <div className="fs-hero-badges">
                <span className="fs-badge"><Snowflake size={14} /> Congelado {selectedMeta.temperature}</span>
                <span className="fs-badge"><Award size={14} /> {selectedMeta.origin}</span>
                <span className="fs-badge"><Package size={14} /> {selectedMeta.format}</span>
              </div>
            </div>
            <div className="fs-hero-visual">
              <img src={getCutDiagram(selectedCut)} alt="Zona del corte" />
            </div>
          </div>
        </div>

        {/* ── MAIN CONTENT ─────────────────────────────────────────────── */}
        <div className="fs-body">
          <div className="fs-main">

            {/* Product image */}
            <div className="fs-img-card">
              <img src={selectedCut.img} alt={selectedCut.name} className="fs-product-img" />
              <div className="fs-img-sku">{selectedMeta.sku}</div>
            </div>

            {/* Story */}
            <div className="fs-story-card">
              <div className="fs-section-label"><ZapIcon size={14} /> Historia del corte</div>
              <p className="fs-story-text">{getProductStory(selectedCut)}</p>
            </div>

            {/* Claims */}
            <div className="fs-claims-grid">
              <div className="fs-claim">
                <span className="fs-claim-icon"><Beef size={22} /></span>
                <strong>100% carne</strong>
                <span>Producto cárnico seleccionado</span>
              </div>
              <div className="fs-claim">
                <span className="fs-claim-icon"><CheckCircle2 size={22} /></span>
                <strong>0 artificiales</strong>
                <span>Sin ingredientes artificiales declarados</span>
              </div>
              <div className="fs-claim">
                <span className="fs-claim-icon"><CookingIcon size={22} /></span>
                <strong>{cookingRecommendation.label}</strong>
                <span>Uso sugerido para este corte</span>
              </div>
            </div>

            {/* Preparations */}
            <div className="fs-preps-card">
              <div className="fs-section-label"><Utensils size={14} /> Preparaciones recomendadas</div>
              <div className="fs-preps-grid">
                {selectedPreparations.map(prep => {
                  const Icon = getPreparationIcon(prep);
                  return (
                    <div key={prep} className="fs-prep-item">
                      <span className="fs-prep-icon"><Icon size={20} /></span>
                      <span>{prep}</span>
                    </div>
                  );
                })}
              </div>
            </div>


          </div>

          {/* ── SIDEBAR ────────────────────────────────────────────────── */}
          <aside className="fs-sidebar">

            {/* Technical specs */}
            <div className="fs-spec-card">
              <div className="fs-spec-card-header">
                <Tag size={16} />
                <span>Ficha técnica</span>
              </div>
              <dl className="fs-spec-list">
                <div className="fs-spec-row">
                  <dt><Weight size={13} /> Peso neto</dt>
                  <dd>{selectedMeta.weight}</dd>
                </div>
                <div className="fs-spec-row">
                  <dt><Package size={13} /> Formato</dt>
                  <dd>{selectedMeta.format}</dd>
                </div>
                <div className="fs-spec-row">
                  <dt><Boxes size={13} /> Unidades / caja</dt>
                  <dd>{selectedMeta.units}</dd>
                </div>
                <div className="fs-spec-row">
                  <dt><Package size={13} /> Empaque</dt>
                  <dd>{selectedMeta.packing}</dd>
                </div>
                <div className="fs-spec-row">
                  <dt><Thermometer size={13} /> Conservación</dt>
                  <dd>Congelado {selectedMeta.temperature}</dd>
                </div>
                <div className="fs-spec-row">
                  <dt><ZapIcon size={13} /> Vida útil</dt>
                  <dd>{selectedMeta.shelfLife}</dd>
                </div>
                <div className="fs-spec-row">
                  <dt><Award size={13} /> Origen</dt>
                  <dd>{selectedMeta.origin}</dd>
                </div>
                <div className="fs-spec-row">
                  <dt><Tag size={13} /> Canal</dt>
                  <dd>{selectedMeta.channel}</dd>
                </div>
                <div className="fs-spec-row">
                  <dt><Ruler size={13} /> Lead time</dt>
                  <dd>{selectedMeta.leadTime}</dd>
                </div>
              </dl>
            </div>

            {/* Nutrition table */}
            <div className="fs-nutri-card">
              <div className="fs-spec-card-header">
                <Flame size={16} />
                <span>Tabla nutricional</span>
              </div>
              <p className="fs-nutri-note">Por 100 g / referencial</p>

              <div className="fs-nutri-calories">
                <span className="fs-nutri-cal-value">{selectedNutrition.calories}</span>
                <span className="fs-nutri-cal-unit">kcal</span>
              </div>

              <div className="fs-nutri-bars">
                {[
                  { label: 'Proteínas', value: selectedNutrition.protein, unit: 'g', max: 35, color: '#8b1e1e' },
                  { label: 'Grasas totales', value: selectedNutrition.fat, unit: 'g', max: 30, color: '#c4730a' },
                  { label: 'Carbohidratos', value: selectedNutrition.carbs, unit: 'g', max: 30, color: '#256b45' },
                  { label: 'Sodio', value: selectedNutrition.sodium, unit: 'mg', max: 400, color: '#1a5a8a' },
                ].map(n => (
                  <div key={n.label} className="fs-nutri-row">
                    <div className="fs-nutri-row-header">
                      <span className="fs-nutri-label">{n.label}</span>
                      <span className="fs-nutri-val">{n.value} {n.unit}</span>
                    </div>
                    <div className="fs-nutri-bar-track">
                      <div
                        className="fs-nutri-bar-fill"
                        style={{
                          width: `${Math.min(100, (n.value / n.max) * 100)}%`,
                          background: n.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    );
  }

  return (
    <div className="catalog-page">
                  <section className="catalog-hero">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="catalog-hero-video"
                    >
                      <source src="/video/ParrillaCarne.mp4" type="video/mp4" />
                    </video>
                    <div className="catalog-hero-overlay"></div>
                    <div className="catalog-hero-content">
                      <div className="catalog-hero-badge">Catálogo comercial</div>
                      <h1 className="catalog-hero-title">Productos Karmac</h1>
                      <p className="catalog-hero-sub">
                        Explora cortes, formatos y disponibilidad referencial para preparar compras, cotizaciones y surtidos por canal.
                      </p>
                      <div className="catalog-hero-actions">
                        <a href="/contacto" className="catalog-primary-action">Solicitar cotización</a>
                        <a href="/ventas" className="catalog-secondary-action">Gestionar ventas</a>
                      </div>
                    </div>
                    <div className="catalog-hero-summary">
                      <div><strong>{totalProducts}</strong><span>productos</span></div>
                      <div><strong>5</strong><span>categorias</span></div>
                      <div><strong>BRCGS</strong><span>estandar</span></div>
                    </div>
                  </section>

                  <section className="catalog-shell">
                    <section className="catalog-offers-banner" aria-label="Ofertas comerciales">
                      <div className="catalog-offers-heading">
                        <span className="catalog-section-kicker">Ofertas</span>
                        <h2>Promociones activas</h2>
                        <p>Productos con condiciones especiales para compra mayorista.</p>
                      </div>
                      <div className="catalog-offers-grid">
                        {catalogDeals.map(deal => (
                          <article className="catalog-offer-card" key={deal.title}>
                            <div className="catalog-offer-top">
                              <span>{deal.title}</span>
                              <b>{deal.discount}</b>
                            </div>
                            <strong>{deal.product}</strong>
                            <p>{deal.detail}</p>
                            <small>{deal.validity}</small>
                          </article>
                        ))}
                      </div>
                    </section>

                    <div className="catalog-tabs">
                      {CATEGORIES.map(c => (
                        (() => {
                          const Icon = categoryIcons[c.id] ?? Boxes;
                          return (
                            <button
                              key={c.id}
                              className={`catalog-tab ${activeCat === c.id ? 'catalog-tab-active' : ''}`}
                              onClick={() => { setActiveCat(c.id); setActiveHotspot(null); setSelectedFullId(c.cuts[0]?.id ?? ''); setFilter(''); }}
                            >
                              <span className="catalog-tab-icon"><Icon size={20} /></span>
                              <strong>{c.label}</strong>
                              <small>{c.cuts.length} productos</small>
                            </button>
                          );
                        })()
                      ))}
                    </div>

                    <div className="catalog-grid-header">
                      <div>
                        <span className="catalog-section-kicker">Explorar</span>
                        <h2 className="catalog-grid-title">Productos de {cat.label}</h2>
                      </div>
                      <label className="catalog-search">
                        <Search size={18} />
                        <input
                          placeholder="Buscar producto"
                          value={filter}
                          onChange={e => setFilter(e.target.value)}
                        />
                      </label>
                    </div>

                    <div className="catalog-grid">
                      {displayed.map((cut, index) => (
                        <ProductCard
                          key={cut.id}
                          cut={cut}
                          index={index}
                          isHighlighted={activeHotspot === cut.id}
                          onMouseEnter={() => setActiveHotspot(cut.id)}
                          onMouseLeave={() => setActiveHotspot(null)}
                          onSelect={() => openFullSheet(cut.id)}
                        />
                      ))}
                    </div>

                    {displayed.length === 0 && (
                      <div className="catalog-empty">No se encontraron productos para "{filter}"</div>
                    )}
                  </section>
                </div>
                );
}
