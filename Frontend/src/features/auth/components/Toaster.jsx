import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

const Toaster = () => {
    const { error, setError } = useAuth();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (error) {
            setIsVisible(true);
            const timer = setTimeout(() => {
                setIsVisible(false);
                // Wait for exit animation to finish before clearing error from state
                setTimeout(() => setError(null), 500);
            }, 4000);
            return () => clearTimeout(timer);
        } else {
            setIsVisible(false);
        }
    }, [error, setError]);

    return (
        <div 
            className={`fixed top-8 left-1/2 -translate-x-1/2 z-9999 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
            ${isVisible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-24 opacity-0 scale-95 pointer-events-none'}
            flex items-center gap-4 px-5 py-4 rounded-2xl border border-red-500/20 bg-surface-container-highest/95 backdrop-blur-xl shadow-[0_10px_40px_rgba(239,68,68,0.2)] max-w-[90vw] min-w-[320px]`}
        >
            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20 shadow-inner">
                <span className="material-symbols-outlined text-red-400" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
            </div>
            
            <div className="flex flex-col flex-1 pr-2">
                <h4 className="text-[10px] font-bold text-red-500 tracking-[0.2em] uppercase">System Error</h4>
                <p className="text-sm text-on-surface font-medium leading-tight mt-0.5">{error}</p>
            </div>
            
            <button 
                onClick={() => {
                    setIsVisible(false);
                    setTimeout(() => setError(null), 500);
                }} 
                className="text-outline-variant hover:text-white transition-colors p-1 flex items-center justify-center"
                type="button"
                aria-label="Close error message"
            >
                <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
        </div>
    );
};

export default Toaster;