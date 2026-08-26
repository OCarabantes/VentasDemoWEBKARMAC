import React, { useMemo, useState } from 'react';
import { Calculator, Check, Minus, Plus, Search, ShoppingCart, Trash2 } from 'lucide-react';
import '../styles/sales.css';

type SalesProduct = {
  id: string;
  code: string;
  name: string;
  animal: string;
  cut: string;
  kgPerBox: number;
  unitsPerBox: number;
  valuePerKg: number;
  stockBoxes: number;
  minBoxes: number;
  conservation: string;
};

type Cart = Record<string, number>;

const INITIAL_PRODUCTS: SalesProduct[] = [
  { id: 'vac-hamb-135', code: 'VEN-001', name: 'Hamburguesa Vacuno 135g', animal: 'Vacuno', cut: 'Procesado', kgPerBox: 6.48, unitsPerBox: 48, valuePerKg: 6634, stockBoxes: 186, minBoxes: 5, conservation: 'Congelado -18 C' },
  { id: 'vac-lomo-vetado', code: 'VEN-002', name: 'Lomo Vetado', animal: 'Vacuno', cut: 'Corte premium', kgPerBox: 15, unitsPerBox: 4, valuePerKg: 8593, stockBoxes: 42, minBoxes: 2, conservation: 'Congelado -18 C' },
  { id: 'vac-molida-500', code: 'VEN-003', name: 'Molida Vacuno 500g', animal: 'Vacuno', cut: 'Molida', kgPerBox: 10, unitsPerBox: 20, valuePerKg: 5890, stockBoxes: 96, minBoxes: 3, conservation: 'Congelado -18 C' },
  { id: 'cer-baby-ribs', code: 'VEN-004', name: 'Baby Ribs', animal: 'Cerdo', cut: 'Costillar', kgPerBox: 10, unitsPerBox: 8, valuePerKg: 6390, stockBoxes: 73, minBoxes: 2, conservation: 'Congelado -18 C' },
  { id: 'cer-lomo', code: 'VEN-005', name: 'Lomo de Cerdo', animal: 'Cerdo', cut: 'Lomo', kgPerBox: 12, unitsPerBox: 6, valuePerKg: 5290, stockBoxes: 58, minBoxes: 2, conservation: 'Congelado -18 C' },
  { id: 'sal-medallas', code: 'VEN-006', name: 'Medallas Salmon 100g', animal: 'Salmon', cut: 'Porcionado', kgPerBox: 5, unitsPerBox: 50, valuePerKg: 18380, stockBoxes: 28, minBoxes: 1, conservation: 'Congelado -20 C' },
  { id: 'ave-molida', code: 'VEN-007', name: 'Molida de Ave', animal: 'Ave', cut: 'Molida', kgPerBox: 8, unitsPerBox: 16, valuePerKg: 4490, stockBoxes: 64, minBoxes: 3, conservation: 'Congelado -18 C' },
  { id: 'veg-molida', code: 'VEN-008', name: 'Molida Vegana 250g', animal: 'Vegana', cut: 'Alternativa vegetal', kgPerBox: 6, unitsPerBox: 24, valuePerKg: 7490, stockBoxes: 35, minBoxes: 2, conservation: 'Congelado -18 C' },
];

const animals = ['Todos', 'Vacuno', 'Cerdo', 'Salmon', 'Ave', 'Vegana'];

const currency = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
  maximumFractionDigits: 0,
});

const number = new Intl.NumberFormat('es-CL', {
  maximumFractionDigits: 2,
});

function boxValue(product: SalesProduct) {
  return Math.round(product.kgPerBox * product.valuePerKg);
}

