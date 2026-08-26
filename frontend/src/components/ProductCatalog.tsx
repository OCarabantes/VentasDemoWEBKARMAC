import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type Category = 'Todos' | 'Vacuno' | 'Cerdo' | 'Aves' | 'Madurados';

interface Product {
  id: string;
  name: string;
  category: Exclude<Category, 'Todos'>;
  specs: string;
  imageUrl: string;
}

const productsData: Product[] = [
  {
    id: '1',
    name: 'Lomo Vetado Premium',
    category: 'Vacuno',
    specs: 'Envasado al vacío • 1.5 - 2.5 kg',
    imageUrl: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    name: 'Costillar de Cerdo',
    category: 'Cerdo',
    specs: 'Fresco • 1.2 - 2.0 kg',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    name: 'Cortes Seleccionados',
    category: 'Vacuno',
    specs: 'Corte a medida • 500g - 1kg',
    imageUrl: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    name: 'Filete Envasado',
    category: 'Vacuno',
    specs: 'Envasado al vacío • 1.8 - 2.2 kg',
    imageUrl: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '5',
    name: 'Pechuga de Pollo',
    category: 'Aves',
    specs: 'Fresco • 2 - 3 kg (Caja)',
    imageUrl: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '6',
    name: 'Tomahawk Madurado',
    category: 'Madurados',
    specs: 'Dry Aged 30 días • 800g - 1.2kg',
    imageUrl: 'https://images.unsplash.com/photo-1594046243098-0fceea9d451e?auto=format&fit=crop&w=800&q=80',
  }
];

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState<Category>('Todos');

  const categories: Category[] = ['Todos', 'Vacuno', 'Cerdo', 'Aves', 'Madurados'];

  const filteredProducts = activeCategory === 'Todos' 
    ? productsData 
    : productsData.filter(product => product.category === activeCategory);

  return (
    <section id="catalogo" className="catalog">
      <div className="container">
        <div className="section-heading text-center" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Nuestro Catálogo</h2>
          <p className="section-subtitle" style={{ margin: '0 auto var(--spacing-lg)' }}>
            Cortes seleccionados con los más altos estándares de calidad, listos para abastecer su negocio.
          </p>
        </div>

        <div className="catalog-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="catalog-grid">
          {filteredProducts.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-image-container">
                <img src={product.imageUrl} alt={product.name} className="product-image" />
                <span className="product-tag">{product.category}</span>
              </div>
              <div className="product-content">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-specs">{product.specs}</p>
                <Link to="/contacto" className="btn btn-outline product-action" style={{ border: '1px solid var(--color-primary)', color: 'var(--color-primary)' }}>
                  Cotizar Rápido
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
