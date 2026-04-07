import React, { useState } from 'react';
import { Link } from 'react-router';
import geminiIcon from '../../../assets/gemini-color.svg';
import mistralIcon from '../../../assets/mistral-color.svg';
import cohereIcon from '../../../assets/cohere-color.svg';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex h-screen w-full bg-surface overflow-hidden text-on-surface">
            {/* Left Side: Immersive Visuals */}
            <div className="relative hidden md:flex md:w-1/2 items-center justify-center overflow-hidden bg-surface">
                <div className="absolute inset-0 grid-overlay opacity-40"></div>
                {/* Abstract Neural Core Background */}
                <div className="absolute w-[150%] h-[150%] top-[-25%] left-[-25%] opacity-30 blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, rgba(132, 85, 239, 0.2) 0%, transparent 70%)" }}></div>
                <div className="relative flex flex-col justify-center gap-5 z-10 px-16 max-w-2xl">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-4">
                            <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 12L9 7L13 11M4 12L9 17L13 13M4 12L2 12M20 12L15 7L11 11M20 12L15 17L11 13M20 12L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="12" cy="12" r="3" className="text-cyan-accent" stroke="currentColor" strokeWidth="2" />
                            </svg>
                            <h1 className="text-7xl font-black tracking-tight leading-none text-on-surface">
                                MODEL DUEL
                            </h1>
                        </div>
                        <h1 className="text-6xl font-black tracking-tight leading-none text-transparent bg-clip-text bg-linear-to-br from-primary-dim to-primary">
                            ARENA
                        </h1>
                    </div>
                    <p className="text-on-surface-variant text-md leading-relaxed max-w-lg">
                        Ask one question and get answers from multiple AI models side by side. Compare their responses, evaluate their strengths, and let an intelligent judge score them—so you can quickly identify the best solution with confidence.
                    </p>
                    {/* Model Combatants Showcase */}
                    <div className="mt-8 flex items-center gap-5 p-4 rounded-xl border border-outline-variant/15" style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
                        {/* Overlapping model badges */}
                        <div className="flex items-center -space-x-3 shrink-0">
                            <div className="w-11 h-11 rounded-full bg-surface-container-highest/80 border-2 border-surface flex items-center justify-center shadow-lg ring-1 ring-outline-variant/20 z-30 hover:scale-110 hover:z-40 transition-transform duration-300">
                                <img src={geminiIcon} alt="Gemini" className="w-6 h-6" />
                            </div>
                            <div className="w-11 h-11 rounded-full bg-surface-container-highest/80 border-2 border-surface flex items-center justify-center shadow-lg ring-1 ring-outline-variant/20 z-20 hover:scale-110 hover:z-40 transition-transform duration-300">
                                <img src={mistralIcon} alt="Mistral" className="w-6 h-6" />
                            </div>
                            <div className="w-11 h-11 rounded-full bg-surface-container-highest/80 border-2 border-surface flex items-center justify-center shadow-lg ring-1 ring-outline-variant/20 z-10 hover:scale-110 hover:z-40 transition-transform duration-300">
                                <img src={cohereIcon} alt="Cohere" className="w-6 h-6" />
                            </div>
                        </div>
                        {/* Text beside badges */}
                        <div className="flex flex-col gap-0.5">
                            <span className="text-on-surface font-semibold text-sm tracking-tight">Active Combatants</span>
                            <span className="text-on-surface-variant text-xs leading-snug">Top-tier AI models deployed and ready to battle in the arena.</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Register Form */}
            <div className="w-full md:w-1/2 relative flex items-center justify-center p-6 bg-surface-dim">
                <div className="absolute inset-0 grid-overlay opacity-20"></div>
                <div className="glass-container w-full max-w-md p-8 rounded-xl relative z-10">
                    <div className="flex flex-col items-center mb-6">
                        <div className="w-10 h-10 rounded bg-surface-container-highest flex items-center justify-center mb-4 border border-outline-variant/30">
                            <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                        </div>
                        <h2 className="text-2xl font-bold text-on-surface tracking-tight mb-2">NEURAL INITIALIZATION</h2>
                    </div>

                    <form className="space-y-5">
                        <div className="space-y-2">
                            <label htmlFor='emailID' className="text-[10px] uppercase tracking-widest font-bold text-primary opacity-80 ml-1">Email Address</label>
                            <input autoComplete='off' className="w-full bg-surface-container-lowest/30 border border-outline-variant/20 rounded-lg px-5 py-3.5 text-on-surface placeholder:text-outline/50 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/40 transition-all backdrop-blur-md" placeholder="vane@nexus.io" type="email" id='emailID' />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor='password' className="text-[10px] uppercase tracking-widest font-bold text-primary opacity-80 ml-1">Password</label>
                            <div className="relative">
                                <input id='password' className="w-full bg-surface-container-lowest/30 border border-outline-variant/20 rounded-lg px-5 py-3.5 text-on-surface placeholder:text-outline/50 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/40 transition-all backdrop-blur-md" placeholder="••••••••" type={showPassword ? "text" : "password"} />
                                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant hover:text-on-surface transition-colors cursor-pointer" type="button" onClick={() => setShowPassword(!showPassword)}>
                                    <span className="material-symbols-outlined text-[20px]">{showPassword ? "visibility_off" : "visibility"}</span>
                                </button>
                            </div>
                        </div>
                        <div className="pt-2">
                            <button className="w-full bg-linear-to-br from-primary-dim to-primary text-on-primary-fixed font-bold py-4 rounded-lg transition-all duration-300 transform active:scale-[0.98] glow-hover uppercase tracking-widest text-xs" type="button">
                                Establish New Profile
                            </button>
                        </div>
                    </form>

                    <div className="mt-4 pt-5 border-t border-outline-variant/10 text-center">
                        <p className="text-on-surface-variant text-xs">
                            Already have an account?
                            <Link className="text-primary font-bold hover:text-white transition-colors duration-300 ml-1" to="/auth/login">Log in</Link>
                        </p>
                    </div>
                </div>

                {/* Footer Decorative Elements */}
                <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center opacity-30 pointer-events-none">
                    <span className="text-[10px] font-mono text-on-surface-variant uppercase tracking-[0.3em]">System.Ready()</span>
                    <div className="flex gap-4">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-tertiary"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
