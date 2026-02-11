import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, COMPANY_INFO, IMAGES } from '../constants';
import { useRouter } from '../RouterContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentPage, navigate } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (href.startsWith('#')) {
      // It's a section on the Home page
      const targetId = href.substring(1);
      
      if (currentPage === 'home') {
        // Already on home, just scroll
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Not on home, navigate to home then scroll (handled by Home component via URL hash)
        navigate('/' + href);
      }
    } else {
      // It's an external link or another page (if we had non-hash links)
      if (href.startsWith('http')) {
        window.open(href, '_blank');
      } else {
        navigate(href);
      }
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || currentPage !== 'home' ? 'bg-slate-900 shadow-lg py-2' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-4">
             <img 
               src={IMAGES.logo} 
               alt="Eng. Luiz Mariano" 
               className={`rounded-lg object-cover object-top shadow-sm ring-1 ring-white/20 transition-all duration-300 ${
                 isScrolled ? 'h-14 w-14 md:h-16 md:w-16' : 'h-20 w-20 md:h-28 md:w-28'
               }`}
             />
            <a 
              href="/" 
              onClick={(e) => handleNavClick(e, '#hero')} 
              className={`font-bold text-white tracking-tighter cursor-pointer transition-all duration-300 ${
                 isScrolled ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'
              }`}
            >
              Eng.<span className="text-teal-400">LuizMariano</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-300 hover:text-teal-400 transition-colors text-sm font-medium uppercase tracking-wide cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-600 hover:bg-teal-500 text-white px-5 py-2.5 rounded-md font-semibold transition-all shadow-lg hover:shadow-teal-500/30 flex items-center gap-2"
            >
              <Phone size={18} />
              Avaliação Técnica
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
             <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-center bg-teal-600 hover:bg-teal-500 text-white px-5 py-3 rounded-md font-bold"
            >
              Solicite Agora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;