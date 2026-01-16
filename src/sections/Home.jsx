import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Send, Layers } from 'lucide-react';

const Home = () => {
  const [nameColor, setNameColor] = useState('from-blue-600 to-purple-600');

  const changeColor = () => {
    const colors = [
      'from-pink-500 to-rose-600',
      'from-emerald-400 to-cyan-500',
      'from-indigo-500 to-blue-600',
      'from-blue-600 to-purple-600'
    ];
    setNameColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  // Function to handle Resume Download
  const handleDownload = () => {
    // Replace '/resume.pdf' with the actual path to your file in the 'public' folder
    const link = document.createElement('a');
    link.href = '/resume.pdf'; 
    link.download = 'Kajal_Bansode_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const smoothFadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-white px-6 overflow-hidden pt-16">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-[20%] left-[15%] w-64 h-64 bg-blue-200 rounded-full blur-[80px]" />
        <div className="absolute bottom-[20%] right-[15%] w-64 h-64 bg-purple-200 rounded-full blur-[80px]" />
      </div>

      <motion.div 
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
        className="relative z-10 max-w-4xl w-full flex flex-col items-center"
      >
        
        {/* IMAGE */}
        <motion.div variants={smoothFadeUp} className="relative mb-6">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 rounded-full blur-sm"
          />
          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full p-1 bg-white">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-white shadow-md">
              <img src="/portfolio.jpeg" alt="Kajal" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>

        {/* BADGE */}
        <motion.div variants={smoothFadeUp} className="mb-4 bg-slate-900 px-4 py-1.5 rounded-full shadow-md">
          <div className="flex items-center gap-2 text-white">
             <Layers size={12} className="text-blue-400" />
             <span className="text-[9px] font-bold uppercase tracking-widest">Full-Stack Developer</span>
          </div>
        </motion.div>

        {/* NAME SECTION */}
        <motion.h1 variants={smoothFadeUp} className="text-5xl md:text-7xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
          Hi, I'm <motion.span onClick={changeColor} className={`cursor-pointer text-transparent bg-clip-text bg-gradient-to-r ${nameColor} transition-all`}>Kajal</motion.span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p variants={smoothFadeUp} className="text-gray-500 text-sm md:text-base mb-8 max-w-lg font-medium text-center">
         A fresher web developer with knowledge of <b text color="black">HTML, CSS, JavaScript, and React.</b> I enjoy building responsive and user-friendly websites. I’m a quick learner, motivated to grow professionally, and eager to start my career in the IT industry.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div variants={smoothFadeUp} className="flex gap-4 justify-center">
          {/* Hire Me - Scrolls to Contact Section */}
          <a href="#contact">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-black text-white rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg hover:bg-blue-600 transition-all"
            >
              Hire Me <Send size={16} />
            </motion.button>
          </a>

          {/* Resume - Triggers Download */}
          <motion.button 
            onClick={handleDownload}
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 border-black text-black rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg hover:bg-blue-600 transition-all"
          >
            Resume <Download size={16} />
          </motion.button>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Home;