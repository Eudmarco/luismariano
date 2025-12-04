import React from 'react';
import { ArrowRight } from 'lucide-react';
import { COMPANY_INFO, IMAGES } from '../constants';

const Hero: React.FC = () => {
  
  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Engenharia e Perícia Técnica - Luiz Mariano"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          fetchPriority="high"
          loading="eager"
        />
        <div className="absolute inset-0 bg-slate-900/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-sm font-semibold mb-6 uppercase tracking-wider">
            Engenharia e Perícia Técnica
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Laudos de Responsabilidade Técnica (ART) com <span className="text-teal-400">Segurança</span> e <span className="text-teal-400">Conformidade</span>.
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Seu especialista em Reclassificação de Monta, Inspeções NR13 e NR12. {COMPANY_INFO.address}.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 hover:bg-teal-500 hover:shadow-lg hover:shadow-teal-500/40 hover:-translate-y-1 flex items-center gap-2"
            >
              Solicite uma Avaliação Técnica
              <ArrowRight className="group-hover:translate-x-1 group-hover:text-teal-200 transition-all duration-300" />
            </a>
            <a
              href="#services"
              onClick={scrollToServices}
              className="px-8 py-4 rounded-lg text-lg font-medium text-slate-300 border border-slate-600 hover:bg-slate-800 hover:border-slate-500 transition-all cursor-pointer"
            >
              Conheça os Serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;