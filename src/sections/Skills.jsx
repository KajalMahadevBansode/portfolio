import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Layout, Server, Sparkles } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="text-blue-600" size={22} />,
      skills: ["React.js", "html", "CSS", "JavaScript", "HTML5/CSS",],
      color: "hover:border-blue-500/30"
    },
    {
      title: "Backend",
      icon: <Server className="text-purple-600" size={22} />,
      skills: ["Node.js", "Express.js", "MongoDB", "SQL",],
      color: "hover:border-purple-500/30"
    },
    {
      title: "Tools",
      icon: <Terminal className="text-emerald-600" size={22} />,
      skills: ["Git", "GitHub",],
      color: "hover:border-emerald-500/30"
    }
  ];

  return (
    <section id="skills" className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Compact Header */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-[9px] font-black uppercase tracking-widest mb-3"
          >
            <Sparkles size={10} className="text-blue-500" /> My Expertise
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight"
          >
            Tech <span className="text-blue-600">Stack</span>
          </motion.h2>
        </div>

        {/* Minimized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`group p-6 bg-white border border-slate-100 rounded-[2rem] shadow-sm transition-all duration-300 ${category.color} hover:shadow-md`}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold rounded-lg border border-transparent hover:border-slate-200 hover:bg-white hover:text-black transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;