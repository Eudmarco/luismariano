
import React, { useEffect } from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import SocialProof from './SocialProof';
import Contact from './Contact';

const Home: React.FC = () => {
  // Handle scrolling to section if URL has hash (e.g., loaded from a redirect)
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to ensure render
    }
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <SocialProof />
      <Contact />
    </>
  );
};

export default Home;
