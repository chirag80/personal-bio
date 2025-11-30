import React from 'react';
import SectionContainer from './SectionContainer';
import { SKILL_CATEGORIES } from '../constants';
import { Code, Brain, Cloud, Server, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  code: Code,
  brain: Brain,
  cloud: Cloud,
  server: Server
};

const Skills: React.FC = () => {
  return (
    <SectionContainer id="skills" title="Technical Skills" subtitle="Technologies and frameworks I work with.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SKILL_CATEGORIES.map((category, idx) => {
          const IconComponent = iconMap[category.icon];
          
          return (
            <div key={idx} className="bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-blue-500 transition-colors group">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <IconComponent className="w-6 h-6 text-blue-400 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2 text-slate-400">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default Skills;