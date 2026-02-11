import React from 'react';
import { SERVICES } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Services: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-teal-600 font-bold tracking-wide uppercase text-sm mb-3">Nossos Serviços</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Soluções Completas em Engenharia</h3>
          <p className="text-slate-600 text-lg">
            Atuamos com rigor técnico para entregar laudos e inspeções que garantem a conformidade legal e a segurança operacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 group"
            >
              <div className="w-14 h-14 bg-teal-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors">
                <service.icon className="text-teal-600 group-hover:text-white transition-colors" size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;