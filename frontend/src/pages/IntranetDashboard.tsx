import React, { useMemo, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AlertCircle,
  BarChart3,
  Bell,
  CalendarClock,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Clock,
  FileText,
  Filter,
  Headphones,
  LayoutDashboard,
  LogOut,
  MapPin,
  Menu,
  MessageSquareText,
  Navigation,
  PackageCheck,
  PackageSearch,
  Phone,
  PieChart,
  Plus,
  ReceiptText,
  Route,
  Search,
  Send,
  ShoppingCart,
  Star,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  WalletCards,
  X,
} from 'lucide-react';
import { CATEGORIES } from './CatalogPage';
import '../styles/intranet.css';

const metrics = [
  { label: 'Ventas del mes', value: '$42,8M', helper: '+12% vs. mes anterior', icon: TrendingUp, tone: 'green' },
  { label: 'Pipeline activo', value: '$18,6M', helper: '21 oportunidades', icon: PieChart, tone: 'amber' },
  { label: 'Clientes visitados', value: '38', helper: '7 pendientes esta sem', icon: Users, tone: 'blue' },
  { label: 'Pedidos hoy', value: '14', helper: '4 en despacho', icon: ShoppingCart, tone: 'red' },
];

const pipeline = [
  { stage: 'Prospectos', total: '$5,2M', count: 9, progress: 34 },
  { stage: 'Cotización', total: '$8,1M', count: 7, progress: 52 },
  { stage: 'Negociación', total: '$3,4M', count: 3, progress: 68 },
  { stage: 'Cierre', total: '$1,9M', count: 2, progress: 84 },
];

const clients = [
  { name: 'Restaurante El Parrillero', tag: 'HORECA', status: 'Recompra probable', amount: '$890.500', last: 'Visitado hoy', phone: '+56 9 8123 4400', owner: 'Carlos', frequency: 'Semanal', risk: 'Bajo', address: 'Av. Providencia 1510', lat: -33.426, lng: -70.617 },
  { name: 'Carnicería Don José', tag: 'Retail', status: 'Pago al día', amount: '$1.240.000', last: 'Pedido entregado', phone: '+56 9 7122 1188', owner: 'Carlos', frequency: '2 veces/semana', risk: 'Bajo', address: 'San Diego 890', lat: -33.454, lng: -70.648 },
  { name: 'Supermercados La Económica', tag: 'Mayorista', status: 'Requiere aprobación', amount: '$3.450.000', last: 'Hace 1 hora', phone: '+56 9 6654 1200', owner: 'Carlos', frequency: 'Quincenal', risk: 'Alto', address: 'Av. Recoleta 1201', lat: -33.414, lng: -70.641 },
  { name: 'Hotel Las Condes', tag: 'Foodservice', status: 'Negociación abierta', amount: '$1.980.000', last: 'Llamado hoy', phone: '+56 9 9011 2233', owner: 'Carlos', frequency: 'Mensual', risk: 'Medio', address: 'Apoquindo 4500', lat: -33.416, lng: -70.586 },
  { name: 'Minimarket Los Andes', tag: 'Retail', status: 'Recompra probable', amount: '$450.000', last: 'Ayer', phone: '+56 9 1122 3344', owner: 'Carlos', frequency: 'Semanal', risk: 'Bajo', address: 'Av. Apoquindo 2000', lat: -33.416, lng: -70.586 },
  { name: 'Pizzería Napoli', tag: 'HORECA', status: 'Pago atrasado', amount: '$670.000', last: 'Hace 3 días', phone: '+56 9 2233 4455', owner: 'Carlos', frequency: 'Mensual', risk: 'Alto', address: 'Tobalaba 1200', lat: -33.416, lng: -70.586 },
  { name: 'Casino Corporativo S.A.', tag: 'Foodservice', status: 'Al día', amount: '$5.600.000', last: 'Semana pasada', phone: '+56 9 5566 7788', owner: 'Carlos', frequency: 'Quincenal', risk: 'Bajo', address: 'Ciudad Empresarial', lat: -33.416, lng: -70.586 },
];

