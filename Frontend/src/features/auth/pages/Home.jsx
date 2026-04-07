import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeatureSteps from '../components/FeatureSteps';

const Home = () => {
    return (
        <div className="min-h-screen bg-[#0B0F19] text-white overflow-hidden">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <HeroSection />

            {/* Feature Steps */}
            <FeatureSteps />

            {/* Footer (minimalist) */}
            <footer id="footer" className="w-full border-t border-white/4 py-8 px-8">
                <div className="max-w-5xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white/40 tracking-tight">MODEL DUEL AI</span>
                    </div>
                    <p className="text-[11px] text-white/20 font-normal">
                        © {new Date().getFullYear()} Model Duel. High-stakes AI intelligence.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
