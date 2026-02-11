import React from 'react';
import { COMPANY_INFO } from '../constants';
import { useRouter } from '../RouterContext';

const Footer: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="text-xl font-bold text-white tracking-tighter block mb-4">
              Eng.<span className="text-teal-600">LuizMariano</span>
            </span>
            <p className="text-sm mb-4">
              Soluções de engenharia com foco em segurança, conformidade e responsabilidade técnica.
            </p>
            <div className="flex flex-col items-start gap-2">
                <button 
                onClick={() => navigate('/privacidade')}
                className="text-xs text-slate-500 hover:text-teal-400 underline decoration-slate-700 underline-offset-4"
                >
                Política de Privacidade e Termos de Uso
                </button>
                <button 
                onClick={() => navigate('/cookies')}
                className="text-xs text-slate-500 hover:text-teal-400 underline decoration-slate-700 underline-offset-4"
                >
                Política de Cookies
                </button>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li>Reclassificação de Monta</li>
              <li>POMC (Gestão de Frotas)</li>
              <li>Inspeções NR13</li>
              <li>Adequação NR12</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>{COMPANY_INFO.phone}</li>
              <li>{COMPANY_INFO.email}</li>
              <li>São Paulo, ABC e Litoral</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-900 pt-8 text-center text-xs space-y-2">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{' '}
            <a 
              href="https://esgrmkt.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-teal-500 hover:text-teal-400 transition-colors"
            >
              ESGR
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;