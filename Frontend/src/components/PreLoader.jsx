import React, { useEffect, useState } from 'react';

const PreLoader = ({ onComplete }) => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Simulate application heavy lifting/initialization (2 seconds)
    // Then trigger the fade out animation
    const loadTimer = setTimeout(() => {
      setIsFading(true);
      // Wait for fade animation to finish before unmounting
      setTimeout(() => onComplete(), 500);
    }, 2000);

    return () => clearTimeout(loadTimer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg transition-opacity duration-500 ease-in-out ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center selection:bg-transparent">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-primary/20 rounded-full blur-[50px] pointer-events-none" />

        {/* Loader Graphic */}
        <div className="relative w-24 h-24 mb-8">
          <svg className="w-full h-full animate-[spin_4s_linear_infinite]" viewBox="0 0 100 100">
            {/* Background track */}
            <circle cx="50" cy="50" r="44" stroke="rgba(132, 85, 239, 0.1)" strokeWidth="3" fill="none" />
            <circle cx="50" cy="50" r="34" stroke="rgba(6, 182, 212, 0.05)" strokeWidth="3" fill="none" />
            
            {/* Outer dynamic ring */}
            <path 
              stroke="url(#grad-primary)" 
              strokeWidth="4" 
              strokeLinecap="round" 
              fill="none"
              d="M50 6 A44 44 0 0 1 94 50" 
              className="origin-center" 
              style={{
                animation: 'dash-loading 2s ease-in-out infinite'
              }}
            />
            {/* Inner dynamic ring */}
            <path 
              stroke="url(#grad-secondary)" 
              strokeWidth="4" 
              strokeLinecap="round" 
              fill="none"
              d="M16 50 A34 34 0 0 1 50 16" 
              className="origin-center" 
              style={{
                animation: 'dash-loading-reverse 2.5s ease-in-out infinite'
              }}
            />

            <defs>
              <linearGradient id="grad-primary" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8455EF" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
              <linearGradient id="grad-secondary" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#8455EF" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Center Spark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-accent shadow-[0_0_15px_rgba(6,182,212,0.8)] animate-pulse" />
          </div>
        </div>

        {/* Typography */}
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-xl font-bold tracking-[0.2em] uppercase">
            <span className="bg-linear-to-r from-primary-dim to-cyan-accent bg-clip-text text-transparent opacity-90">
              Battle Arena
            </span>
          </h2>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            <p className="text-[10px] text-primary/60 tracking-[0.3em] font-semibold uppercase">
              Initializing AI Core
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
