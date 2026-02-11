import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { useRouter } from '../RouterContext';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { navigate } = useRouter();

  useEffect(() => {
    // Check if user has already accepted cookies
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 animate-slide-up">
      <div className="max-w-7xl mx-auto bg-slate-900/95 backdrop-blur-md text-white rounded-xl shadow-2xl border border-slate-700 p-6 md:flex items-center justify-between gap-6">
        
        <div className="flex items-start gap-4 mb-4 md:mb-0">
          <div className="bg-teal-500/10 p-2 rounded-lg text-teal-400 hidden sm:block">
            <Cookie size={24} />
          </div>
          <div className="text-sm text-slate-300">
            <h4 className="text-white font-bold mb-1">Nós valorizamos sua privacidade</h4>
            <p>
              Utilizamos cookies para aprimorar sua experiência de navegação e analisar nosso tráfego. Ao clicar em "Aceitar", você concorda com nossa{' '}
              <button 
                onClick={() => navigate('/cookies')}
                className="text-teal-400 hover:text-teal-300 underline decoration-teal-400/30 underline-offset-2"
              >
                Política de Cookies
              </button>.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <button 
             onClick={() => navigate('/cookies')}
             className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            Preferências
          </button>
          <button
            onClick={handleAccept}
            className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg hover:shadow-teal-500/25 whitespace-nowrap"
          >
            Aceitar Cookies
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="md:hidden text-slate-400 hover:text-white p-2"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default CookieBanner;