const tasks = [
  { label: 'Llamar a La Económica por aprobación', time: '12:30', priority: 'Alta' },
  { label: 'Enviar cotización lomo vetado', time: '15:00', priority: 'Media' },
  { label: 'Registrar visita sucursal Vitacura', time: '17:15', priority: 'Media' },
  { label: 'Revisar stock de salmón para Casino S.A.', time: '18:00', priority: 'Alta' },
  { label: 'Programar ruta de mañana', time: '18:30', priority: 'Baja' },
];

const stockAlerts = [
  { sku: 'Asado Carnicero', detail: 'Quedan 18 cajas', state: 'Bajo stock' },
  { sku: 'Lomo Liso Angus', detail: 'Reposición mañana', state: 'Reservar' },
  { sku: 'Entraña Premium', detail: 'Alta demanda HORECA', state: 'Prioridad' },
  { sku: 'Molida de Ave', detail: 'Quiebre de stock en planta', state: 'Agotado' },
  { sku: 'Baby Ribs', detail: 'Stock bloqueado por calidad', state: 'Retenido' },
];

const catalogProducts = CATEGORIES.flatMap(cat => 
  cat.cuts.map((cut, index) => ({
    name: cut.name,
    category: cat.label,
    sku: `KRM-${cut.id.slice(0, 3).toUpperCase()}-${120 + index}`,
    format: index % 2 === 0 ? 'Caja 12 kg' : 'Caja 10 kg',
    stock: 24 + ((index * 17) % 86),
    price: 9990 + ((index * 1500) % 5000), // Simulated price
    img: cut.img,
  }))
);

const routeStops = [
  { time: '09:00', client: 'Carnicería Don José', zone: 'Santiago Centro', action: 'Confirmar recepción', status: 'Completado', duration: '28 min', order: 1 },
  { time: '10:15', client: 'Minimarket Los Andes', zone: 'Providencia', action: 'Reposición semanal', status: 'Completado', duration: '15 min', order: 2 },
  { time: '11:30', client: 'Restaurante El Parrillero', zone: 'Providencia', action: 'Levantar recompra', status: 'En ruta', duration: '22 min', order: 3 },
  { time: '13:00', client: 'Pizzería Napoli', zone: 'Las Condes', action: 'Cobranza factura', status: 'Pendiente', duration: '20 min', order: 4 },
  { time: '14:45', client: 'Hotel Las Condes', zone: 'Las Condes', action: 'Presentar lista premium', status: 'Pendiente', duration: '31 min', order: 5 },
  { time: '17:00', client: 'Supermercados La Económica', zone: 'Recoleta', action: 'Revisión cobranza', status: 'Pendiente', duration: '35 min', order: 6 },
];

const callLog = [
  { client: 'Supermercados La Económica', contact: 'Marcela Ríos', result: 'Solicita extensión', time: '10:42', next: 'Respaldo a finanzas' },
  { client: 'Hotel Las Condes', contact: 'Jefe compras', result: 'Interés premium', time: '09:18', next: 'Agendar degustación' },
  { client: 'Carnicería Don José', contact: 'José Muñoz', result: 'Pedido recibido', time: '08:55', next: 'Recompra viernes' },
  { client: 'Casino Corporativo S.A.', contact: 'Luis Vega', result: 'Pide nuevo catálogo', time: '08:15', next: 'Enviar PDF' },
];

const receivables = [
  { client: 'Supermercados La Económica', invoice: 'FAC-7812', due: 'Vence hoy', amount: '$2.180.000', status: 'Riesgo' },
  { client: 'Pizzería Napoli', invoice: 'FAC-7690', due: 'Vencida (3 días)', amount: '$670.000', status: 'Riesgo' },
  { client: 'Restaurante El Parrillero', invoice: 'FAC-7798', due: 'En 3 días', amount: '$890.500', status: 'Pendiente' },
  { client: 'Carnicería Don José', invoice: 'FAC-7761', due: 'Pagada', amount: '$1.240.000', status: 'Al día' },
  { client: 'Minimarket Los Andes', invoice: 'FAC-7820', due: 'En 5 días', amount: '$450.000', status: 'Al día' },
];

