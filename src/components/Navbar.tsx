import React, { useEffect, useState } from 'react';
import { Sun, Moon, Briefcase, Code, MessageSquare, User, X, Home } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="top-navbar"
      className={`fixed top-0 left-0 w-full z-40 flex justify-between items-center px-4 md:px-16 h-16 transition-all duration-200 border-b-4 border-brand-dark dark:border-brand-light bg-brand-light dark:bg-inverse-surface ${scrolled ? 'shadow-[4px_4px_0px_0px_#161d18] dark:shadow-[4px_4px_0px_0px_#ebf3ea]' : 'shadow-[6px_6px_0px_0px_#161d18] dark:shadow-[6px_6px_0px_0px_#ebf3ea]'
        }`}
    >
      {/* Logo */}
      <button
        aria-label="Home"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="text-2xl md:text-3xl font-headline font-extrabold text-brand-dark dark:text-inverse-on-surface tracking-tighter cursor-pointer hover:scale-101 active:scale-99 transition-all duration-150"
      >
        AAYUSH<span className="text-primary dark:text-brand-yellow">.DEV</span>
      </button>

      {/* Nav items */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 font-mono text-sm font-bold">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 text-brand-dark dark:text-inverse-on-surface hover:bg-brand-yellow dark:hover:bg-brand-yellow dark:hover:text-brand-dark px-3 py-1.5 border-2 border-transparent hover:border-brand-dark dark:hover:border-brand-dark rounded-md transition-all active:translate-x-[1px] active:translate-y-[1px]"
        >
          <Home size={16} />
          Home
        </button>
        <button
          onClick={() => setShowAboutModal(true)}
          className="flex items-center gap-2 text-brand-dark dark:text-inverse-on-surface hover:bg-brand-yellow dark:hover:bg-brand-yellow dark:hover:text-brand-dark px-3 py-1.5 border-2 border-transparent hover:border-brand-dark dark:hover:border-brand-dark rounded-md transition-all active:translate-x-[1px] active:translate-y-[1px]"
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



      {/* About Modal */}
      {showAboutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="w-full max-w-2xl bg-brand-light dark:bg-inverse-surface border-4 border-brand-dark dark:border-brand-light shadow-[8px_8px_0px_0px_rgba(22,29,24,1)] dark:shadow-[8px_8px_0px_0px_rgba(235,243,234,1)] flex flex-col max-h-[85vh]">

            {/* Modal Header */}
            <div className="bg-brand-yellow dark:bg-primary-container px-4 py-3 border-b-4 border-brand-dark dark:border-brand-light flex justify-between items-center">
              <span className="font-mono font-bold text-brand-dark flex items-center gap-2">
                <User size={18} />
                <span>ABOUT_ME.EXE</span>
              </span>
              <button
                onClick={() => setShowAboutModal(false)}
                className="p-1 hover:bg-brand-dark hover:text-brand-yellow text-brand-dark border-2 border-transparent hover:border-brand-dark rounded-md transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 overflow-y-auto flex-1 text-brand-dark dark:text-brand-light font-sans leading-relaxed selection:bg-brand-yellow selection:text-brand-dark">
              <h2 className="text-3xl md:text-4xl font-headline font-black uppercase mb-6 tracking-tight">
                Hi, I'm Aayush!
              </h2>

              <div className="space-y-4 font-medium text-lg text-brand-dark/80 dark:text-brand-light/90">
                <p>
                  I'm a Full Stack MERN Developer based in India, passionate about building robust, scalable, and visually stunning web applications.
                </p>
                <p>
                  With over 3 years of experience, I specialize in the modern JavaScript ecosystem. I love bridging the gap between design and engineering—ensuring that every pixel looks great while the backend logic runs flawlessly.
                </p>

                <div className="bg-surface-container-lowest dark:bg-brand-dark p-5 border-2 border-brand-dark dark:border-brand-light rounded-lg mt-8 shadow-[4px_4px_0px_0px_rgba(22,29,24,1)] dark:shadow-[4px_4px_0px_0px_rgba(235,243,234,1)]">
                  <h3 className="font-mono font-bold text-brand-dark dark:text-brand-yellow uppercase text-sm mb-3">
                    My Core Philosophy:
                  </h3>
                  <ul className="list-none space-y-2 font-mono text-sm text-brand-dark dark:text-brand-light">
                    <li className="flex items-center gap-2"><span className="text-brand-yellow">►</span> Write clean, maintainable code.</li>
                    <li className="flex items-center gap-2"><span className="text-brand-yellow">►</span> Design for the user first.</li>
                    <li className="flex items-center gap-2"><span className="text-brand-yellow">►</span> Never stop learning.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
