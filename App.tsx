import React from 'react';
import { RouterProvider, useRouter } from './RouterContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiePolicy from './components/CookiePolicy';
import ThankYou from './components/ThankYou';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

// Main content wrapper that decides what to render
const AppContent: React.FC = () => {
  const { currentPage } = useRouter();

  // Floating WhatsApp Button for Mobile
  const WhatsAppButton = (
    <a
      href="https://wa.me/5511963358498"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all md:hidden animate-bounce"
      aria-label="Contato WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    </a>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Navbar is persistent across all pages */}
      <Navbar />

      <main className="flex-grow">
        {currentPage === 'home' && <Home />}
        {currentPage === 'privacy' && <PrivacyPolicy />}
        {currentPage === 'cookies' && <CookiePolicy />}
        {currentPage === 'thank-you' && <ThankYou />}
        {currentPage === '404' && <NotFound />}
      </main>

      {/* Footer is persistent */}
      <Footer />
      
      {/* Cookie Consent Banner */}
      <CookieBanner />

      {WhatsAppButton}
    </div>
  );
};

function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}

export default App;