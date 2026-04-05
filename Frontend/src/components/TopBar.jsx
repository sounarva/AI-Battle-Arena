import React from 'react';

const TopBar = () => {
  return (
    <div className="w-full flex items-center justify-between px-6 py-4 absolute top-0 left-0 z-50">
      {/* Logo Area */}
      <div className="flex items-center gap-2.5 cursor-pointer group">
        <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-surface-card border border-outline/20 group-hover:border-primary/50 transition-colors">
          {/* Custom SVG Logo for Model Duel */}
          <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12L9 7L13 11M4 12L9 17L13 13M4 12L2 12M20 12L15 7L11 11M20 12L15 17L11 13M20 12L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="12" r="3" className="text-cyan-accent" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <div className="absolute inset-0 bg-primary/20 blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <span className="font-extrabold text-sm tracking-widest uppercase">
          <span className="text-text-muted transition-colors group-hover:text-text">Model</span>{' '}
          <span className="bg-linear-to-r from-primary-dim to-cyan-accent bg-clip-text text-transparent">Duel</span>
        </span>
      </div>

      {/* Logout Button */}
      <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-card/30 backdrop-blur-md border border-outline/10 text-sm font-medium text-text-muted hover:text-red-400 hover:bg-red-500/10 hover:border-red-500/20 transition-all duration-300">
        <span>Logout</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
      </button>
    </div>
  );
};

export default TopBar;
