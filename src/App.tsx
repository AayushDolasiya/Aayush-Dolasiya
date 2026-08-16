import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import IntroAnimation from './components/IntroAnimation';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

export default function App() {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(false);
  const [hasPlayedIntro, setHasPlayedIntro] = useState(false);

  // Read dark mode state from local storage or default to false
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('aayush_portfolio_darkmode');
    return saved === 'true';
  });

  // Decide if we should show intro animation (only on very first load of home page)
  useEffect(() => {
    if (location.pathname === '/' && !hasPlayedIntro) {
      setShowIntro(true);
    }
  }, [location.pathname, hasPlayedIntro]);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setHasPlayedIntro(true);
  };

  // Sync dark mode class on document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('aayush_portfolio_darkmode', String(darkMode));
  }, [darkMode]);

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro && <IntroAnimation key="intro" onComplete={handleIntroComplete} />}
      </AnimatePresence>

      <div className="bg-brand-light dark:bg-brand-dark min-h-screen text-brand-dark dark:text-brand-light transition-colors duration-150 flex flex-col selection:bg-brand-yellow selection:text-brand-dark">
        
      {/* Header Navigation */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Route Content Canvas */}
      <main className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {/* Footer copyright and social triggers */}
      <Footer />

      </div>
    </>
  );
}

