import React, { useState } from 'react';
import { Project } from '../types';
import { ArrowRight, X, ExternalLink, Github, Sparkles, AlertCircle, Cpu } from 'lucide-react';

const projectsData: Project[] = [
  {
    id: "youtube-script-generator",
    title: "YouTube Script Generator",
    tags: ["React", "Node.js", "AI Integration"],
    description: "An AI-powered tool that automatically generates engaging YouTube scripts based on trending topics and user-defined constraints. Features a real-time collaborative editor and dynamic asset suggestions.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChXFQsWpvANkTYI_lB0sca_UUsLReVzUtzUulop2ehsVDBVYv5cJylGgMEDutAhJcAVYMLokah4suG6NufR9joyX7Yc6q8zt6TXeM7AgiNqRHfWpESCeOVAy_m0Y8ousXh1buN4E79uZvKfhu4G9eBHltkpICP-QuG9Tj9xr8ADGUG5Pk02tOG1DiSMUoMy_ttNdsnk3ruFKM12M0Q9pu8EtT08Te9dfl0xGMptrHXohglcedgMT4K",
    alt: "YouTube Script Editor UI Mockup showing split screen controls and text blocks with solid yellow and green theme.",
    background: "#b7c6c2",
    isReverse: false,
    projectUrl: "https://youtube-script-editor.demo",
    githubUrl: "https://github.com/AayushDolasiya/youtube-script-generator",
    caseStudy: {
      overview: "Developed a full-stack, AI-driven automation platform that handles YouTube scriptwriting, storyboard suggestions, and outline planning inside an interactive text workspace. Perfect for creators looking to systematize their ideation and pre-production cycles.",
      challenge: "Structuring raw LLM outputs into exact markdown sections, while maintaining collaborative document state synchrony for concurrent editors, avoiding cursor jumps or overlapping changes.",
      solution: "Implemented a custom Express text processing proxy coupled with client-side optimistic UI state and real-time state checkpoints. Deployed an offline draft synchronization protocol.",
      features: [
        "Dynamic prompt building based on video niche, target duration, tone, and pacing",
        "Interactive timeline editor matching voiceover scripts to visual storyboard instructions",
        "Automatic YouTube tags, description, and metadata optimization suite"
      ],
      techStack: ["React.js", "Express.js", "Node.js", "MongoDB", "Tailwind CSS", "Gemini SDK"]
    }
  },
  {
    id: "expense-management",
    title: "Expense Management",
    tags: ["MongoDB", "Express", "React"],
    description: "A robust financial dashboard designed for high-volume transactions. Features complex data visualization, receipt scanning OCR, and custom reporting algorithms wrapped in an uncompromising UI.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGM5gfCInCO-TZMsXOBOqSh-e5r20ui1WngyTullHuD85CNfVauUxlfiXe2RJlzW-nEsO3aMTY3fAdrSIRDXPR-2NSUM8PtNDBqZR6wUmN_eqelWjv-XC3_FtEYBvY4WNh8IlggO-9EzgSxVXE6RAoVdZ1u0mQE5Y7VoB31sC2VEOcnEBxPi0AqOOhko8KzIMJiv_tLpn8Ahd-3ThR0eLHf4Ho_uQ9QjHMlNv4sf2nPpGZFzWsuqbK",
    alt: "Expense Management Dashboard showing monthly budget cards and high-density tables with solid black lines.",
    background: "#ffffff",
    isReverse: true,
    projectUrl: "https://expense-dashboard.demo",
    githubUrl: "https://github.com/AayushDolasiya/expense-management",
    caseStudy: {
      overview: "Engineered an offline-capable personal and corporate finance platform focusing on raw, high-contrast dashboard data structures. The dashboard allows tracking expenses, processing digital invoices, and analyzing recurring flows.",
      challenge: "Maintaining responsive complex grid analytics, tracking 10,000+ entries locally with fluid charting, and processing scanned receipts cleanly on multiple screen dimensions.",
      solution: "Leveraged Web Workers for heavy client-side aggregation parsing, implemented OCR processing APIs on the backend, and styled via pixel-aligned custom SVGs and charts.",
      features: [
        "OCR invoice scanner extracting merchant details, totals, dates, and taxes automatically",
        "Neubrutalist high-density relational tables with custom multi-column filtering and sorting",
        "Interactive budgeting gauges and custom SVG financial flow charts"
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tesseract OCR", "Recharts"]
    }
  }
];

export default function SelectedWorks() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-16 px-4 md:px-16 flex flex-col gap-12 bg-brand-light dark:bg-brand-dark transition-colors">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Section Heading */}
        <div className="border-b-4 border-brand-dark dark:border-brand-light pb-4 inline-block w-max">
          <h2 className="font-headline text-4xl md:text-6xl font-black text-brand-dark dark:text-brand-light uppercase tracking-tight">
            Selected Works
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projectsData.map((project) => (
            <article
              key={project.id}
              style={{ backgroundColor: project.background }}
              className="rounded-xl border-4 border-brand-dark dark:border-brand-light shadow-[6px_6px_0px_0px_#161d18] dark:shadow-[6px_6px_0px_0px_#ebf3ea] flex flex-col justify-between overflow-hidden group hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[7px_7px_0px_0px_#161d18] dark:hover:shadow-[7px_7px_0px_0px_#ebf3ea] transition-all duration-150"
            >
              
              {/* Project Meta Details */}
              <div className="p-6 md:p-8 flex flex-col gap-4 text-brand-dark flex-grow">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-surface-container-lowest dark:bg-brand-dark text-brand-dark dark:text-brand-light px-3 py-1 rounded-full text-xs font-mono font-bold border-2 border-brand-dark dark:border-brand-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-headline text-2xl md:text-3xl font-extrabold uppercase tracking-tight mt-2">
                  {project.title}
                </h3>

                {/* Short description */}
                <p className="font-sans text-sm md:text-base text-brand-dark/80 font-medium leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Case Study Link */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 font-mono font-black uppercase text-xs mt-4 hover:underline decoration-4 underline-offset-4 w-max group/btn cursor-pointer"
                >
                  View Case Study{' '}
                  <ArrowRight
                    size={14}
                    className="transform group-hover/btn:translate-x-0.5 transition-transform duration-150"
                  />
                </button>
              </div>

              {/* Project Image Mockup Panel */}
              <div className="bg-surface-container-lowest dark:bg-inverse-surface p-6 md:p-8 border-t-4 border-brand-dark dark:border-brand-light flex items-center justify-center relative overflow-hidden">
                <div className="w-full h-52 md:h-60 relative border-4 border-brand-dark dark:border-brand-light bg-brand-light dark:bg-brand-dark overflow-hidden rounded-lg shadow-[4px_4px_0px_0px_#161d18] dark:shadow-[4px_4px_0px_0px_#ebf3ea]">
                  <img
                    className="w-full h-full object-cover select-none pointer-events-none"
                    src={project.image}
                    alt={project.alt}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>

      {/* High-Fidelity Modal for Case Studies */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
          <div className="w-full max-w-3xl bg-brand-light dark:bg-inverse-surface border-4 border-brand-dark dark:border-brand-light shadow-lg flex flex-col max-h-[90vh] rounded-none my-8">
            
            {/* Modal Header */}
            <div className="bg-brand-yellow dark:bg-primary-container px-6 py-4 border-b-4 border-brand-dark dark:border-brand-light flex justify-between items-center">
              <span className="font-mono font-black text-brand-dark uppercase tracking-wider flex items-center gap-2 text-sm md:text-base">
                <Cpu size={18} />
                <span>CASE_STUDY://{selectedProject.id}</span>
              </span>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1 hover:bg-brand-dark hover:text-brand-yellow border-2 border-transparent hover:border-brand-dark rounded-md transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 md:p-8 overflow-y-auto flex-1 min-h-0 flex flex-col gap-8 scrollbar-thin">
              
              {/* Title & Tags */}
              <div className="flex flex-col gap-3">
                <h3 className="font-headline text-3xl md:text-5xl font-black text-brand-dark dark:text-inverse-on-surface uppercase tracking-tighter">
                  {selectedProject.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.caseStudy.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-brand-yellow/30 dark:bg-brand-yellow/20 text-brand-dark dark:text-brand-yellow px-2.5 py-1 rounded-sm text-xs font-mono font-bold border border-brand-dark dark:border-brand-yellow"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Large Mockup view */}
              <div className="border-4 border-brand-dark dark:border-brand-light rounded-md overflow-hidden bg-white select-none shadow-[4px_4px_0px_0px_#161d18]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.alt}
                  className="w-full object-cover max-h-[250px] md:max-h-[320px]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Grid section for details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Column 1: Overview & Challenges */}
                <div className="flex flex-col gap-6">
                  <div className="border-2 border-brand-dark dark:border-brand-light p-4 bg-surface-container-lowest dark:bg-brand-dark rounded-none">
                    <h4 className="font-mono font-bold text-sm text-brand-dark dark:text-brand-light uppercase border-b-2 border-brand-dark dark:border-brand-light pb-1 mb-2 flex items-center gap-1.5">
                      <Sparkles size={14} /> Overview
                    </h4>
                    <p className="font-sans text-sm text-brand-dark/80 dark:text-brand-light/80 leading-relaxed">
                      {selectedProject.caseStudy.overview}
                    </p>
                  </div>

                  <div className="border-2 border-brand-dark dark:border-brand-light p-4 bg-surface-container-lowest dark:bg-brand-dark rounded-none">
                    <h4 className="font-mono font-bold text-sm text-brand-dark dark:text-brand-light uppercase border-b-2 border-brand-dark dark:border-brand-light pb-1 mb-2 flex items-center gap-1.5">
                      <AlertCircle size={14} /> Technical Challenge
                    </h4>
                    <p className="font-sans text-sm text-brand-dark/80 dark:text-brand-light/80 leading-relaxed">
                      {selectedProject.caseStudy.challenge}
                    </p>
                  </div>
                </div>

                {/* Column 2: Solutions & Key Deliverables */}
                <div className="flex flex-col gap-6">
                  <div className="border-2 border-brand-dark dark:border-brand-light p-4 bg-surface-container-lowest dark:bg-brand-dark rounded-none">
                    <h4 className="font-mono font-bold text-sm text-brand-dark dark:text-brand-light uppercase border-b-2 border-brand-dark dark:border-brand-light pb-1 mb-2 flex items-center gap-1.5">
                      <Cpu size={14} /> Engineered Solution
                    </h4>
                    <p className="font-sans text-sm text-brand-dark/80 dark:text-brand-light/80 leading-relaxed">
                      {selectedProject.caseStudy.solution}
                    </p>
                  </div>

                  <div className="border-2 border-brand-dark dark:border-brand-light p-4 bg-surface-container-lowest dark:bg-brand-dark rounded-none">
                    <h4 className="font-mono font-bold text-sm text-brand-dark dark:text-brand-light uppercase border-b-2 border-brand-dark dark:border-brand-light pb-1 mb-2">
                      Key Deliverables
                    </h4>
                    <ul className="list-none font-sans text-sm text-brand-dark/80 dark:text-brand-light/80 flex flex-col gap-2">
                      {selectedProject.caseStudy.features.map((feature, idx) => (
                        <li key={idx} className="flex gap-2 items-start">
                          <span className="font-mono font-bold text-brand-dark dark:text-brand-yellow">[{idx + 1}]</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-surface-container-lowest dark:bg-brand-dark border-t-4 border-brand-dark dark:border-brand-light flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="text-xs font-mono text-brand-dark/60 dark:text-brand-light/60">
                Case study file updated: 2026-07-18
              </span>
              <div className="flex gap-2 w-full sm:w-auto justify-end">
                <button
                  onClick={() => alert(`Redirecting to live demo for ${selectedProject.title}`)}
                  className="w-full sm:w-auto px-4 py-2 border-2 border-brand-dark dark:border-brand-light bg-brand-yellow text-brand-dark font-mono text-xs font-bold uppercase hover:shadow-[2px_2px_0px_0px_#161d18] active:translate-x-[2px] active:translate-y-[2px]"
                >
                  <span className="flex items-center justify-center gap-2">
                    Live Demo <ExternalLink size={14} />
                  </span>
                </button>
                <button
                  onClick={() => alert(`Opening GitHub repository for ${selectedProject.title}`)}
                  className="w-full sm:w-auto px-4 py-2 border-2 border-brand-dark dark:border-brand-light bg-brand-dark text-brand-light font-mono text-xs font-bold uppercase hover:shadow-[2px_2px_0px_0px_#ffe17c] active:translate-x-[2px] active:translate-y-[2px]"
                >
                  <span className="flex items-center justify-center gap-2">
                    GitHub Repo <Github size={14} />
                  </span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
