import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import geminiIcon from '../../../assets/gemini-color.svg';
import mistralIcon from '../../../assets/mistral-color.svg';
import cohereIcon from '../../../assets/cohere-color.svg';
import useAuth from '../hooks/useAuth';
import AuthLoader from '../components/AuthLoader';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, loading } = useAuth()
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();
        const loggedInUser = await login({ email, password })
        if (loggedInUser) {
            navigate("/")
        }
    }

    const handleGoogleAuth = () => {
        window.location.href = "/api/v1/auth/google";
    }

    if (loading) {
        return <AuthLoader />
    }

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

            {/* Right Side: Login Form */}
            <div className="w-full md:w-1/2 relative flex items-center justify-center p-6 bg-surface-dim">
                <div className="absolute inset-0 grid-overlay opacity-20"></div>
                <div className="glass-container w-full max-w-md p-8 rounded-xl relative z-10">
                    <div className="flex flex-col items-center mb-6">
                        <div className="w-10 h-10 rounded bg-surface-container-highest flex items-center justify-center mb-4 border border-outline-variant/30">
                            <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                        </div>
                        <h2 className="text-2xl font-bold text-on-surface tracking-tight mb-2">NEURAL AUTHENTICATION</h2>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div className="space-y-2">
                            <label htmlFor='emailID' className="text-[10px] uppercase tracking-widest font-bold text-primary opacity-80 ml-1">Email Address</label>
                            <input
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete='off' className="w-full bg-surface-container-lowest/30 border border-outline-variant/20 rounded-lg px-5 py-3.5 text-on-surface placeholder:text-outline/50 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/40 transition-all backdrop-blur-md" placeholder="vane@nexus.io" type="email" id='emailID' />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor='password' className="text-[10px] uppercase tracking-widest font-bold text-primary opacity-80 ml-1">Password</label>
                            <div className="relative">
                                <input
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-surface-container-lowest/30 border border-outline-variant/20 rounded-lg px-5 py-3.5 text-on-surface placeholder:text-outline/50 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/40 transition-all backdrop-blur-md" placeholder="••••••••" type={showPassword ? "text" : "password"} id='password' />
                                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant hover:text-on-surface transition-colors cursor-pointer" type="button" onClick={() => setShowPassword(!showPassword)}>
                                    <span className="material-symbols-outlined text-[20px]">{showPassword ? "visibility_off" : "visibility"}</span>
                                </button>
                            </div>
                        </div>
                        <div className="pt-2">
                            <button type='submit' className="w-full bg-linear-to-br from-primary-dim to-primary text-on-primary-fixed font-bold py-4 rounded-lg transition-all duration-300 transform active:scale-[0.98] glow-hover uppercase tracking-widest text-xs">
                                Initiate Login Sequence
                            </button>
                        </div>
                    </form>

                    <div className="relative mt-5 flex items-center justify-center">
                        <span className="h-px bg-outline-variant/20 w-full"></span>
                        <span className="h-px bg-outline-variant/20 w-full"></span>
                    </div>

                    <div className="mt-5 pt-1">
                        <button 
                            type="button" 
                            onClick={handleGoogleAuth}
                            className="w-full group relative flex items-center justify-center gap-3 bg-surface-container-lowest/50 border border-outline-variant/20 text-on-surface font-semibold py-3.5 rounded-lg hover:bg-surface-container/80 transition-all duration-300 backdrop-blur-md transform hover:scale-[0.99] active:scale-[0.98]"
                        >
                            <svg viewBox="0 0 24 24" className="w-5 h-5 transition-transform group-hover:scale-110" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            </svg>
                            <span className="text-sm tracking-wide">Continue with Google</span>
                        </button>
                    </div>

                    <div className="mt-4 pt-5 border-t border-outline-variant/10 text-center">
                        <p className="text-on-surface-variant text-xs">
                            New entity detected?
                            <Link className="text-primary font-bold hover:text-white transition-colors ml-1" to="/auth/register">Establish New Profile</Link>
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

export default Login;