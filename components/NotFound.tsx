
import React from 'react';
import { AlertTriangle, ArrowLeft } from 'lucide-react';
import { useRouter } from '../RouterContext';

const NotFound: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <AlertTriangle className="text-yellow-500 w-24 h-24 mx-auto mb-6" />
        
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-bold text-slate-300 mb-6">Página Não Encontrada</h2>
        
        <p className="text-slate-400 mb-10 leading-relaxed">
          O endereço que você tentou acessar não existe ou foi removido. Verifique a URL ou retorne para a página principal.
        </p>

        <button 
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-bold py-3 px-8 rounded-lg transition-all"
        >
          <ArrowLeft size={20} />
          Voltar ao Início
        </button>
      </div>
    </div>
  );
};

export default NotFound;