export default function SalesPage() {
  const products = INITIAL_PRODUCTS;
  const [cart, setCart] = useState<Cart>({
    'vac-hamb-135': 8,
    'cer-baby-ribs': 3,
  });
  const [query, setQuery] = useState('');
  const [activeAnimal, setActiveAnimal] = useState('Todos');

  const filteredProducts = products.filter(product => {
    const matchesAnimal = activeAnimal === 'Todos' || product.animal === activeAnimal;
    const search = `${product.code} ${product.name} ${product.cut}`.toLowerCase();
    return matchesAnimal && search.includes(query.toLowerCase());
  });

  const cartLines = products
    .filter(product => cart[product.id] > 0)
    .map(product => {
      const boxes = cart[product.id];
      const kilos = boxes * product.kgPerBox;
      const units = boxes * product.unitsPerBox;
      const total = boxes * boxValue(product);
      return { product, boxes, kilos, units, total };
    });

  const totals = useMemo(() => {
    return cartLines.reduce(
      (acc, line) => ({
        boxes: acc.boxes + line.boxes,
        kilos: acc.kilos + line.kilos,
        units: acc.units + line.units,
        amount: acc.amount + line.total,
      }),
      { boxes: 0, kilos: 0, units: 0, amount: 0 },
    );
  }, [cartLines]);

  function setBoxes(productId: string, boxes: number) {
    const product = products.find(item => item.id === productId);
    const max = product?.stockBoxes ?? 999;
    const safeBoxes = Math.max(0, Math.min(max, boxes));
    setCart(current => ({ ...current, [productId]: safeBoxes }));
  }

  return (
    <div className="sales-page">
      <section className="sales-hero">
        <div className="sales-hero-copy">
          <span className="sales-kicker">Ventas Karmac</span>
          <h1>Armado de pedido</h1>
          <p>
            Sección de compra para agregar productos al carro usando cajas, kilos, unidades por caja y valores comerciales editables.
          </p>
        </div>
        <div className="sales-hero-panel" aria-label="Resumen del carro">
          <div><span>Total pedido</span><strong>{currency.format(totals.amount)}</strong></div>
          <div><span>Kilos</span><strong>{number.format(totals.kilos)} kg</strong></div>
          <div><span>Cajas</span><strong>{totals.boxes}</strong></div>
        </div>
      </section>

      <section className="sales-workspace">
        <main className="sales-main">
          <div className="sales-toolbar">
            <div className="sales-search">
              <Search size={18} />
              <input value={query} onChange={event => setQuery(event.target.value)} placeholder="Buscar por código, producto o corte" />
            </div>
            <div className="sales-tabs" aria-label="Filtro por animal">
              {animals.map(animal => (
                <button key={animal} className={activeAnimal === animal ? 'active' : ''} onClick={() => setActiveAnimal(animal)}>
                  {animal}
                </button>
              ))}
            </div>
          </div>

          <div className="sales-order-layout">
            <section className="sales-table-card">
              <div className="sales-section-heading">
                <Calculator size={20} />
                <h2>Lista para compra</h2>
              </div>
              <div className="sales-table-wrap">
                <table className="sales-table">
                  <thead>
                    <tr>
                      <th>Codigo</th>
                      <th>Producto</th>
                      <th>Animal</th>
                      <th>Kg/caja</th>
                      <th>Unid/caja</th>
                      <th>Valor kg</th>
                      <th>Valor caja</th>
                      <th>Stock</th>
                      <th>Cajas</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.map(product => (
                      <tr key={product.id}>
                        <td><strong>{product.code}</strong></td>
                        <td><b>{product.name}</b><span>{product.cut} / {product.conservation}</span></td>
                        <td>{product.animal}</td>
                        <td>{number.format(product.kgPerBox)} kg</td>
                        <td>{product.unitsPerBox}</td>
                        <td>{currency.format(product.valuePerKg)}</td>
                        <td>{currency.format(boxValue(product))}</td>
                        <td>{product.stockBoxes}</td>
                        <td>
                          <div className="sales-qty-control">
                            <button onClick={() => setBoxes(product.id, (cart[product.id] || 0) - 1)} aria-label="Restar caja"><Minus size={15} /></button>
                            <input type="number" value={cart[product.id] || 0} onChange={event => setBoxes(product.id, Number(event.target.value))} />
                            <button onClick={() => setBoxes(product.id, (cart[product.id] || 0) + 1)} aria-label="Sumar caja"><Plus size={15} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {filteredProducts.length === 0 && (
                  <div className="sales-empty-table">No hay productos para el filtro seleccionado.</div>
                )}
              </div>
            </section>

            <aside className="sales-cart-card">
              <div className="sales-section-heading">
                <ShoppingCart size={20} />
                <h2>Carro</h2>
              </div>
              <div className="sales-cart-lines">
                {cartLines.length === 0 && <p className="sales-empty-cart">No hay productos agregados.</p>}
                {cartLines.map(line => (
                  <div className="sales-cart-line" key={line.product.id}>
                    <div>
                      <strong>{line.product.name}</strong>
                      <span>{line.boxes} cajas / {number.format(line.kilos)} kg / {line.units} unidades</span>
                    </div>
                    <b>{currency.format(line.total)}</b>
                    <button onClick={() => setBoxes(line.product.id, 0)} aria-label="Quitar del carro"><Trash2 size={16} /></button>
                  </div>
                ))}
              </div>

              <div className="sales-cart-summary">
                <div><span>Cajas</span><strong>{totals.boxes}</strong></div>
                <div><span>Kilos</span><strong>{number.format(totals.kilos)} kg</strong></div>
                <div><span>Unidades</span><strong>{totals.units}</strong></div>
                <div className="sales-cart-total"><span>Total neto referencial</span><strong>{currency.format(totals.amount)}</strong></div>
              </div>

              <button className="sales-quote-button"><Check size={18} />Confirmar pedido</button>
            </aside>
          </div>
        </main>
      </section>
    </div>
  );
}
