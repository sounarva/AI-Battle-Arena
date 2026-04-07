import React from 'react';

const steps = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
        title: 'Enter Your Prompt',
        description: 'Type a question or challenge for the AI models to tackle simultaneously.',
        accent: '#3B82F6',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <path d="M12 2a4 4 0 014 4v1a4 4 0 01-8 0V6a4 4 0 014-4z" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M8 14h8M6 18h12" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round"/>
                <rect x="3" y="11" width="7" height="11" rx="1.5" stroke="#8B5CF6" strokeWidth="1.5"/>
                <rect x="14" y="11" width="7" height="11" rx="1.5" stroke="#8B5CF6" strokeWidth="1.5"/>
            </svg>
        ),
        title: 'Two AIs Respond',
        description: 'Watch two different AI models generate their answers in parallel.',
        accent: '#8B5CF6',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <path d="M12 3v2M4.93 6.93l1.41 1.41M3 14h2M6.34 19.07l1.41-1.41M12 21v-2M17.66 19.07l-1.41-1.41M21 14h-2M19.07 6.93l-1.41 1.41" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="12" cy="13" r="4" stroke="#F59E0B" strokeWidth="1.5"/>
                <path d="M10 13l1.5 1.5L14.5 11" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
        title: 'AI Judge Scores',
        description: 'An independent AI evaluates accuracy, tone, and depth to pick the winner.',
        accent: '#F59E0B',
    },
];

const FeatureSteps = () => {
    return (
        <section id="feature-steps" className="relative w-full max-w-5xl mx-auto px-6 pb-28">
            {/* Section label */}
            <div className="text-center mb-14">
                <span className="text-xs text-[#8B5CF6] font-semibold tracking-[0.2em] uppercase">
                    How It Works
                </span>
                <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-white">
                    The Three Pillars of Evaluation
                </h2>
            </div>

            {/* Steps grid */}
            <div className="grid grid-cols-3 gap-5">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        id={`feature-step-${index + 1}`}
                        className="
                            group relative
                            rounded-2xl p-6
                            bg-[#131A2B]/60
                            border border-white/4
                            backdrop-blur-sm
                            transition-all duration-500 ease-out
                            hover:bg-[#1c2538]/80
                            hover:border-white/8
                            hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                            hover:-translate-y-1
                        "
                        style={{
                            animationDelay: `${index * 150}ms`,
                        }}
                    >
                        {/* Top edge highlight */}
                        <div 
                            className="absolute top-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{ background: `linear-gradient(90deg, transparent, ${step.accent}40, transparent)` }}
                        />

                        {/* Step number */}
                        <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#6b7280] mb-5 block">
                            Step {index + 1}
                        </span>

                        {/* Icon container */}
                        <div 
                            className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
                            style={{ 
                                backgroundColor: `${step.accent}10`,
                            }}
                        >
                            {step.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold text-white mb-2.5 tracking-tight">
                            {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-[#9CA3AF] leading-relaxed">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeatureSteps;
