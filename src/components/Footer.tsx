import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (platform: string) => {
    alert(`Redirecting to Aayush's ${platform}...`);
  };

  return (
    <footer className="bg-surface-container-highest dark:bg-inverse-surface border-t-4 border-brand-dark dark:border-brand-light w-full py-8 px-4 md:px-16 flex flex-col md:flex-row justify-between items-center gap-6 select-none transition-colors">
      
      {/* Brand logo */}
      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="text-2xl font-headline font-black text-brand-dark dark:text-inverse-on-surface tracking-tighter cursor-pointer hover:scale-102 transition-transform"
      >
        AAYUSH<span className="text-primary dark:text-brand-yellow">.DEV</span>
      </div>

      {/* Credit line */}
      <div className="font-headline text-center">
        <span className="text-brand-dark dark:text-inverse-on-surface font-bold underline decoration-brand-dark dark:decoration-brand-yellow decoration-2 underline-offset-4 text-sm md:text-base">
          © {currentYear} AAYUSH — BUILT WITH GRIT
        </span>
      </div>

      {/* Links */}
      <div className="flex gap-6 font-mono text-sm">
        <a
          href="https://github.com/AayushDolasiya"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-dark/70 dark:text-brand-light/70 hover:text-brand-dark dark:hover:text-brand-light font-bold hover:underline transition-colors cursor-pointer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/aayush-dolasiya-498a2241a/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-dark/70 dark:text-brand-light/70 hover:text-brand-dark dark:hover:text-brand-light font-bold hover:underline transition-colors cursor-pointer"
        >
          LinkedIn
        </a>
        <a
          href="mailto:aayushdolasiya226@gmail.com"
          className="text-brand-dark/70 dark:text-brand-light/70 hover:text-brand-dark dark:hover:text-brand-light font-bold hover:underline transition-colors cursor-pointer"
        >
          Email
        </a>
      </div>

    </footer>
  );
}
