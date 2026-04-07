import React from 'react';

const AuthLoader = () => {
    return (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-surface/50 backdrop-blur-md rounded-xl">
            <div className="flex flex-col items-center justify-center p-8 bg-surface-container-highest/90 border border-outline-variant/30 rounded-2xl shadow-xl">
                <div className="relative w-16 h-16 mb-5">
                    {/* Background ring */}
                    <div className="absolute inset-0 border-4 border-surface-container-lowest rounded-full backdrop-blur-sm opacity-50"></div>
                    {/* Spinning ring */}
                    <div className="absolute inset-0 border-4 border-primary rounded-full animate-spin border-t-transparent shadow-[0_0_15px_rgba(132,85,239,0.5)]"></div>
                    {/* Center glowing dot */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-cyan-accent animate-pulse shadow-[0_0_10px_rgba(0,255,255,0.8)]"></div>
                    </div>
                </div>
                <h3 className="text-sm font-bold tracking-[0.25em] uppercase text-primary animate-pulse">Processing</h3>
                <p className="text-[10px] text-on-surface-variant font-mono mt-2 opacity-80">Establishing connection...</p>
            </div>
        </div>
    );
};

export default AuthLoader;
