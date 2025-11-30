import React from 'react';
import SectionContainer from './SectionContainer';
import { EXPERIENCE_DATA } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <SectionContainer 
      id="experience" 
      title="Professional Experience" 
      subtitle="My career path across leading organizations."
      // Use dark prop to give it a slightly different background shade (slate-900 vs slate-950)
      dark={true}
    >
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 transform md:-translate-x-1/2 hidden md:block"></div>
        
        <div className="space-y-12">
          {EXPERIENCE_DATA.map((job, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot (Desktop) */}
              <div className="absolute left-1/2 top-0 w-8 h-8 bg-blue-600 rounded-full border-4 border-slate-900 shadow-sm transform -translate-x-1/2 hidden md:flex items-center justify-center z-10">
                 <Briefcase className="w-3 h-3 text-white" />
              </div>

              {/* Content Card */}
              <div className="flex-1">
                <div className={`bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700/50 hover:border-blue-500/50 transition-all ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                  }`}
                >
                  <div className="flex flex-wrap justify-between items-start mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">{job.role}</h3>
                      <p className="text-blue-400 font-medium">{job.company}</p>
                    </div>
                    <span className="px-3 py-1 bg-slate-900 text-slate-300 rounded-full text-xs font-semibold uppercase tracking-wide border border-slate-700">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    {job.description}
                  </p>
                </div>
              </div>

              {/* Spacer for the other side */}
              <div className="flex-1 hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Experience;