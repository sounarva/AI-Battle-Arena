import React from 'react';
import SolutionCard from './SolutionCard';

const BattleArena = ({ result, isLoading }) => {
  // Empty state
  if (!isLoading && !result) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
        {/* Crossed Swords SVG */}
        <svg className="w-16 h-16 text-primary-dim/40 mb-4 animate-float" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L46 34M46 6L18 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M14 30L6 38L12 44L20 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M50 30L58 38L52 44L44 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="32" cy="48" r="3" stroke="currentColor" strokeWidth="2" />
          <path d="M16 8L20 4M48 8L44 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted/40">
          Submit a query to start the battle
        </p>
      </div>
    );
  }

  const solution1 = result?.solution_1 || '';
  const solution2 = result?.solution_2 || '';
  const judge = result?.judge_recommendation;
  const s1Score = judge?.solution_1_score ?? 0;
  const s2Score = judge?.solution_2_score ?? 0;
  const winner = s1Score > s2Score ? 1 : s2Score > s1Score ? 2 : 0;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 mt-8">
      <div className="flex gap-5">
        <SolutionCard
          title="Solution 1"
          content={solution1}
          variant="purple"
          isLoading={isLoading}
          isWinner={!isLoading && winner === 1}
        />
        <SolutionCard
          title="Solution 2"
          content={solution2}
          variant="cyan"
          isLoading={isLoading}
          isWinner={!isLoading && winner === 2}
        />
      </div>
    </div>
  );
};

export default BattleArena;
