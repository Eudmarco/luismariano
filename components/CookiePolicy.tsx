import React, { useEffect } from 'react';
import { ArrowLeft, Cookie, ShieldCheck, Settings } from 'lucide-react';
import { useRouter } from '../RouterContext';
import { COMPANY_INFO } from '../constants';

const CookiePolicy: React.FC = () => {
  const { navigate } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Header */}
        <div className="mb-8">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-teal-600 font-medium hover:underline group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Voltar para o Início
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          
          <div className="bg-slate-900 p-8 md:p-12 text-white">
             <div className="bg-teal-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-teal-500/20">
                <Cookie size={32} className="text-teal-400" />
             </div>
             <h1 className="text-3xl md:text-4xl font-bold mb-4">Política de Cookies</h1>
             <p className="text-slate-400 text-lg">
               Entenda como utilizamos cookies para melhorar sua experiência no site {COMPANY_INFO.domain}.
             </p>
          </div>

          <div className="p-8 md:p-12 space-y-12">
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="text-teal-600" />
                O que são Cookies?
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Cookies são pequenos arquivos de texto salvos no seu computador ou dispositivo móvel quando você visita um site. Eles permitem que o site "lembre" de suas ações e preferências (como login, idioma, tamanho da fonte e outras preferências de exibição) ao longo do tempo, para que você não precise digitá-las novamente sempre que retornar ao site ou navegar de uma página para outra.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Settings className="text-teal-600" />
                Como utilizamos os Cookies
              </h2>
              <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-2">Cookies Estritamente Necessários</h3>
                  <p className="text-slate-600 text-sm">
                    Estes cookies são essenciais para que você possa navegar pelo site e usar seus recursos. Sem esses cookies, os serviços solicitados não podem ser fornecidos.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-2">Cookies de Desempenho</h3>
                  <p className="text-slate-600 text-sm">
                    Estes cookies coletam informações sobre como os visitantes usam um site, por exemplo, quais páginas os visitantes acessam com mais frequência e se recebem mensagens de erro de páginas da web. Esses cookies não coletam informações que identificam um visitante. Todas as informações que esses cookies coletam são agregadas e, portanto, anônimas.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-2">Cookies de Funcionalidade</h3>
                  <p className="text-slate-600 text-sm">
                    Estes cookies permitem que o site se lembre das escolhas que você faz (como seu nome de usuário, idioma ou a região em que você está) e forneça recursos aprimorados e mais pessoais.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Gerenciamento de Cookies</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Você pode controlar e/ou excluir cookies conforme desejar. Você pode excluir todos os cookies que já estão no seu computador e pode definir a maioria dos navegadores para impedir que eles sejam colocados. Se você fizer isso, no entanto, poderá ter que ajustar manualmente algumas preferências sempre que visitar um site e alguns serviços e funcionalidades podem não funcionar.
              </p>
            </section>

             <div className="pt-8 border-t border-slate-100">
               <button 
                 onClick={() => navigate('/privacidade')}
                 className="text-teal-600 font-semibold hover:underline"
               >
                 Ver Política de Privacidade Completa
               </button>
             </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;