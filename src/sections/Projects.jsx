import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, Sparkles } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Smart LabPRO",
      category: "Full Stack",
      description: "Lab management system built to automate medical reports efficiently.",
      tags: ["React", "Node.js", "sql"],
      github: "https://github.com/kajalbansode/smart-labpro", 
      live: "#"
    },
    {
      title: "Portfolio 2026",
      category: "Frontend",
      description: "Personal brand website with smooth Framer Motion interactions.",
      tags: ["React", "Node.js", "Tailwind v4"],
      github: "https://github.com/kajalmahadevbansode/portfolio",
      live: "#"
    },
    {
      title: "Modern Todo App",
      category: "Web App",
      description: "Clean productivity tool with local storage and dark mode.",
      tags: ["JS", "CSS"],
      github: "https://github.com/kajalbansode/todo-app",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#fafafa] px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-blue-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-3"
            >
              <Sparkles size={14} /> My Works
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight"
            >
              Selected Projects<span className="text-blue-600">.</span>
            </motion.h2>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex-grow">
                {/* Live Link Icon at Top Right */}
                <div className="flex justify-end mb-4">
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-blue-600 transition-colors"
                  >
                    <ArrowUpRight size={24} />
                  </a>
                </div>

                <span className="text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Bottom Section: GitHub & Tech Tags */}
              <div className="pt-6 border-t border-slate-50">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-bold text-slate-500 bg-slate-100/50 px-3 py-1 rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* GitHub Icon Moved to Bottom */}
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2.5 bg-slate-900 text-white rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-md"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore More Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <a 
            href="https://github.com/kajalbansode" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 border-b-2 border-slate-900 hover:text-blue-600 hover:border-blue-600 pb-1 transition-all"
          >
            See all repositories <Github size={14} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;