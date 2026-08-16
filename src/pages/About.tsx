import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, MessageSquare, Briefcase, Monitor, Users, Trophy, Code, Database, Paintbrush, Layers, Server, MapPin, Mail, Globe } from 'lucide-react';

export default function About() {
  const handleDownloadCV = () => {
    // Reusing the mock resume content from Hero.tsx
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

    const element = document.createElement("a");
    const file = new Blob([mockResumeContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Aayush_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleLetsTalk = () => {
    window.location.href = '/#contact';
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  return (
    <section className="bg-brand-light dark:bg-inverse-surface w-full min-h-screen pt-28 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden relative font-sans text-brand-dark dark:text-brand-light transition-colors">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 relative z-10">

        {/* LEFT COLUMN: Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col z-20 order-2 lg:order-1"
        >

          {/* About Me Label */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
            <div className="w-2.5 h-2.5 rounded-full bg-[#bfa15f]"></div>
            <span className="font-mono text-sm font-bold text-[#9a824e] tracking-widest uppercase">About Me</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 variants={itemVariants} className="font-headline text-5xl md:text-6xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
            Building digital experiences <br className="hidden md:block" />
            that make an <span className="text-[#bfa15f]">impact.</span>
          </motion.h1>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-brand-dark/70 dark:text-brand-light/70 font-medium leading-relaxed max-w-xl mb-6">
            I'm Aayush, a Full Stack MERN Developer who loves turning ideas into scalable, high-performance web applications. I enjoy crafting clean interfaces, writing efficient code, and solving real-world problems with modern technologies.
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-brand-dark/70 dark:text-brand-light/70 font-medium leading-relaxed max-w-xl mb-10">
            I believe in writing code that is not just functional, but also maintainable, reusable, and built with purpose.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16">

          </motion.div>

          {/* Statistics Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
            {/* Stat 1 */}
            <div className="bg-[#fefaf6] dark:bg-brand-dark/40 border border-[#e8dfce] dark:border-brand-light/10 p-5 rounded-2xl flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-full bg-[#f4ebd8] dark:bg-[#bfa15f]/20 flex items-center justify-center text-[#bfa15f] mb-4">
                <Briefcase size={20} />
              </div>
              <span className="font-headline text-3xl font-black mb-1">2+</span>
              <span className="text-xs font-medium text-brand-dark/60 dark:text-brand-light/60">Years Experience</span>
            </div>
            {/* Stat 2 */}
            <div className="bg-[#fefaf6] dark:bg-brand-dark/40 border border-[#e8dfce] dark:border-brand-light/10 p-5 rounded-2xl flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-full bg-[#f4ebd8] dark:bg-[#bfa15f]/20 flex items-center justify-center text-[#bfa15f] mb-4">
                <Code size={20} />
              </div>
              <span className="font-headline text-3xl font-black mb-1">15+</span>
              <span className="text-xs font-medium text-brand-dark/60 dark:text-brand-light/60">Projects Completed</span>
            </div>
            {/* Stat 3 */}
            <div className="bg-[#fefaf6] dark:bg-brand-dark/40 border border-[#e8dfce] dark:border-brand-light/10 p-5 rounded-2xl flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-full bg-[#f4ebd8] dark:bg-[#bfa15f]/20 flex items-center justify-center text-[#bfa15f] mb-4">
                <Users size={20} />
              </div>
              <span className="font-headline text-3xl font-black mb-1">10+</span>
              <span className="text-xs font-medium text-brand-dark/60 dark:text-brand-light/60">Happy Clients</span>
            </div>
            {/* Stat 4 */}
            <div className="bg-[#fefaf6] dark:bg-brand-dark/40 border border-[#e8dfce] dark:border-brand-light/10 p-5 rounded-2xl flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-full bg-[#f4ebd8] dark:bg-[#bfa15f]/20 flex items-center justify-center text-[#bfa15f] mb-4">
                <Trophy size={20} />
              </div>
              <span className="font-headline text-3xl font-black mb-1">100%</span>
              <span className="text-xs font-medium text-brand-dark/60 dark:text-brand-light/60">Commitment</span>
            </div>
          </motion.div>

          {/* Technologies Label */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
            <div className="w-2.5 h-2.5 rounded-full bg-[#bfa15f]"></div>
            <span className="font-mono text-sm font-bold text-[#9a824e] tracking-widest uppercase">Technologies I Work With</span>
          </motion.div>

          {/* Technologies Grid */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <div className="bg-white dark:bg-brand-dark flex flex-col items-center justify-center w-[90px] h-[90px] rounded-2xl border border-gray-200 dark:border-brand-light/10 hover:shadow-md hover:-translate-y-1 transition-all">
              <Monitor size={28} className="text-[#61dafb] mb-2" />
              <span className="text-xs font-semibold">React</span>
            </div>
            <div className="bg-white dark:bg-brand-dark flex flex-col items-center justify-center w-[90px] h-[90px] rounded-2xl border border-gray-200 dark:border-brand-light/10 hover:shadow-md hover:-translate-y-1 transition-all">
              <Layers size={28} className="text-brand-dark dark:text-white mb-2" />
              <span className="text-xs font-semibold">Next.js</span>
            </div>
            <div className="bg-white dark:bg-brand-dark flex flex-col items-center justify-center w-[90px] h-[90px] rounded-2xl border border-gray-200 dark:border-brand-light/10 hover:shadow-md hover:-translate-y-1 transition-all">
              <Server size={28} className="text-[#339933] mb-2" />
              <span className="text-xs font-semibold">Node.js</span>
            </div>
            <div className="bg-white dark:bg-brand-dark flex flex-col items-center justify-center w-[90px] h-[90px] rounded-2xl border border-gray-200 dark:border-brand-light/10 hover:shadow-md hover:-translate-y-1 transition-all">
              <Code size={28} className="text-gray-500 mb-2" />
              <span className="text-xs font-semibold">Express.js</span>
            </div>
            <div className="bg-white dark:bg-brand-dark flex flex-col items-center justify-center w-[90px] h-[90px] rounded-2xl border border-gray-200 dark:border-brand-light/10 hover:shadow-md hover:-translate-y-1 transition-all">
              <Database size={28} className="text-[#47a248] mb-2" />
              <span className="text-xs font-semibold">MongoDB</span>
            </div>
            <div className="bg-white dark:bg-brand-dark flex flex-col items-center justify-center w-[90px] h-[90px] rounded-2xl border border-gray-200 dark:border-brand-light/10 hover:shadow-md hover:-translate-y-1 transition-all">
              <Paintbrush size={28} className="text-[#38b2ac] mb-2" />
              <span className="text-xs font-semibold">Tailwind CSS</span>
            </div>
          </motion.div>

        </motion.div>

        {/* RIGHT COLUMN: Image & Graphics */}
        <div className="relative flex justify-center items-center w-full min-h-[500px] lg:min-h-full z-10 order-1 lg:order-2 mt-8 lg:mt-0">

          {/* Big Pale Gold Circle Background */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute w-[320px] h-[320px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] bg-[#f8eedb] dark:bg-[#bfa15f]/10 rounded-full z-0"
          ></motion.div>

          {/* Dotted Patterns */}
          <div className="absolute top-10 right-10 w-24 h-24 opacity-30 bg-[radial-gradient(#d4c39f_2px,transparent_2px)] [background-size:12px_12px] z-0"></div>
          <div className="absolute bottom-40 left-10 w-24 h-24 opacity-30 bg-[radial-gradient(#d4c39f_2px,transparent_2px)] [background-size:12px_12px] z-0"></div>

          {/* Handwritten Decorative Text (Hidden on small screens for cleaner layout) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute top-[10%] left-[-5%] lg:left-[-15%] xl:left-[-10%] z-20 hidden md:flex flex-col items-end"
          >
            <p className="font-serif italic text-lg md:text-xl text-brand-dark/80 dark:text-brand-light/80 rotate-[-4deg] max-w-[200px] text-right mb-2">
              Passionate about solving problems and building products that matter.
            </p>
            {/* Simple Curved Arrow SVG */}
            <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-4">
              <path d="M5.5 5.5C12.1667 22.1667 33.1 46.1 55.5 30.5M55.5 30.5L46.5 25.5M55.5 30.5L49.5 38.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-dark/60 dark:text-brand-light/60" />
            </svg>
          </motion.div>

          {/* Profile Image */}
          <motion.img
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src="/hero-image.png"
            alt="Aayush"
            className="relative z-10 object-contain w-auto h-[400px] md:h-[550px] lg:h-[650px] drop-shadow-2xl"
          />

          {/* Floating Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute bottom-[-20px] md:bottom-10 lg:bottom-5 xl:bottom-10 z-30 bg-[#161d18] w-[90%] md:w-[350px] p-6 rounded-2xl shadow-2xl border border-white/5"
          >
            <div className="flex flex-col gap-4">
              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-[#bfa15f]/50 flex items-center justify-center text-[#bfa15f] flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#bfa15f] text-xs font-semibold mb-0.5">Location</span>
                  <span className="text-white text-sm">India</span>
                </div>
              </div>
              <div className="w-full h-px bg-white/10"></div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-[#bfa15f]/50 flex items-center justify-center text-[#bfa15f] flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#bfa15f] text-xs font-semibold mb-0.5">Email</span>
                  <span className="text-white text-sm">aayushdolasiya226@gmail.com</span>
                </div>
              </div>
              <div className="w-full h-px bg-white/10"></div>

              {/* Availability */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-[#bfa15f]/50 flex items-center justify-center text-[#bfa15f] flex-shrink-0">
                  <Globe size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#bfa15f] text-xs font-semibold mb-0.5">Availability</span>
                  <span className="text-white text-sm">Open to work</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
