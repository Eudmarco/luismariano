import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { IMAGES } from '../constants';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-20 bg-white">
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Expertise Técnica e Segurança Jurídica para sua Empresa
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Sou o Engenheiro Luiz Mariano, especialista em laudos técnicos e inspeções de segurança. Minha missão é garantir que seu patrimônio e operações estejam em total conformidade com as normas vigentes (ABNT, NR).
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Com atuação focada na qualidade técnica e na agilidade, ofereço soluções que vão desde a recuperação documental de veículos até a segurança de grandes instalações industriais.
            </p>

            <div className="space-y-4">
              {[
                "Engenheiro Credenciado CREA",
                "Especialista em Segurança do Trabalho",
                "Atendimento Personalizado e Ágil",
                "Cobertura em SP e Interior"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-teal-600 flex-shrink-0" size={24} />
                  <span className="text-slate-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="relative">
            <div className="absolute -inset-4 bg-teal-100 rounded-xl transform rotate-3 opacity-50"></div>
            <img
              src={IMAGES.nr12Nr13}
              alt="Inspeção Técnica NR12 e NR13"
              className="relative rounded-xl shadow-xl w-full object-cover h-[500px]"
              width={600}
              height={500}
              loading="lazy"
              decoding="async"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-sm p-6 rounded-lg border-l-4 border-teal-500">
              <p className="text-white font-medium italic">
                "A engenharia não é apenas sobre números, é sobre garantir a segurança e a continuidade dos negócios."
              </p>
              <p className="text-teal-400 mt-2 font-bold text-sm">- Eng. Luiz Mariano</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;