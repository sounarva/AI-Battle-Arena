import React from 'react';
import mistralLogo from '../assets/mistral-color.svg';
import cohereLogo from '../assets/cohere-color.svg';
import geminiLogo from '../assets/gemini-color.svg';

const Header = () => {
  return (
    <header className="w-full pt-10 pb-8 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight">
        <span className="bg-linear-to-r from-primary-dim to-primary bg-clip-text text-transparent">
          AI Battle Arena
        </span>
      </h1>
      <p className="mt-2 text-sm text-text-muted tracking-wide">
        Compare AI intelligence in real-time
      </p>

      {/* Model Info Bar */}
      <div className="mt-6 flex items-center justify-center gap-3">
        {/* Mistral AI */}
        <div className="flex items-center gap-4 px-4 py-2 rounded-xl bg-surface-card/40 backdrop-blur-xl border border-outline/10 transition-all duration-300 hover:bg-surface-card/60 hover:border-outline/20">
          <img src={mistralLogo} alt="Mistral AI" className="w-5 h-5 shrink-0" />
          <div className="flex flex-col items-start">
            <span className="text-[9px] uppercase tracking-[0.15em] text-text-muted/50 font-medium leading-none">Solution 1</span>
            <span className="text-xs font-semibold text-text/90 mt-0.5">Mistral AI</span>
          </div>
        </div>

        {/* VS */}
        <span className="text-[10px] font-bold tracking-widest text-text-muted/20 uppercase">vs</span>

        {/* Cohere AI */}
        <div className="flex items-center gap-4 px-4 py-2 rounded-xl bg-surface-card/40 backdrop-blur-xl border border-outline/10 transition-all duration-300 hover:bg-surface-card/60 hover:border-outline/20">
          <img src={cohereLogo} alt="Cohere AI" className="w-5 h-5 shrink-0" />
          <div className="flex flex-col items-start">
            <span className="text-[9px] uppercase tracking-[0.15em] text-text-muted/50 font-medium leading-none">Solution 2</span>
            <span className="text-xs font-semibold text-text/90 mt-0.5">Cohere AI</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-outline/15 mx-1" />

        {/* Google Gemini (Judge) */}
        <div className="flex items-center gap-4 px-4 py-2 rounded-xl bg-surface-card/40 backdrop-blur-xl border border-gold/10 transition-all duration-300 hover:bg-surface-card/60 hover:border-gold/20">
          <img src={geminiLogo} alt="Google Gemini" className="w-6 h-6 shrink-0" />
          <div className="flex flex-col items-start">
            <span className="text-[9px] uppercase tracking-[0.15em] text-gold/50 font-medium leading-none">⚖ Judge</span>
            <span className="text-xs font-semibold text-text/90 mt-0.5">Google Gemini</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
