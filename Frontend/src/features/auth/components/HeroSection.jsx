import React from 'react';
import { useNavigate } from 'react-router';
import CTAButton from './CTAButton';
import useAuth from '../hooks/useAuth';

const HeroSection = () => {
    const navigate = useNavigate();
    const { user } = useAuth()

    const handleStartBattle = () => {
        if (user) {
            navigate('/battle-arena');
        } else {
            navigate('/auth/login');
        }
    };

    return (
        <section 
            id="hero-section"
            className="
                relative
                flex flex-col items-center justify-center
                pt-40 pb-24 px-6
                text-center
                overflow-hidden
            "
        >
            {/* Background gradient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12)_0%,rgba(139,92,246,0.06)_40%,transparent_70%)]" />
            </div>

            {/* Subtle grid pattern */}
            <div 
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                    backgroundSize: '48px 48px'
                }}
            />

            {/* Content */}
            <div className="relative z-10 animate-hero-fade-in">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/3 border border-white/6 text-xs text-[#c2c6d6] font-medium tracking-wider uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
                    AI-Powered Comparison Platform
                </div>

                {/* Headline */}
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-[-0.04em] leading-[1.1] text-white mb-6">
                    Compare AI.{' '}
                    <br />
                    <span className="bg-linear-to-r from-[#3B82F6] via-[#6d6ff6] to-[#8B5CF6] bg-clip-text text-transparent">
                        Choose the Best.
                    </span>
                </h1>

                {/* Subtext */}
                <p className="text-lg md:text-xl text-[#9CA3AF] max-w-xl mx-auto leading-relaxed mb-10 font-normal">
                    Ask one question. Get two AI answers.
                    <br className="hidden md:block" /> 
                    {' '}Let the system judge who wins.
                </p>

                {/* CTA */}
                <CTAButton text="Start Battle" onClick={handleStartBattle} />
            </div>
        </section>
    );
};

export default HeroSection;
