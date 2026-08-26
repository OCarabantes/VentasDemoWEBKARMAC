import React from 'react';
import { ThermometerSnowflake, ShieldCheck, Truck, Flame } from 'lucide-react';

export default function ValueProps() {
  const props = [
    {
      icon: <ThermometerSnowflake size={32} />,
      title: "Cadena de Frío Monitoreada",
      desc: "Temperatura controlada 24/7 para garantizar la máxima frescura al recibir tu pedido."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Inocuidad Garantizada",
      desc: "Cumplimos con las normas de calidad más estrictas para darte total tranquilidad."
    },
    {
      icon: <Truck size={32} />,
      title: "Entregas Precisas y a Tiempo",
      desc: "Logística dedicada para que tu cocina o local nunca se queden sin abastecimiento."
    },
    {
      icon: <Flame size={32} />,
      title: "Cortes a Tu Medida",
      desc: "Nos adaptamos a tu receta: gramaje, formato y porcionado exacto según lo necesites."
    }
  ];

  return (
    <section className="value-props">
      <div className="container">
        <div className="value-props-grid">
          {props.map((prop, index) => (
            <div key={index} className="value-prop-card">
              <div className="value-prop-icon">
                {prop.icon}
              </div>
              <h3 className="value-prop-title">{prop.title}</h3>
              <p className="value-prop-desc">{prop.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
