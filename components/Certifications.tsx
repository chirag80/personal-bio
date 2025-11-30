import React from 'react';
import SectionContainer from './SectionContainer';
import { CERTIFICATIONS } from '../constants';
import { Award, CheckCircle } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <SectionContainer 
      id="certifications" 
      title="Certifications" 
      subtitle="Validation of my expertise in cloud and AI technologies."
      dark={true} // Alternate background
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {CERTIFICATIONS.map((cert, index) => (
          <div key={index} className="flex items-start gap-4 bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-sm hover:border-blue-500/50 transition-all">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-amber-900/20 rounded-full flex items-center justify-center border border-amber-900/30">
                <Award className="w-6 h-6 text-amber-500" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">{cert.name}</h3>
              <p className="text-slate-400 text-sm mb-3">{cert.issuer}</p>
              <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-medium bg-emerald-900/20 inline-block px-2 py-1 rounded border border-emerald-900/30">
                <CheckCircle className="w-3 h-3" />
                <span>Verified</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Certifications;