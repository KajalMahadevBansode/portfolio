import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.Sc Computer Science",
      institute: "Sangola mahavidylaya Sangola",
      location: "Maharashtra",
      duration: "2022 - 2025",
      details: "Specializing in Web Technologies & Software Development.",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institute: "New english School Sangola Jr.College sangola",
      location: "Maharashtra",
      duration: "2020 - 2022",
      details: "Major in Science & Information Technology.",
    }
  ];

  return (
    <section id="education" className="py-28 bg-[#fafafa] px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Simple Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-blue-600 font-bold text-[10px] uppercase tracking-[0.4em] mb-4"
          >
            <GraduationCap size={16} /> Qualifications
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter"
          >
            Education<span className="text-blue-600">.</span>
          </motion.h2>
        </div>

        {/* Education List */}
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 10 }}
              className="group bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex gap-6 items-start">
                {/* Icon Box */}
                <div className="hidden sm:flex p-4 bg-slate-50 rounded-2xl text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <CheckCircle2 size={24} />
                </div>

                <div className="text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                      {edu.degree}
                    </h3>
                    {edu.isCurrent && (
                      <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-black uppercase rounded-md border border-blue-100 animate-pulse">
                        Pursuing
                      </span>
                    )}
                  </div>
                  
                  <p className="text-slate-500 font-medium mb-4 flex items-center gap-2">
                    <MapPin size={14} className="text-slate-300" /> {edu.institute}, {edu.location}
                  </p>
                  
                  <p className="text-slate-400 text-sm leading-relaxed max-w-md italic">
                    {edu.details}
                  </p>
                </div>
              </div>

              {/* Date Box */}
              <div className="flex items-center gap-2 px-5 py-2 bg-slate-50 rounded-xl text-slate-500 text-sm font-bold min-w-fit self-start md:self-center">
                <Calendar size={14} className="text-slate-300" /> {edu.duration}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;