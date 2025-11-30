import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';
import { MapPin, Linkedin, ArrowRight, Briefcase } from 'lucide-react';

const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="relative bg-slate-950 overflow-hidden pt-24 lg:pt-32 pb-0">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-600 opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-purple-600 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-teal-500 opacity-10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Hi, I'm <span className="text-blue-500">{PERSONAL_INFO.name}</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl text-slate-300 mb-6 font-light">
              {PERSONAL_INFO.title}
            </h2>
            
            <p className="text-slate-400 text-lg max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              I build scalable, high-performance web applications using React, Vue, and Angular. I’m currently expanding my expertise in cloud technologies with AWS and exploring applied AI through agentic frameworks, Python, and AWS Bedrock.
            </p>
            
          </div>

          <div className="flex-1 relative">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl rotate-6 opacity-30 blur-lg animate-pulse"></div>
              <div className="absolute inset-0 border-2 border-white/10 rounded-2xl rotate-3"></div>
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-800 flex items-center justify-center">
                {!imageError ? (
                  <img 
                    src={PERSONAL_INFO.image}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-duration-500 transition-transform"
                    onError={() => {
                      setImageError(true);
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-slate-800 flex flex-col items-center justify-center text-slate-500">
                     <div className="w-32 h-32 rounded-full bg-slate-700 flex items-center justify-center mb-4">
                       <span className="text-4xl font-bold text-slate-400">CP</span>
                     </div>
                     <p className="text-sm">Photo not found</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;