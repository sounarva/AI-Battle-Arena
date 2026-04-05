import React from 'react';
import ScoreBadge from './ScoreBadge';

const JudgePanel = ({ judge, isLoading }) => {
  if (!isLoading && !judge) return null;

  // Loading skeleton
  if (isLoading) {
    return (
      <div className="w-full max-w-5xl mx-auto px-4 mt-8 mb-16">
        <div className="rounded-2xl bg-surface/80 border border-outline/10 p-8">
          <div className="text-center mb-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted/30">
              AI Judge Verdict
            </span>
          </div>
          <div className="flex gap-4 mb-6">
            <div className="flex-1 flex flex-col items-center p-5 rounded-xl bg-surface-card border border-outline/10">
              <div className="h-3 w-16 rounded animate-shimmer mb-3" />
              <div className="h-10 w-14 rounded animate-shimmer" />
            </div>
            <div className="flex items-center">
              <span className="text-text-muted/20 text-sm font-medium">VS</span>
            </div>
            <div className="flex-1 flex flex-col items-center p-5 rounded-xl bg-surface-card border border-outline/10">
              <div className="h-3 w-16 rounded animate-shimmer mb-3" />
              <div className="h-10 w-14 rounded animate-shimmer" />
            </div>
          </div>
          <div className="text-center">
            <span className="text-xs text-text-muted/30 animate-pulse-glow inline-block">
              ⏳ Waiting for responses...
            </span>
          </div>
        </div>
      </div>
    );
  }

  const s1Score = judge.solution_1_score ?? 0;
  const s2Score = judge.solution_2_score ?? 0;
  const winner = s1Score > s2Score ? 1 : s2Score > s1Score ? 2 : 0;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 mt-8 mb-16 animate-fade-in">
      <div className="rounded-2xl bg-surface/80 border border-outline/10 p-8 relative overflow-hidden">
        {/* Subtle top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-linear-to-r from-transparent via-gold/40 to-transparent" />

        <div className="text-center mb-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            ⚖ AI Judge Verdict
          </span>
        </div>

        {/* Scores */}
        <div className="flex gap-4 mb-6 items-stretch">
          <ScoreBadge
            label="Solution 1"
            score={s1Score}
            isWinner={winner === 1}
          />
          <div className="flex items-center">
            <span className="text-text-muted/30 text-sm font-medium">VS</span>
          </div>
          <ScoreBadge
            label="Solution 2"
            score={s2Score}
            isWinner={winner === 2}
          />
        </div>

        {/* Reasoning */}
        <div className="grid grid-cols-2 gap-5">
          {/* Solution 1 Reasoning */}
          <div className="group relative rounded-2xl bg-surface-card/30 p-5 border border-outline/5 overflow-hidden transition-all duration-300 hover:bg-surface-card/50">
            <div className="absolute top-0 left-0 w-[2px] h-full bg-linear-to-b from-primary via-primary-dim/40 to-transparent" />
            <div className="pl-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-primary/30 text-2xl font-serif leading-none">"</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary/50">
                  Solution 1 Reasoning
                </span>
              </div>
              <p className="text-[13px] text-text-muted/90 leading-[1.8] italic font-light tracking-wide">
                {judge.solution_1_reasoning}
              </p>
            </div>
          </div>

          {/* Solution 2 Reasoning */}
          <div className="group relative rounded-2xl bg-surface-card/30 p-5 border border-outline/5 overflow-hidden transition-all duration-300 hover:bg-surface-card/50">
            <div className="absolute top-0 left-0 w-[2px] h-full bg-linear-to-b from-cyan-accent via-cyan-accent/40 to-transparent" />
            <div className="pl-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-cyan-accent/30 text-2xl font-serif leading-none">"</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-cyan-accent/50">
                  Solution 2 Reasoning
                </span>
              </div>
              <p className="text-[13px] text-text-muted/90 leading-[1.8] italic font-light tracking-wide">
                {judge.solution_2_reasoning}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JudgePanel;
