import React, { useEffect, useState } from 'react';
import { Sun, Moon, Briefcase, Code, MessageSquare, User, X, Home, Menu } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Wait for render
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  const handleHomeClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleAboutClick = () => {
    navigate('/about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav
      id="top-navbar"
      className={`fixed top-0 left-0 w-full z-40 flex justify-between items-center px-4 md:px-16 h-16 transition-all duration-200 border-b-4 border-brand-dark dark:border-brand-light bg-brand-light dark:bg-inverse-surface ${scrolled ? 'shadow-[4px_4px_0px_0px_#161d18] dark:shadow-[4px_4px_0px_0px_#ebf3ea]' : 'shadow-[6px_6px_0px_0px_#161d18] dark:shadow-[6px_6px_0px_0px_#ebf3ea]'
        }`}
    >
      {/* Left: Logo */}
      <div className="flex-1 flex justify-start">
        <button
          aria-label="Home"
          onClick={handleHomeClick}
          className="text-2xl md:text-3xl font-headline font-extrabold text-brand-dark dark:text-inverse-on-surface tracking-tighter cursor-pointer hover:scale-101 active:scale-99 transition-all duration-150 whitespace-nowrap"
        >
          AAYUSH<span className="text-primary dark:text-brand-yellow">.DEV</span>
        </button>
      </div>

      {/* Center: Nav items (Desktop) */}
      <div className="hidden md:flex flex-none justify-center items-center gap-2 lg:gap-6 font-mono text-sm font-bold">
        <button
          onClick={handleHomeClick}
          className={`flex items-center gap-2 px-3 py-1.5 border-2 rounded-md transition-all active:translate-x-[1px] active:translate-y-[1px] ${location.pathname === '/' ? 'border-brand-dark dark:border-brand-dark bg-brand-yellow text-brand-dark' : 'border-transparent text-brand-dark dark:text-inverse-on-surface hover:bg-brand-yellow dark:hover:bg-brand-yellow dark:hover:text-brand-dark hover:border-brand-dark dark:hover:border-brand-dark'}`}
        >
          <Home size={16} />
          Home
        </button>
        <button
          onClick={handleAboutClick}
          className={`flex items-center gap-2 px-3 py-1.5 border-2 rounded-md transition-all active:translate-x-[1px] active:translate-y-[1px] ${location.pathname === '/about' ? 'border-brand-dark dark:border-brand-dark bg-brand-yellow text-brand-dark' : 'border-transparent text-brand-dark dark:text-inverse-on-surface hover:bg-brand-yellow dark:hover:bg-brand-yellow dark:hover:text-brand-dark hover:border-brand-dark dark:hover:border-brand-dark'}`}
        >
          <User size={16} />
          About
        </button>
        <button
          onClick={() => scrollToSection('work')}
          className="flex items-center gap-2 text-brand-dark dark:text-inverse-on-surface hover:bg-brand-yellow dark:hover:bg-brand-yellow dark:hover:text-brand-dark px-3 py-1.5 border-2 border-transparent hover:border-brand-dark dark:hover:border-brand-dark rounded-md transition-all active:translate-x-[1px] active:translate-y-[1px]"
        >
          <Briefcase size={16} />
          Work
        </button>
        <button
          onClick={() => scrollToSection('tech')}
          className="flex items-center gap-2 text-brand-dark dark:text-inverse-on-surface hover:bg-brand-yellow dark:hover:bg-brand-yellow dark:hover:text-brand-dark px-3 py-1.5 border-2 border-transparent hover:border-brand-dark dark:hover:border-brand-dark rounded-md transition-all active:translate-x-[1px] active:translate-y-[1px]"
        >
          <Code size={16} />
          Tech
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="flex items-center gap-2 text-brand-dark dark:text-inverse-on-surface hover:bg-brand-yellow dark:hover:bg-brand-yellow dark:hover:text-brand-dark px-3 py-1.5 border-2 border-transparent hover:border-brand-dark dark:hover:border-brand-dark rounded-md transition-all active:translate-x-[1px] active:translate-y-[1px]"
        >
          <MessageSquare size={16} />
          Contact
        </button>
      </div>

      {/* Right: Hamburger Menu Toggle (Mobile Only) */}
      <div className="flex-1 flex justify-end">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-brand-dark dark:text-inverse-on-surface hover:bg-brand-yellow dark:hover:bg-brand-yellow dark:hover:text-brand-dark border-2 border-transparent hover:border-brand-dark dark:hover:border-brand-dark rounded-md transition-all"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-brand-light dark:bg-inverse-surface border-b-4 border-brand-dark dark:border-brand-light shadow-[4px_4px_0px_0px_#161d18] dark:shadow-[4px_4px_0px_0px_#ebf3ea] flex flex-col md:hidden z-30 font-mono text-sm font-bold">
          <button
            onClick={handleHomeClick}
            className={`flex items-center gap-3 px-6 py-4 border-b-2 border-brand-dark/10 dark:border-brand-light/10 transition-colors ${location.pathname === '/' ? 'bg-brand-yellow text-brand-dark' : 'text-brand-dark dark:text-inverse-on-surface hover:bg-brand-yellow dark:hover:bg-brand-yellow dark:hover:text-brand-dark'}`}
          >
            <Home size={18} /> Home
          </button>
          <button
            onClick={handleAboutClick}
            className={`flex items-center gap-3 px-6 py-4 border-b-2 border-brand-dark/10 dark:border-brand-light/10 transition-colors ${location.pathname === '/about' ? 'bg-brand-yellow text-brand-dark' : 'text-brand-dark dark:text-inverse-on-surface hover:bg-brand-yellow dark:hover:bg-brand-yellow dark:hover:text-brand-dark'}`}
          >
            <User size={18} /> About
          </button>
          <button
            onClick={() => scrollToSection('work')}
            className="flex items-center gap-3 text-brand-dark dark:text-inverse-on-surface hover:bg-brand-yellow dark:hover:bg-brand-yellow dark:hover:text-brand-dark px-6 py-4 border-b-2 border-brand-dark/10 dark:border-brand-light/10 active:bg-brand-yellow transition-colors"
          >
            <Briefcase size={18} /> Work
          </button>
          <button
            onClick={() => scrollToSection('tech')}
            className="flex items-center gap-3 text-brand-dark dark:text-inverse-on-surface hover:bg-brand-yellow dark:hover:bg-brand-yellow dark:hover:text-brand-dark px-6 py-4 border-b-2 border-brand-dark/10 dark:border-brand-light/10 active:bg-brand-yellow transition-colors"
          >
            <Code size={18} /> Tech
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center gap-3 text-brand-dark dark:text-inverse-on-surface hover:bg-brand-yellow dark:hover:bg-brand-yellow dark:hover:text-brand-dark px-6 py-4 active:bg-brand-yellow transition-colors"
          >
            <MessageSquare size={18} /> Contact
          </button>
        </div>
      )}
    </nav>
  );
}
