import React from 'react';

const ScoreBadge = ({ label, score, isWinner }) => {
  return (
    <div className={`flex-1 flex flex-col items-center p-5 rounded-xl transition-all duration-300 ${
      isWinner
        ? 'bg-gold/5 border border-gold/20 shadow-[0_0_30px_rgba(245,158,11,0.1)]'
        : 'bg-surface-card border border-outline/10'
    }`}>
      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-text-muted mb-3">
        {label}
      </span>
      <span className={`text-4xl font-extrabold tracking-tight ${
        isWinner ? 'text-gold' : 'text-text'
      }`}>
        {score}
        <span className="text-lg font-medium text-text-muted">/10</span>
      </span>
      {isWinner && (
        <span className="mt-2 text-[10px] font-bold uppercase tracking-widest text-gold">
          ★ Winner
        </span>
      )}
    </div>
  );
};

export default ScoreBadge;
