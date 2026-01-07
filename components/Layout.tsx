
import React from 'react';

export const Section: React.FC<{ children: React.ReactNode; id?: string; className?: string }> = ({ children, id, className = "" }) => (
  <section id={id} className={`py-20 px-6 max-w-6xl mx-auto ${className}`}>
    {children}
  </section>
);

export const Heading: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <h2 className={`text-3xl font-bold mb-12 mono text-cyan-400 flex items-center gap-4 ${className}`}>
    <span className="text-slate-600 text-xl font-normal">#</span> {children}
  </h2>
);
