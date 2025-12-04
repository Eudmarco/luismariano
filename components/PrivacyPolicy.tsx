import React, { useEffect } from 'react';
import { Shield, ArrowLeft, FileText, Lock, Cookie } from 'lucide-react';
import { useRouter } from '../RouterContext';
import { COMPANY_INFO } from '../constants';

const PrivacyPolicy: React.FC = () => {
  const { navigate } = useRouter();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-teal-600 font-medium hover:underline group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Voltar para o Início
          </button>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-2 text-sm">
            <button onClick={() => scrollToSection('termos')} className="px-3 py-1 bg-white border border-slate-200 rounded-full hover:bg-slate-100 transition-colors">Termos de Uso</button>
            <button onClick={() => scrollToSection('privacidade')} className="px-3 py-1 bg-white border border-slate-200 rounded-full hover:bg-slate-100 transition-colors">Privacidade</button>
            <button onClick={() => navigate('/cookies')} className="px-3 py-1 bg-white border border-slate-200 rounded-full hover:bg-slate-100 transition-colors text-teal-600 font-medium">Política de Cookies</button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          
          {/* Header Banner */}
          <div className="bg-slate-900 p-8 md:p-12 text-white">
             <div className="bg-teal-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-teal-500/20">
                <Shield size={32} className="text-teal-400" />
             </div>
             <h1 className="text-3xl md:text-4xl font-bold mb-4">Políticas e Termos Legais</h1>
             <p className="text-slate-400 text-lg">
               Transparência e segurança jurídica para os usuários do site {COMPANY_INFO.domain}.
             </p>
             <p className="text-sm text-slate-500 mt-4">Última atualização: Janeiro de 2024</p>
          </div>

          <div className="p-8 md:p-12 space-y-16">
            
            {/* Section 1: Terms of Use */}
            <section id="termos" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <FileText className="text-teal-600" size={24} />
                <h2 className="text-2xl font-bold text-slate-900">1. Termos de Uso</h2>
              </div>
              
              <div className="prose prose-slate max-w-none text-slate-600">
                <p>
                  Ao acessar o site <strong>{COMPANY_INFO.name}</strong>, acessível através do domínio <span className="text-teal-600">{COMPANY_INFO.domain}</span>, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site.
                </p>
                
                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">1.1 Licença de Uso</h3>
                <p>
                  É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site de {COMPANY_INFO.name}, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Modificar ou copiar os materiais;</li>
                  <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
                  <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site;</li>
                  <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
                  <li>Transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
                </ul>

                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">1.2 Isenção de Responsabilidade</h3>
                <p>
                  Os materiais no site de {COMPANY_INFO.name} são fornecidos 'como estão'. {COMPANY_INFO.name} não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
                </p>
              </div>
            </section>

            {/* Section 2: Privacy Policy */}
            <section id="privacidade" className="scroll-mt-24">
               <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <Lock className="text-teal-600" size={24} />
                <h2 className="text-2xl font-bold text-slate-900">2. Política de Privacidade</h2>
              </div>

              <div className="prose prose-slate max-w-none text-slate-600">
                <p>
                  Sua privacidade é importante para nós. É política do {COMPANY_INFO.name} respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site {COMPANY_INFO.domain}, e outros sites que possuímos e operamos.
                </p>

                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">2.1 Informações que Coletamos</h3>
                <p>
                  Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Os dados coletados através do nosso formulário de contato podem incluir:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Nome completo;</li>
                  <li>Endereço de e-mail;</li>
                  <li>Número de telefone/WhatsApp;</li>
                  <li>Informações sobre o serviço de interesse.</li>
                </ul>

                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">2.2 Uso das Informações</h3>
                <p>
                  As informações coletadas são utilizadas exclusivamente para:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Responder às suas solicitações de orçamento e dúvidas técnicas;</li>
                  <li>Fornecer, operar e manter nosso site;</li>
                  <li>Melhorar, personalizar e expandir nosso site;</li>
                  <li>Compreender e analisar como você usa nosso site.</li>
                </ul>
              </div>
            </section>

             {/* Link to Cookie Policy */}
            <section className="bg-teal-50 p-6 rounded-xl border border-teal-100 flex items-center justify-between gap-4 flex-wrap md:flex-nowrap">
                <div className="flex items-center gap-4">
                    <div className="bg-white p-3 rounded-lg text-teal-600 shadow-sm">
                        <Cookie size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900">Política de Cookies</h3>
                        <p className="text-sm text-slate-600">Veja detalhes sobre como utilizamos cookies.</p>
                    </div>
                </div>
                <button 
                    onClick={() => navigate('/cookies')}
                    className="bg-white border border-slate-200 text-teal-600 font-bold px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap"
                >
                    Ver Política de Cookies
                </button>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;