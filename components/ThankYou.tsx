
import React from 'react';
import { CheckCircle, ArrowLeft, Phone } from 'lucide-react';
import { useRouter } from '../RouterContext';
import { COMPANY_INFO } from '../constants';

const ThankYou: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center border border-slate-100">
        <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="text-teal-600 w-10 h-10" />
        </div>
        
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Solicitação Recebida!</h1>
        
        <p className="text-slate-600 mb-8 leading-relaxed">
          Obrigado pelo interesse nos serviços de Engenharia do Eng. Luiz Mariano. Se você clicou para abrir o WhatsApp, nossa conversa já deve ter iniciado. Caso contrário, entraremos em contato em breve.
        </p>

        <div className="space-y-4">
          <a 
            href={COMPANY_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-teal-600 hover:bg-teal-500 text-white font-bold py-3 px-6 rounded-lg transition-all"
          >
            <Phone size={20} />
            Falar no WhatsApp
          </a>
          
          <button 
            onClick={() => navigate('/')}
            className="flex items-center justify-center gap-2 w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold py-3 px-6 rounded-lg transition-all"
          >
            <ArrowLeft size={20} />
            Voltar ao Início
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
