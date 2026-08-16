import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import IntroAnimation from './components/IntroAnimation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import SelectedWorks from './components/SelectedWorks';
import TechStack from './components/TechStack';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  // Read dark mode state from local storage or default to false
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('aayush_portfolio_darkmode');
    return saved === 'true';
  });

  // Sync dark mode class on document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('aayush_portfolio_darkmode', String(darkMode));
  }, [darkMode]);

  // Handler to scroll to work section smoothly
  const handleViewWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro && <IntroAnimation key="intro" onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      <div className="bg-brand-light dark:bg-brand-dark min-h-screen text-brand-dark dark:text-brand-light transition-colors duration-150 flex flex-col selection:bg-brand-yellow selection:text-brand-dark">
        
      {/* Header Navigation */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Page Canvas */}
      <main className="flex-1 flex flex-col">
        
        {/* Intro Hero Section */}
        <Hero onViewWork={handleViewWork} />

        {/* Scrolling Banner */}
        <Marquee />

        {/* Portfolio Projects list */}
        <SelectedWorks />

        {/* Interactive tech cockpit */}
        <TechStack />

        {/* Interactive form & guestbook logger */}
        <ContactForm />

      </main>

      {/* Footer copyright and social triggers */}
      <Footer />

      </div>
    </>
  );
}
