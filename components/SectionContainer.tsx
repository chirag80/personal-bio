import React, { ReactNode } from 'react';

interface SectionContainerProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = "",
  dark = false
}) => {
  return (
    <section 
      id={id} 
      className={`scroll-mt-24 py-12 px-4 sm:px-6 lg:px-8 ${dark ? 'bg-slate-900' : 'bg-slate-950'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-10">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg max-w-2xl mx-auto text-slate-400">
                {subtitle}
              </p>
            )}
            <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-blue-600"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;