const orders = [
  { id: '#PED-4091', client: 'Carnicería Don José', status: 'Entregado', amount: '$1.240.000', date: 'Hoy, 09:30', items: 'Lomo liso, entraña', margin: '22%', source: 'Ruta' },
  { id: '#PED-4092', client: 'Restaurante El Parrillero', status: 'En preparación', amount: '$890.500', date: 'Hoy, 11:15', items: 'Baby ribs, lomo vetado', margin: '18%', source: 'Llamada' },
  { id: '#PED-4093', client: 'Supermercados La Económica', status: 'Por aprobar', amount: '$3.450.000', date: 'Hace 1 hora', items: 'Mix mayorista', margin: '15%', source: 'Cotización' },
  { id: '#PED-4094', client: 'Hotel Las Condes', status: 'Borrador', amount: '$1.980.000', date: '15:40', items: 'Medallas salmón...', margin: '24%', source: 'CRM' },
  { id: '#PED-4095', client: 'Casino Corporativo S.A.', status: 'Despachado', amount: '$5.600.000', date: 'Ayer', items: 'Molida, Churrasco', margin: '12%', source: 'Portal Web' },
  { id: '#PED-4096', client: 'Minimarket Los Andes', status: 'Rechazado', amount: '$150.000', date: 'Ayer', items: 'Molida de Ave', margin: '10%', source: 'Llamada' },
];

