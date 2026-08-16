import React, { useState } from 'react';
import { ArrowDown, FileText, Check, Copy, X, Monitor, Database, Code, MapPin, Globe, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { Typewriter } from './ui/typewriter-text';

interface HeroProps {
  onViewWork: () => void;
}

export default function Hero({ onViewWork }: HeroProps) {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const mockResumeContent = `=====================================================
AAYUSH | FULL STACK MERN DEVELOPER
=====================================================
Email: aayushdolasiya226@gmail.com
GitHub: github.com/AayushDolasiya
LinkedIn: linkedin.com/in/aayush-dolasiya-498a2241a/

[SUMMARY]
High-energy, detail-oriented Full Stack Developer specializing 
in the MERN stack. Expert in crafting responsive, beautiful 
client architectures with pixel-perfect attention to detail.

[TECH STACK]
- Frontend: React.js, Tailwind CSS, Redux, HTML5/CSS3, TypeScript
- Backend: Node.js, Express.js, RESTful APIs, JWT
- Database: MongoDB, Mongoose, PostgreSQL
- Tools: Git, Docker, Postman, Vite, esbuild

[SELECTED PROJECTS]
1. YouTube Script Generator
   An AI-assisted automation tool generating engaging video scripts.
2. Expense Management System
   Brutalist financial tracking application with heavy interactive UI.

[EDUCATION]
B.S. in Computer Science & Information Technology
=====================================================`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(mockResumeContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-brand-yellow dark:bg-primary-container w-full min-h-[90vh] flex flex-col justify-center pt-24 pb-16 px-4 md:px-8 lg:px-16 border-b-4 border-brand-dark dark:border-brand-light transition-colors relative">
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-6 md:gap-8 items-center relative">

        {/* MOBILE ONLY HEADER (Shown above image on small screens) */}
        <div className="xl:hidden flex flex-col gap-4 md:gap-6 z-10 order-1">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 bg-surface-container-lowest dark:bg-brand-dark px-5 py-2.5 rounded-full w-max border-2 border-brand-dark dark:border-brand-light shadow-[4px_4px_0px_0px_#161d18] dark:shadow-[4px_4px_0px_0px_#ebf3ea] transform hover:-rotate-0.5 transition-transform duration-200">
            <div className="w-3.5 h-3.5 bg-emerald-500 rounded-full pulsing-dot"></div>
            <span className="font-mono text-xs md:text-sm font-bold text-brand-dark dark:text-brand-light uppercase tracking-wider">
              Available for job
            </span>
          </div>

          <div className="flex flex-col gap-1 md:gap-2">
            <span className="font-mono text-lg md:text-xl font-bold text-brand-dark/70 dark:text-inverse-surface/70 tracking-wider">
              I'M
            </span>
            <h1 className="font-headline text-6xl md:text-7xl lg:text-7xl text-brand-dark dark:text-inverse-surface uppercase font-black leading-none tracking-tighter">
              AAYUSH.
            </h1>
          </div>
        </div>

        {/* LEFT COLUMN: Text and CTAs */}
        <div className="xl:col-span-4 flex flex-col gap-4 md:gap-6 z-10 order-3 xl:order-1">

          {/* DESKTOP ONLY HEADER (Hidden on mobile, shown in left column on desktop) */}
          <div className="hidden xl:flex flex-col gap-4 md:gap-6">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 bg-surface-container-lowest dark:bg-brand-dark px-5 py-2.5 rounded-full w-max border-2 border-brand-dark dark:border-brand-light shadow-[4px_4px_0px_0px_#161d18] dark:shadow-[4px_4px_0px_0px_#ebf3ea] transform hover:-rotate-0.5 transition-transform duration-200">
              <div className="w-3.5 h-3.5 bg-emerald-500 rounded-full pulsing-dot"></div>
              <span className="font-mono text-xs md:text-sm font-bold text-brand-dark dark:text-brand-light uppercase tracking-wider">
                Available for job
              </span>
            </div>

            <div className="flex flex-col gap-1 md:gap-2">
              <span className="font-mono text-lg md:text-xl font-bold text-brand-dark/70 dark:text-inverse-surface/70 tracking-wider">
                I'M
              </span>
              <h1 className="font-headline text-6xl md:text-7xl lg:text-7xl xl:text-[90px] text-brand-dark dark:text-inverse-surface uppercase font-black leading-none tracking-tighter">
                AAYUSH.
              </h1>
            </div>
          </div>

          <div className="flex flex-col gap-1 md:gap-2">
            <div className="flex flex-col mt-3 xl:mt-0">
              <span className="font-headline text-3xl md:text-4xl lg:text-4xl font-black text-brand-dark dark:text-inverse-surface tracking-tight">
                FULL STACK
              </span>
              <span className="font-headline text-3xl md:text-4xl lg:text-4xl font-black text-brand-dark/60 dark:text-inverse-surface/60 tracking-tight flex items-center gap-3">
                MERN <span className="text-brand-dark dark:text-inverse-surface">DEVELOPER.</span>
              </span>
            </div>
          </div>

          <p className="font-sans text-base md:text-lg text-brand-dark/80 dark:text-inverse-surface/90 font-medium leading-relaxed max-w-md">
            I build pixel-perfect, interactive frontends backed by robust architecture. Delivering uncompromising digital experiences with a brutalist edge.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 xl:gap-3 2xl:gap-4 mt-2">
            <button
              onClick={() => setShowResumeModal(true)}
              className="neo-btn w-full sm:w-auto bg-brand-dark dark:bg-inverse-surface text-brand-light dark:text-inverse-on-surface px-6 md:px-8 xl:px-5 2xl:px-8 py-3.5 rounded-full border-2 border-brand-dark dark:border-brand-light shadow-[4px_4px_0px_0px_rgba(22,29,24,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(22,29,24,1)] cursor-pointer whitespace-nowrap"
            >
              <span className="flex items-center justify-center gap-2 text-sm md:text-base xl:text-sm 2xl:text-base">
                <ArrowDown size={18} /> DOWNLOAD CV
              </span>
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="neo-btn w-full sm:w-auto bg-transparent text-brand-dark dark:text-brand-light px-6 md:px-8 xl:px-5 2xl:px-8 py-3.5 rounded-full border-2 border-brand-dark dark:border-brand-light shadow-[4px_4px_0px_0px_rgba(22,29,24,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(22,29,24,1)] cursor-pointer whitespace-nowrap"
            >
              <span className="flex items-center justify-center gap-2 text-sm md:text-base xl:text-sm 2xl:text-base">
                <MessageSquare size={18} /> LET'S TALK
              </span>
            </button>
          </div>
        </div>

        {/* CENTER COLUMN: Image & Graphics */}
        <div className="xl:col-span-4 relative flex justify-center items-center w-full min-h-[350px] md:min-h-[450px] xl:min-h-[500px] order-2 xl:order-2 z-0">
          {/* Dotted patterns */}
          <div className="absolute top-6 right-0 w-32 h-32 opacity-20 bg-[radial-gradient(#161d18_2px,transparent_2px)] [background-size:16px_16px] dark:bg-[radial-gradient(#f4fbf3_2px,transparent_2px)] z-0"></div>
          <div className="absolute bottom-6 left-0 w-32 h-32 opacity-20 bg-[radial-gradient(#161d18_2px,transparent_2px)] [background-size:16px_16px] dark:bg-[radial-gradient(#f4fbf3_2px,transparent_2px)] z-0"></div>

          {/* Dark Circle */}
          <div className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] bg-brand-dark/10 dark:bg-brand-light/10 rounded-full z-10 mx-auto"></div>

          {/* Hero Image */}
          <img
            src="/hero-image.png"
            alt="Aayush"
            className="xl:translate-y-20 relative z-20 object-contain w-auto h-[300px] md:h-[400px] lg:h-[500px] max-h-[65vh] drop-shadow-2xl [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center');
              e.currentTarget.parentElement?.insertAdjacentHTML('beforeend', '<div class="z-20 text-brand-dark/50 dark:text-brand-light/50 font-mono text-center px-8 text-sm bg-brand-light/20 p-4 rounded-xl border border-brand-dark/20 backdrop-blur-sm">Please upload <b>hero-image.png</b> to public/ folder</div>');
            }}
          />
        </div>

        {/* RIGHT COLUMN: Info Cards */}
        <div className="xl:col-span-4 flex flex-col gap-4 w-full z-10 order-4 xl:order-3 md:max-w-md md:mx-auto xl:mx-0 xl:max-w-none">
          {/* What I Do Card */}
          <div className="bg-brand-yellow/30 dark:bg-brand-dark/30 backdrop-blur-sm p-5 md:p-6 rounded-3xl border-2 border-brand-dark/20 dark:border-brand-light/20 shadow-xl w-full">
            <h3 className="font-mono text-xs md:text-sm font-bold text-brand-dark/70 dark:text-brand-light/70 uppercase mb-4 tracking-widest">What I Do</h3>

            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-brand-dark dark:bg-brand-light flex items-center justify-center text-brand-yellow dark:text-brand-dark flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(22,29,24,0.3)]">
                  <Monitor size={18} />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold text-brand-dark dark:text-brand-light text-sm md:text-base">Frontend Development</h4>
                  <p className="text-xs md:text-sm text-brand-dark/70 dark:text-brand-light/70 mt-0.5">React, Next.js, Tailwind CSS</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-brand-dark dark:bg-brand-light flex items-center justify-center text-brand-yellow dark:text-brand-dark flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(22,29,24,0.3)]">
                  <Database size={18} />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold text-brand-dark dark:text-brand-light text-sm md:text-base">Backend Development</h4>
                  <p className="text-xs md:text-sm text-brand-dark/70 dark:text-brand-light/70 mt-0.5">Node.js, Express, REST APIs</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-brand-dark dark:bg-brand-light flex items-center justify-center text-brand-yellow dark:text-brand-dark flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(22,29,24,0.3)]">
                  <Globe size={18} />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold text-brand-dark dark:text-brand-light text-sm md:text-base">Database & Cloud</h4>
                  <p className="text-xs md:text-sm text-brand-dark/70 dark:text-brand-light/70 mt-0.5">MongoDB, PostgreSQL, Supabase</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-brand-dark dark:bg-brand-light flex items-center justify-center text-brand-yellow dark:text-brand-dark flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(22,29,24,0.3)]">
                  <Code size={18} />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold text-brand-dark dark:text-brand-light text-sm md:text-base">Clean Code & Architecture</h4>
                  <p className="text-xs md:text-sm text-brand-dark/70 dark:text-brand-light/70 mt-0.5">Scalable, Maintainable, Efficient</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-brand-yellow/30 dark:bg-brand-dark/30 backdrop-blur-sm p-5 rounded-2xl border-2 border-brand-dark/20 dark:border-brand-light/20 shadow-lg relative overflow-hidden flex justify-between items-center w-full group hover:border-brand-dark/40 transition-colors">
            <div className="flex flex-col gap-2 z-10 max-w-[80%]">
              <h3 className="font-mono text-xs font-bold text-brand-dark/80 dark:text-brand-light/80 uppercase tracking-wider flex items-center gap-1.5">
                Based in India <MapPin size={12} className="text-red-500" />
              </h3>
              <p className="text-xs font-medium text-brand-dark dark:text-brand-light leading-relaxed">
                Available for remote opportunities worldwide.
              </p>
            </div>
            <Globe className="text-brand-dark/10 dark:text-brand-light/10 group-hover:rotate-12 transition-transform duration-500 flex-shrink-0" size={50} />
          </div>
        </div>
      </div>

      {/* Interactive Resume Terminal Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="w-full max-w-2xl bg-brand-light dark:bg-inverse-surface border-4 border-brand-dark dark:border-brand-light shadow-lg flex flex-col max-h-[85vh]">

            {/* Modal Header */}
            <div className="bg-brand-yellow dark:bg-primary-container px-4 py-3 border-b-4 border-brand-dark dark:border-brand-light flex justify-between items-center">
              <span className="font-mono font-bold text-brand-dark flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500 border border-brand-dark"></span>
                <span>RESUME_TERMINAL.EXE</span>
              </span>
              <button
                onClick={() => setShowResumeModal(false)}
                className="p-1 hover:bg-brand-dark hover:text-brand-yellow border-2 border-transparent hover:border-brand-dark rounded-md transition-colors text-brand-dark"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto flex-1 font-mono text-sm bg-[#1e2924] text-emerald-400 select-all scrollbar-thin">
              <pre className="whitespace-pre-wrap leading-relaxed">{mockResumeContent}</pre>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t-4 border-brand-dark dark:border-brand-light bg-surface-container-lowest dark:bg-brand-dark flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="text-xs font-mono text-brand-dark/60 dark:text-brand-light/60">
                Type Ctrl+C or click the buttons
              </span>
              <div className="flex gap-2 w-full sm:w-auto justify-end">
                <button
                  onClick={copyToClipboard}
                  className="w-full sm:w-auto px-4 py-2 border-2 border-brand-dark dark:border-brand-light bg-brand-yellow text-brand-dark font-mono text-xs font-bold uppercase hover:shadow-[2px_2px_0px_0px_#161d18] active:translate-x-[2px] active:translate-y-[2px]"
                >
                  <span className="flex items-center justify-center gap-2">
                    {copied ? (
                      <>
                        Copied <Check size={14} />
                      </>
                    ) : (
                      <>
                        Copy Raw Text <Copy size={14} />
                      </>
                    )}
                  </span>
                </button>
                <button
                  onClick={() => {
                    const element = document.createElement("a");
                    const file = new Blob([mockResumeContent], { type: 'text/plain' });
                    element.href = URL.createObjectURL(file);
                    element.download = "Aayush_Resume.txt";
                    document.body.appendChild(element);
                    element.click();
                    document.body.removeChild(element);
                  }}
                  className="w-full sm:w-auto px-4 py-2 border-2 border-brand-dark dark:border-brand-light bg-brand-dark text-brand-light font-mono text-xs font-bold uppercase hover:shadow-[2px_2px_0px_0px_#ffe17c] active:translate-x-[2px] active:translate-y-[2px]"
                >
                  Download .TXT
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
