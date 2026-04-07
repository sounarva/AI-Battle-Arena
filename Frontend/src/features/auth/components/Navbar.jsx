import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <nav
            id="navbar"
            className="
                fixed top-0 left-0 right-0 z-50
                flex items-center justify-between
                px-8 py-4
                bg-[#0B0F19]/80 backdrop-blur-xl
                border-b border-white/4
            "
        >
            {/* Left — Logo */}
            <Link to="/" className="flex items-center gap-2.5 group" id="navbar-logo">
                {/* Duel icon */}
                <div className="flex items-center gap-2.5 cursor-pointer group">
                    <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-surface-card border border-outline/20 group-hover:border-primary/50 transition-colors">
                        {/* Custom SVG Logo for Model Duel */}
                        <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 12L9 7L13 11M4 12L9 17L13 13M4 12L2 12M20 12L15 7L11 11M20 12L15 17L11 13M20 12L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="12" cy="12" r="3" className="text-cyan-accent" stroke="currentColor" strokeWidth="2" />
                        </svg>
                        <div className="absolute inset-0 bg-primary/20 blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="font-extrabold text-sm tracking-widest uppercase">
                        <span className="text-text-muted transition-colors group-hover:text-text">Model</span>{' '}
                        <span className="bg-linear-to-r from-primary-dim to-cyan-accent bg-clip-text text-transparent">Duel Arena</span>
                    </span>
                </div>
            </Link>

            {/* Right — Auth buttons */}
            <div className="flex items-center gap-3">
                <Link
                    to="/auth/login"
                    id="navbar-login"
                    className="
                        px-5 py-2
                        text-sm font-medium
                        text-[#c2c6d6] hover:text-white
                        rounded-lg
                        border border-white/6 hover:border-white/12
                        bg-white/2 hover:bg-white/5
                        transition-all duration-200
                    "
                >
                    Login
                </Link>
                <Link
                    to="/auth/register"
                    id="navbar-signup"
                    className="
                        px-5 py-2
                        text-sm font-medium
                        text-white
                        rounded-lg
                        bg-linear-to-r from-[#3B82F6] to-[#8B5CF6]
                        shadow-[0_0_16px_rgba(59,130,246,0.15)]
                        hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]
                        transition-all duration-200
                    "
                >
                    Sign Up
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