export default function IntranetDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [activeModule, setActiveModule] = useState('resumen');
  const [quoteProduct, setQuoteProduct] = useState(catalogProducts[0].name);
  const [quoteQuantity, setQuoteQuantity] = useState(24);
  const [quoteUnit, setQuoteUnit] = useState('kg');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 980);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 980);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const selectedProduct = catalogProducts.find((product) => product.name === quoteProduct) ?? catalogProducts[0];
  
  // Extract box weight from format (e.g. "Caja 12 kg" -> 12). Fallback to 10kg.
  const formatWeightMatch = selectedProduct.format.match(/(\d+)\s*kg/i);
  const kgPerBox = formatWeightMatch ? parseInt(formatWeightMatch[1], 10) : 10;
  
  const totalKilos = quoteUnit === 'caja' ? quoteQuantity * kgPerBox : quoteQuantity;

  const quoteSubtotal = selectedProduct.price * totalKilos;
  const quoteDiscount = quoteSubtotal * 0.08;
  const quoteTotal = quoteSubtotal - quoteDiscount;
  const activeClient = clients[1];

  const currentDate = useMemo(
    () => new Intl.DateTimeFormat('es-CL', { weekday: 'long', day: 'numeric', month: 'long' }).format(new Date()),
    []
  );

  const handleLogout = () => {
    navigate('/intranet/login');
  };

  const navItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Resumen' },
    { id: 'pedidos', icon: ShoppingCart, label: 'Pedidos' },
    { id: 'clientes', icon: Users, label: 'Clientes' },
    { id: 'ruta', icon: Route, label: 'Rutas' },
  ];

  return (
    <div className="intra-layout">
      {/* SIDEBAR FOR DESKTOP */}
      {isDesktop && (
        <aside className="intra-sidebar">
          <div className="intra-sidebar-brand">
            <img src="/img/LOGO.png" alt="KARMAC" className="brand-logo-img" />
            <div>
              <h2>KARMAC</h2>
              <span>CRM Ventas</span>
            </div>
          </div>
          <nav className="intra-sidebar-nav">
            {navItems.map(item => (
              <button 
                key={item.id}
                className={`intra-sidebar-item ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => { setActiveTab(item.id); setActiveModule('resumen'); }}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
          <div className="intra-sidebar-footer">
            <div className="user-profile">
              <div className="avatar">C</div>
              <div className="user-info">
                <strong>Carlos Ríos</strong>
                <span>Vendedor Terreno</span>
              </div>
            </div>
            <button className="logout-btn" onClick={handleLogout}>
              <LogOut size={18} />
            </button>
          </div>
        </aside>
      )}

      {/* MAIN CONTENT WRAPPER */}
      <div className="intra-content-wrapper">
        <header className="intra-header">
          <div className="intra-header-left">
            {!isDesktop && (
              <button className="intra-icon-btn" onClick={() => setIsMobileMenuOpen(true)}>
                <Menu size={22} />
              </button>
            )}
            <div className="intra-header-title">
              <h2>Panel de Vendedor</h2>
              <span className="intra-date">{currentDate}</span>
            </div>
          </div>
          
          <div className="intra-header-right">
            <label className="intra-global-search">
              <Search size={18} />
              <input placeholder="Buscar RUT, cliente o producto..." />
            </label>
            <button className="intra-icon-btn intra-notif" aria-label="Notificaciones">
              <Bell size={20} />
              <span className="intra-notif-dot"></span>
            </button>
            {!isDesktop && (
              <button className="intra-icon-btn" onClick={handleLogout}><LogOut size={20} /></button>
            )}
          </div>
        </header>

        <main className="intra-main">
          {activeTab === 'dashboard' && (
            <div className="fade-in">
              {/* HERO SECTION */}
              <section className="intra-hero">
                <div className="intra-greeting">
                  <div className="greeting-content">
                    <h1>Hola, Carlos</h1>
                    <p>Tu ruta y pipeline están listos. Tienes 4 pedidos en despacho y 3 reuniones clave hoy.</p>
                  </div>
                </div>
                <div className="intra-goal-card">
                  <div className="intra-goal-top">
                    <div className="goal-icon"><Target size={20} /></div>
                    <span>Meta Semanal</span>
                    <strong>72%</strong>
                  </div>
                  <div className="intra-progress"><span style={{ width: '72%' }} /></div>
                  <p>$14,4M vendidos de $20M</p>
                </div>
              </section>

              {/* QUICK ACTIONS */}
              <section className="intra-action-grid">
                <button className={`intra-action-card primary ${activeModule === 'cotizar' ? 'active' : ''}`} onClick={() => setActiveModule('cotizar')}>
                  <div className="action-icon"><Plus size={22} /></div>
                  <span>Nueva Venta</span>
                </button>
                <button className={`intra-action-card ${activeModule === 'catalogo' ? 'active' : ''}`} onClick={() => setActiveModule('catalogo')}>
                  <div className="action-icon"><PackageSearch size={22} /></div>
                  <span>Catálogo</span>
                </button>
                <button className={`intra-action-card ${activeModule === 'rutas' ? 'active' : ''}`} onClick={() => setActiveModule('rutas')}>
                  <div className="action-icon"><MapPin size={22} /></div>
                  <span>Mi Ruta</span>
                </button>
                <button className={`intra-action-card ${activeModule === 'llamadas' ? 'active' : ''}`} onClick={() => setActiveModule('llamadas')}>
                  <div className="action-icon"><Phone size={22} /></div>
                  <span>Llamadas</span>
                </button>
                <button className={`intra-action-card ${activeModule === 'cobranza' ? 'active' : ''}`} onClick={() => setActiveModule('cobranza')}>
                  <div className="action-icon"><WalletCards size={22} /></div>
                  <span>Cobranza</span>
                </button>
              </section>

              {/* LIVE MODULE (Expands when an action is clicked) */}
              {activeModule !== 'resumen' && (
                <section className="intra-live-module slide-down">
                  <div className="intra-section-header">
                    <div className="title-group">
                      <span className="kicker">{activeModule.toUpperCase()}</span>
                      <h3>Gestión Activa</h3>
                    </div>
                    <button className="intra-close-module" onClick={() => setActiveModule('resumen')}><X size={20} /></button>
                  </div>

                  {activeModule === 'cotizar' && (
                    <div className="intra-quote-grid">
                      <div className="intra-quote-form">
                        <label>Cliente
                          <select defaultValue="Restaurante El Parrillero">
                            {clients.map((client) => <option key={client.name}>{client.name}</option>)}
                          </select>
                        </label>
                        <label>Producto
                          <select value={quoteProduct} onChange={(e) => setQuoteProduct(e.target.value)}>
                            {catalogProducts.map((product) => <option key={product.sku}>{product.name}</option>)}
                          </select>
                        </label>
                        <div className="quote-amount-group">
                          <label>Unidad
                            <div className="unit-toggle-group">
                              <button 
                                className={`unit-toggle-btn ${quoteUnit === 'kg' ? 'active' : ''}`} 
                                onClick={() => setQuoteUnit('kg')}
                                type="button"
                              >
                                Kilos
                              </button>
                              <button 
                                className={`unit-toggle-btn ${quoteUnit === 'caja' ? 'active' : ''}`} 
                                onClick={() => setQuoteUnit('caja')}
                                type="button"
                              >
                                Cajas
                              </button>
                            </div>
                          </label>
                          <label>Cantidad
                            <input type="number" min="1" value={quoteQuantity} onChange={(e) => setQuoteQuantity(Number(e.target.value) || 1)} />
                          </label>
                        </div>
                        <label>Condición Comercial
                          <select defaultValue="Despacho 24 horas">
                            <option>Despacho 24 horas</option>
                            <option>Retiro en planta</option>
                          </select>
                        </label>
                      </div>
                      <div className="intra-quote-preview">
                        <div className="preview-header">
                          <span className="intra-status pending"><ReceiptText size={14} /> Borrador</span>
                          <h4>{selectedProduct.name}</h4>
                          <p>{selectedProduct.format} · {selectedProduct.sku}</p>
                        </div>
                        <div className="preview-body">
                          <div className="quote-line"><span>Precio kg</span><b>${selectedProduct.price.toLocaleString('es-CL')}</b></div>
                          {quoteUnit === 'caja' && (
                            <div className="quote-line"><span>Peso por caja est.</span><b>{kgPerBox} kg</b></div>
                          )}
                          <div className="quote-line"><span>Cantidad</span><b>{quoteQuantity} {quoteUnit === 'caja' ? 'cajas' : 'kg'}</b></div>
                          <div className="quote-line"><span>Total Kilos</span><b>{totalKilos} kg</b></div>
                          <div className="quote-line"><span>Desc. Mayorista (8%)</span><b className="discount">-${Math.round(quoteDiscount).toLocaleString('es-CL')}</b></div>
                        </div>
                        <div className="preview-footer">
                          <div className="quote-total"><span>Total Neto</span><strong>${Math.round(quoteTotal).toLocaleString('es-CL')}</strong></div>
                          <button className="intra-btn-primary"><Send size={18} /> Generar Cotización</button>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeModule === 'catalogo' && (
                    <div className="intra-catalog-grid">
                      {catalogProducts.map((product) => (
                        <article className="intra-product-card" key={product.sku}>
                          <div className="product-img-wrapper">
                            <img src={product.img} alt={product.name} />
                            <span className="stock-badge">{product.stock} cjs</span>
                          </div>
                          <div className="product-info">
                            <small>{product.category}</small>
                            <h4>{product.name}</h4>
                            <p>{product.format} · {product.sku}</p>
                            <div className="price-tag">${product.price.toLocaleString('es-CL')} <span>/kg</span></div>
                          </div>
                        </article>
                      ))}
                    </div>
                  )}

                  {/* Other modules (Rutas, Llamadas, Cobranza) would follow similarly, kept concise for demo */}
                  {activeModule === 'rutas' && (
                    <div className="intra-route-board">
                      {routeStops.map((stop) => (
                        <article className="intra-route-stop" key={`${stop.time}-${stop.client}`}>
                          <div className="time-block">{stop.time}</div>
                          <div className="stop-details">
                            <h4>{stop.client}</h4>
                            <p><MapPin size={12}/> {stop.zone} · {stop.action}</p>
                          </div>
                          <span className={`status-badge ${stop.status === 'Completado' ? 'success' : 'pending'}`}>{stop.status}</span>
                        </article>
                      ))}
                    </div>
                  )}
                  {activeModule === 'llamadas' && (
                    <div className="intra-calls-grid">
                       <div className="intra-call-form">
                         <h4>Registrar Llamada</h4>
                         <select defaultValue="Supermercados La Económica">{clients.map((client) => <option key={client.name}>{client.name}</option>)}</select>
                         <select defaultValue="Seguimiento"><option>Seguimiento</option><option>Venta</option></select>
                         <textarea placeholder="Notas de la llamada..."></textarea>
                         <button className="intra-btn-primary">Guardar</button>
                       </div>
                       <div className="intra-call-log">
                         {callLog.map((call, i) => (
                           <div className="log-item" key={i}>
                             <strong>{call.client}</strong>
                             <span>{call.time} · {call.contact}</span>
                             <p>{call.result}</p>
                           </div>
                         ))}
                       </div>
                    </div>
                  )}
                  {activeModule === 'cobranza' && (
                     <div className="intra-collection-grid">
                     {receivables.map((item) => (
                       <article className="intra-collection-card" key={item.invoice}>
                         <div className="coll-header">
                           <span className={`status-badge ${item.status === 'Riesgo' ? 'danger' : 'success'}`}>{item.status}</span>
                           <small>{item.due}</small>
                         </div>
                         <h4>{item.client}</h4>
                         <p>{item.invoice}</p>
                         <strong>{item.amount}</strong>
                       </article>
                     ))}
                   </div>
                  )}
                </section>
              )}

              {/* METRICS & CRM GRID */}
              {activeModule === 'resumen' && (
                <>
                  <section className="intra-metric-grid">
                    {metrics.map((metric, idx) => (
                      <article className={`intra-metric-card tone-${metric.tone}`} key={idx}>
                        <div className="metric-icon"><metric.icon size={22} /></div>
                        <div className="metric-data">
                          <span>{metric.label}</span>
                          <strong>{metric.value}</strong>
                          <small>{metric.helper}</small>
                        </div>
                      </article>
                    ))}
                  </section>

                  <div className="intra-dashboard-grid">
                    <article className="intra-panel">
                      <div className="intra-section-header">
                        <div className="title-group">
                          <BarChart3 size={18} className="text-red" />
                          <h3>Pipeline de Ventas</h3>
                        </div>
                      </div>
                      <div className="intra-pipeline">
                        {pipeline.map((item) => (
                          <div className="pipeline-row" key={item.stage}>
                            <div className="pipe-info">
                              <strong>{item.stage}</strong>
                              <span>{item.count} negocios</span>
                            </div>
                            <div className="pipe-track"><span style={{ width: `${item.progress}%` }} /></div>
                            <b>{item.total}</b>
                          </div>
                        ))}
                      </div>
                    </article>

                    <article className="intra-panel">
                      <div className="intra-section-header">
                        <div className="title-group">
                          <CalendarClock size={18} className="text-red" />
                          <h3>Agenda del Día</h3>
                        </div>
                      </div>
                      <div className="intra-task-list">
                        {tasks.map((task, i) => (
                          <div className="task-item" key={i}>
                            <div className="task-time">{task.time}</div>
                            <div className="task-desc">
                              <span>{task.label}</span>
                              <small className={`prio-${task.priority.toLowerCase()}`}>{task.priority}</small>
                            </div>
                          </div>
                        ))}
                      </div>
                    </article>
                  </div>
                </>
              )}
            </div>
          )}

          {/* OTHER TABS (Pedidos, Clientes, Rutas) */}
          {activeTab === 'pedidos' && (
            <section className="intra-panel fade-in">
              <div className="intra-section-header">
                <div className="title-group">
                  <ShoppingCart size={20} className="text-red" />
                  <h3>Control de Pedidos</h3>
                </div>
                <button className="intra-btn-primary small"><Plus size={16}/> Nuevo</button>
              </div>
              <div className="intra-order-list">
                {orders.map(order => (
                  <div className="order-row" key={order.id}>
                    <div className="o-id">
                      <strong>{order.id}</strong>
                      <span>{order.date}</span>
                    </div>
                    <div className="o-client">
                      <b>{order.client}</b>
                      <span>{order.items}</span>
                    </div>
                    <div className="o-amount">
                      <strong>{order.amount}</strong>
                      <span className={`status-badge ${order.status === 'Entregado' ? 'success' : 'pending'}`}>{order.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === 'clientes' && (
            <div className="intra-dashboard-grid fade-in">
              <article className="intra-panel">
                 <div className="intra-section-header">
                  <div className="title-group">
                    <Users size={20} className="text-red" />
                    <h3>Mi Cartera</h3>
                  </div>
                </div>
                <div className="client-list">
                  {clients.map(client => (
                    <div className="client-card" key={client.name}>
                      <div className="c-avatar">{client.name.charAt(0)}</div>
                      <div className="c-info">
                        <strong>{client.name}</strong>
                        <span>{client.tag} · {client.address}</span>
                      </div>
                      <ChevronRight size={18} className="text-muted" />
                    </div>
                  ))}
                </div>
              </article>
              <article className="intra-panel highlight-panel">
                <div className="title-group mb-4">
                  <Star size={20} className="text-gold" />
                  <h3>Ficha Activa</h3>
                </div>
                <div className="active-profile">
                  <div className="profile-header">
                    <div className="p-avatar">{activeClient.name.charAt(0)}</div>
                    <div>
                      <h2>{activeClient.name}</h2>
                      <span className="badge">{activeClient.tag}</span>
                    </div>
                  </div>
                  <div className="profile-details">
                    <div className="detail-item">
                      <Phone size={16}/> <span>{activeClient.phone}</span>
                    </div>
                    <div className="detail-item">
                      <MapPin size={16}/> <span>{activeClient.address}</span>
                    </div>
                    <div className="detail-item">
                      <Clock size={16}/> <span>Último: {activeClient.last}</span>
                    </div>
                    <div className="detail-item">
                      <WalletCards size={16}/> <span>Compra Promedio: {activeClient.amount}</span>
                    </div>
                  </div>
                  <button className="intra-btn-primary w-full mt-4"><Phone size={18}/> Llamar Ahora</button>
                </div>
              </article>
            </div>
          )}

          {activeTab === 'ruta' && (
            <div className="intra-dashboard-grid fade-in">
               <article className="intra-panel p-0 overflow-hidden relative" style={{ minHeight: '400px' }}>
                  <iframe
                    title="Mapa de ruta"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-70.704%2C-33.489%2C-70.547%2C-33.381&layer=mapnik&marker=-33.4489%2C-70.6693"
                    className="map-iframe"
                    loading="lazy"
                  />
                  <div className="map-overlay">
                    <div className="map-card">
                      <h4>Ruta Optimizada</h4>
                      <p>4 visitas en Santiago Centro y Providencia. Ahorro estimado: 15 min.</p>
                      <button className="intra-btn-primary small w-full mt-2"><Navigation size={16}/> Iniciar Navegación</button>
                    </div>
                  </div>
               </article>
               <article className="intra-panel">
                 <div className="intra-section-header">
                    <div className="title-group">
                      <Route size={20} className="text-red" />
                      <h3>Paradas de Hoy</h3>
                    </div>
                  </div>
                  <div className="intra-route-board">
                      {routeStops.map((stop) => (
                        <article className="intra-route-stop" key={`${stop.time}-${stop.client}`}>
                          <div className="time-block">{stop.time}</div>
                          <div className="stop-details">
                            <h4>{stop.client}</h4>
                            <p>{stop.action}</p>
                          </div>
                          <span className={`status-badge ${stop.status === 'Completado' ? 'success' : 'pending'}`}>{stop.status}</span>
                        </article>
                      ))}
                    </div>
               </article>
            </div>
          )}

        </main>
      </div>

      {/* MOBILE BOTTOM NAV */}
      {!isDesktop && (
        <nav className="intra-bottom-nav">
          {navItems.map(item => (
            <button 
              key={item.id}
              className={`intra-nav-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => { setActiveTab(item.id); setActiveModule('resumen'); }}
            >
              <item.icon size={22} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      )}

      {/* MOBILE SIDE MENU OVERLAY */}
      {!isDesktop && isMobileMenuOpen && (
        <div className="intra-mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)}>
          <aside className="intra-mobile-menu" onClick={e => e.stopPropagation()}>
             <div className="menu-header">
               <img src="/img/LOGO.png" alt="KARMAC" className="brand-logo-img" />
               <h2>KARMAC</h2>
               <button className="close-btn" onClick={() => setIsMobileMenuOpen(false)}><X size={24}/></button>
             </div>
             <div className="user-profile mobile-profile">
              <div className="avatar">C</div>
              <div className="user-info">
                <strong>Carlos Ríos</strong>
                <span>Vendedor Terreno</span>
              </div>
            </div>
            <nav className="mobile-nav-links">
               {navItems.map(item => (
                <button 
                  key={item.id}
                  className={`mobile-nav-item ${activeTab === item.id ? 'active' : ''}`}
                  onClick={() => { setActiveTab(item.id); setActiveModule('resumen'); setIsMobileMenuOpen(false); }}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
            <div className="mobile-menu-footer">
              <button className="logout-btn w-full justify-center" onClick={handleLogout}>
                <LogOut size={18} /> Cerrar Sesión
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
