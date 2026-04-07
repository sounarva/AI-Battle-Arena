import React from 'react';

const CTAButton = ({ text, onClick, className = '' }) => {
    return (
        <button
            id="cta-start-battle"
            onClick={onClick}
            className={`
                relative group cursor-pointer
                px-8 py-3.5
                rounded-xl
                font-semibold text-base tracking-wide
                text-white
                bg-linear-to-r from-[#3B82F6] to-[#8B5CF6]
                shadow-[0_0_24px_rgba(59,130,246,0.25)]
                transition-all duration-300 ease-out
                hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]
                hover:scale-[1.03]
                active:scale-[0.98]
                ${className}
            `}
        >
            {/* Glow overlay on hover */}
            <span className="absolute inset-0 rounded-xl bg-linear-to-r from-[#3B82F6]/20 to-[#8B5CF6]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Button text */}
            <span className="relative flex items-center gap-2">
                {text}
                <svg 
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={2.5}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </span>
        </button>
    );
};

export default CTAButton;
