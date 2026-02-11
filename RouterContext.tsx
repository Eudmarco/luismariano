import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Page = 'home' | 'privacy' | 'thank-you' | '404' | 'cookies';

interface RouterContextType {
  currentPage: Page;
  navigate: (path: string) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const RouterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      if (path === '/' || path === '/index.html' || path.startsWith('/#')) {
        setCurrentPage('home');
      } else if (path.includes('/privacidade')) {
        setCurrentPage('privacy');
      } else if (path.includes('/obrigado')) {
        setCurrentPage('thank-you');
      } else if (path.includes('/cookies')) {
        setCurrentPage('cookies');
      } else {
        // Fallback seguro: se a rota não for reconhecida, manda pra home em vez de 404 direto,
        // a menos que seja explicitamente um erro. Para SPA simples, isso evita erros de reload.
        // Se quiser 404 estrito, mude para setCurrentPage('404');
        setCurrentPage('home');
      }
    };

    // Handle initial load
    handleLocationChange();

    // Handle back/forward browser buttons
    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    
    if (path === '/' || path.startsWith('/#')) {
      setCurrentPage('home');
    } else if (path === '/privacidade') {
      setCurrentPage('privacy');
    } else if (path === '/obrigado') {
      setCurrentPage('thank-you');
    } else if (path === '/cookies') {
      setCurrentPage('cookies');
    } else {
      setCurrentPage('404');
    }
    
    window.scrollTo(0, 0);
  };

  return (
    <RouterContext.Provider value={{ currentPage, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (context === undefined) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};