import React from 'react';
import { ThermometerSnowflake, ShieldCheck, Truck, Flame } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ValueProps() {
  const props = [
    {
      icon: <ThermometerSnowflake size={28} />,
      title: "Cadena de Frío Monitoreada",
      desc: "Temperatura controlada 24/7 para garantizar la máxima frescura al recibir tu pedido."
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Inocuidad Garantizada",
      desc: "Cumplimos con las normas de calidad más estrictas para darte total tranquilidad."
    },
    {
      icon: <Truck size={28} />,
      title: "Entregas Precisas y a Tiempo",
      desc: "Logística dedicada para que tu cocina o local nunca se queden sin abastecimiento."
    },
    {
      icon: <Flame size={28} />,
      title: "Cortes a Tu Medida",
      desc: "Nos adaptamos a tu receta: gramaje, formato y porcionado exacto según lo necesites."
    }
  ];

  // Individual scroll reveals with staggered delays
  const reveal0 = useScrollReveal({ delay: 0, direction: 'up' });
  const reveal1 = useScrollReveal({ delay: 100, direction: 'up' });
  const reveal2 = useScrollReveal({ delay: 200, direction: 'up' });
  const reveal3 = useScrollReveal({ delay: 300, direction: 'up' });
  const reveals = [reveal0, reveal1, reveal2, reveal3];

  return (
    <section className="value-props">
      <div className="container">
        <div className="value-props-grid">
          {props.map((prop, index) => (
            <div
              key={index}
              ref={reveals[index].ref}
              style={reveals[index].style}
              className="value-prop-card"
            >
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
