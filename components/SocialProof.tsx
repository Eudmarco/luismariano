import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS, IMAGES } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SocialProof: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.socialProofBg} 
            alt="Fundo Depoimentos" 
            className="w-full h-full object-cover object-top"
          />
          {/* Heavy gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-slate-950/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 z-0"></div>

      <div 
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que dizem nossos parceiros</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-md shadow-xl hover:bg-slate-800/60 transition-colors">
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <Quote className="text-teal-500/40 mb-4" size={48} />
              <p className="text-slate-200 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-teal-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Logos area could go here, simplified as text for now */}
        <div className="mt-20 pt-10 border-t border-slate-800/50 text-center">
             <p className="text-slate-400 text-sm uppercase tracking-widest mb-6">Áreas de Atuação Principal</p>
             <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-80">
                <span className="text-xl font-bold text-slate-300">SÃO PAULO</span>
                <span className="text-xl font-bold text-slate-300">ABC PAULISTA</span>
                <span className="text-xl font-bold text-slate-300">CAMPINAS</span>
                <span className="text-xl font-bold text-slate-300">BAIXADA SANTISTA</span>
                <span className="text-xl font-bold text-slate-300">BRAGANÇA PAULISTA</span>
                <span className="text-xl font-bold text-slate-300">JUNDIAÍ</span>
             </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;