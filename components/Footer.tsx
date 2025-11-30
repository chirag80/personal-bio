import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, MapPin, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="scroll-mt-24 bg-slate-950 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Let's Connect</h2>
            <div className="space-y-4">
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors group">
                <div className="p-2 bg-slate-900 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span>Connect on LinkedIn</span>
              </a>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-900 rounded-lg">
                  <MapPin className="w-5 h-5 text-slate-500" />
                </div>
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-900 rounded-lg">
                  <Mail className="w-5 h-5 text-slate-500" />
                </div>
                <span>{PERSONAL_INFO.email}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-4">Quick Note</h3>
            <p className="text-sm leading-relaxed mb-6">
              I'm always open to connecting with fellow engineers, collaborating on projects, or discussing UI engineering, cloud migration, and applied AI. Feel free to reach out!
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;