import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { ArrowUp, Sparkles, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/kajalmahadevbansode", color: "hover:bg-slate-900 hover:text-white" },
    { icon: <FaLinkedinIn />, href: "#", color: "hover:bg-blue-700 hover:text-white" },
    { icon: <FaEnvelope />, href: "mailto:your-KajalMahadevBansode@gmail.com", color: "hover:bg-rose-500 hover:text-white" },
    { icon: <FaWhatsapp />, href: "https://wa.me/919763864668", color: "hover:bg-green-500 hover:text-white" },
  ];

  return (
    <footer className="relative bg-[#f8fafc] pt-24 pb-12 px-6 border-t-2 border-slate-900">
      
      <div className="absolute top-0 left-0 w-full flex justify-center">
        <div className="absolute -top-3 bg-[#f8fafc] px-4 text-slate-900">
           <Heart size={20} fill="currentColor" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          
          {/* BRANDING */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center md:text-left flex-1"
          >
            <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase flex items-center justify-center md:justify-start gap-2 mb-3">
              Kajal<span className="text-blue-600">.</span>
              <Sparkles size={20} className="text-blue-400" />
            </h2>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">
              Crafting Digital Excellence
            </p>
          </motion.div>

          {/* SOCIAL LINKS */}
          <div className="flex flex-wrap justify-center gap-3 flex-1">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ y: -5 }}
                className={`w-12 h-12 flex items-center justify-center rounded-xl bg-white text-slate-400 border border-slate-200 shadow-sm transition-all duration-300 ${link.color}`}
              >
                {React.cloneElement(link.icon, { size: 18 })}
              </motion.a>
            ))}
          </div>

          {/* SCROLL TO TOP */}
          <div className="flex-1 flex justify-center md:justify-end">
            <motion.button 
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 bg-white border border-slate-200 py-2 px-5 rounded-full shadow-sm hover:border-blue-500 transition-all"
            >
              <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Scroll Up</span>
              <ArrowUp size={16} className="text-blue-600 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
             <a href="#home" className="text-slate-900 hover:text-blue-600 transition-colors">Home</a>
             <a href="#projects" className="text-slate-900 hover:text-blue-600 transition-colors">Works</a>
             <a href="#about" className="text-slate-900 hover:text-blue-600 transition-colors">About</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;