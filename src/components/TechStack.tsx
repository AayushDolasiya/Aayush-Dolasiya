import React from 'react';
import { TechCategory } from '../types';

const techData: TechCategory[] = [
  {
    title: "Frontend Stack",
    items: [
      { name: "React.js", level: 95, iconName: "react", description: "Advanced hook structures, context providers, state memoization, and concurrent rendering architectures." },
      { name: "Tailwind CSS", level: 98, iconName: "tailwind", description: "Fluid responsive grids, fluid typography custom layouts, theme design systems, and rapid prototyping." },
      { name: "TypeScript", level: 90, iconName: "typescript", description: "Strict static typings, mapped structures, generic utilities, and enterprise-grade code safety." },
      { name: "JavaScript (ES6+)", level: 96, iconName: "javascript", description: "Event loops, closures, asynchronous workers, promise orchestration, and raw DOM optimization." }
    ]
  },
  {
    title: "Backend Core",
    items: [
      { name: "Node.js", level: 92, iconName: "nodejs", description: "V8 engine processing, file-system scripting, process clustering, stream handling, and package modularity." },
      { name: "Express.js", level: 95, iconName: "express", description: "Robust route proxy handlers, custom middlewares, controller patterns, error-intercepts, and CORS setups." },
      { name: "RESTful APIs", level: 94, iconName: "rest", description: "Idempotent endpoints, structured JSON transfers, parameter validations, and stateless routing standards." },
      { name: "JWT Security", level: 88, iconName: "jwt", description: "Cryptographic state storage, token rotations, double cookies validation, and route-level authorization guards." }
    ]
  },
  {
    title: "Data Store",
    items: [
      { name: "MongoDB", level: 90, iconName: "mongodb", description: "BSON documents, aggregation pipelines, replica sets clustering, index optimization, and high volume storage." },
      { name: "Mongoose ODM", level: 92, iconName: "mongoose", description: "Data schemas, model middleware triggers, relational population, validator layers, and raw query overrides." },
      { name: "PostgreSQL", level: 85, iconName: "postgres", description: "Relational query execution, keys constraints, transactional ACID standards, and index partitioning." }
    ]
  },
  {
    title: "Dev Tools",
    items: [
      { name: "Git & GitHub", level: 93, iconName: "git", description: "Multi-branch workflow management, rebase orchestration, conflict resolution, hooks, and collaborative pull pipelines." },
      { name: "Docker Core", level: 80, iconName: "docker", description: "Multi-stage container definitions, images compiling, network virtualization, and multi-service docker-compose." },
      { name: "Vite / esbuild", level: 94, iconName: "vite", description: "Bundler config customization, asset processing optimization, hot replacement control, and production compiles." }
    ]
  }
];

export default function TechStack() {
  return (
    <section id="tech" className="py-16 px-4 md:px-16 bg-[#d4e3df] dark:bg-inverse-surface border-b-4 border-brand-dark dark:border-brand-light transition-colors">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Section Heading */}
        <div className="border-b-4 border-brand-dark dark:border-brand-light pb-4 inline-block w-max">
          <h2 className="font-headline text-4xl md:text-6xl font-black text-brand-dark dark:text-brand-light uppercase tracking-tight">
            Technical Stack
          </h2>
        </div>

        {/* Dashboard Grid Layout - Now Full Width side-by-side cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {techData.map((category) => (
            <div 
              key={category.title}
              className="bg-surface-container-lowest dark:bg-brand-dark border-4 border-brand-dark dark:border-brand-light p-6 rounded-none shadow-[4px_4px_0px_0px_#161d18] dark:shadow-[4px_4px_0px_0px_#ebf3ea] flex flex-col justify-between"
            >
              <div>
                <h3 className="font-headline text-lg font-bold text-brand-dark dark:text-brand-light uppercase border-b-2 border-brand-dark dark:border-brand-light pb-2 mb-4 text-center">
                  {category.title}
                </h3>
                <div className="flex flex-col gap-3">
                  {category.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="w-full text-center font-mono font-bold text-sm px-3.5 py-2.5 border-2 border-brand-dark dark:border-brand-light bg-brand-light dark:bg-inverse-surface text-brand-dark dark:text-brand-light flex justify-center items-center transition-all duration-150 shadow-[3px_3px_0px_0px_#161d18] dark:shadow-[3px_3px_0px_0px_#ebf3ea] hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0px_0px_#161d18] dark:hover:shadow-[1.5px_1.5px_0px_0px_#ebf3ea] hover:bg-brand-yellow dark:hover:bg-brand-yellow dark:hover:text-brand-dark select-none"
                    >
                      <span className="font-mono text-sm font-bold">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
