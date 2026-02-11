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
          className="w-full h-full object-cover object-top"
          width={1920}
          height={1080}
          fetchPriority="high"
          loading="eager"
        />
        {/* Reduced opacity to 10% - Image will be extremely visible */}
        <div className="absolute inset-0 bg-slate-900/10"></div>
        {/* Gradient only at the very bottom for transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-teal-600/90 border border-teal-400/50 text-white text-sm font-bold mb-6 uppercase tracking-wider backdrop-blur-md shadow-xl">
            Engenharia e Perícia Técnica
          </span>
          {/* Heavy text shadow added to ensure readability on bright background */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)]">
            Laudos de Responsabilidade Técnica (ART) com <span className="text-teal-300 drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">Segurança</span> e <span className="text-teal-300 drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">Conformidade</span>.
          </h1>
          <p className="text-lg sm:text-xl text-white mb-8 max-w-3xl mx-auto drop-shadow-[0_3px_3px_rgba(0,0,0,0.9)] font-bold bg-black/10 rounded-lg py-1 px-4 backdrop-blur-[2px]">
            Seu especialista em Reclassificação de Monta, Inspeções NR13 e NR12. {COMPANY_INFO.address}.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 hover:bg-teal-500 hover:shadow-lg hover:shadow-teal-500/40 hover:-translate-y-1 flex items-center gap-2 shadow-black/50 shadow-2xl border border-teal-500/30"
            >
              Solicite uma Avaliação Técnica
              <ArrowRight className="group-hover:translate-x-1 group-hover:text-teal-100 transition-all duration-300" />
            </a>
            <a
              href="#services"
              onClick={scrollToServices}
              className="px-8 py-4 rounded-lg text-lg font-bold text-white border-2 border-white/60 bg-black/40 hover:bg-black/60 hover:border-white transition-all cursor-pointer backdrop-blur-md shadow-black/30 shadow-xl"
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