import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const SolutionCard = ({ title, content, variant, isLoading, isWinner }) => {
  const borderColor = variant === 'purple'
    ? 'border-primary-dim/40 shadow-[0_0_30px_rgba(132,85,239,0.08)]'
    : 'border-cyan-accent/40 shadow-[0_0_30px_rgba(6,182,212,0.08)]';

  const glowColor = variant === 'purple'
    ? 'from-primary-dim/20 to-transparent'
    : 'from-cyan-accent/20 to-transparent';

  const labelColor = variant === 'purple' ? 'text-primary' : 'text-cyan-accent';

  if (isLoading) {
    return (
      <div className={`flex-1 rounded-2xl border ${borderColor} bg-surface-card p-6 min-h-[280px]`}>
        <div className="flex items-center justify-between mb-6">
          <span className={`text-xs font-semibold uppercase tracking-widest ${labelColor}`}>
            {title}
          </span>
          <div className="flex items-center px-3 py-1.5 rounded-lg bg-surface-bright/30 border border-outline/20 backdrop-blur-md shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary-dim/10 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
            <span className="text-[10px] font-bold tracking-widest uppercase text-text-muted relative z-10 animate-pulse-glow">
              Generating...
            </span>
          </div>
        </div>
        <div className="space-y-3">
          <div className="h-4 w-[85%] rounded animate-shimmer" />
          <div className="h-4 w-[70%] rounded animate-shimmer" />
          <div className="h-4 w-[92%] rounded animate-shimmer" />
          <div className="h-4 w-[60%] rounded animate-shimmer" />
          <div className="h-20 w-full rounded-lg animate-shimmer mt-4" />
          <div className="h-4 w-[75%] rounded animate-shimmer" />
          <div className="h-4 w-[50%] rounded animate-shimmer" />
        </div>
      </div>
    );
  }

  return (
    <div className={`animate-fade-in flex-1 rounded-2xl border ${borderColor} bg-surface-card overflow-hidden relative`}>
      {/* Top gradient accent */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-linear-to-r ${glowColor}`} />

      <div className="p-6">
        <div className="flex items-center justify-between mb-5">
          <span className={`text-xs font-semibold uppercase tracking-widest ${labelColor}`}>
            {title}
          </span>
          {isWinner && (
            <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-gold/10 text-gold border border-gold/20">
              ★ Winner
            </span>
          )}
        </div>
        <div className="max-h-[400px] overflow-y-auto pr-2 text-sm text-text-muted leading-relaxed prose prose-invert prose-sm max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              table({ children }) {
                return (
                  <div className="overflow-x-auto mb-6 rounded-lg border border-outline/10 bg-surface-bright/20">
                    <table className="w-full text-left text-sm text-text-muted border-collapse">
                      {children}
                    </table>
                  </div>
                );
              },
              thead({ children }) {
                return <thead className="bg-surface-bright/30 text-text/90 font-semibold border-b border-outline/10">{children}</thead>;
              },
              tbody({ children }) {
                return <tbody className="divide-y divide-outline/5">{children}</tbody>;
              },
              tr({ children }) {
                return <tr className="hover:bg-surface-bright/10 transition-colors">{children}</tr>;
              },
              th({ children }) {
                return <th className="px-4 py-3 whitespace-nowrap">{children}</th>;
              },
              td({ children }) {
                return <td className="px-4 py-3 min-w-[120px]">{children}</td>;
              },
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={oneDark}
                    language={match[1]}
                    PreTag="div"
                    customStyle={{
                      margin: '20px 0',
                      borderRadius: '8px',
                      fontSize: '13px',
                      background: 'transparent',
                      border: '1px solid rgba(72, 71, 77, 0.15)',
                      padding: '16px',
                    }}
                    codeTagProps={{
                      style: { background: 'transparent' }
                    }}
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className="bg-surface-bright/50 text-primary px-1.5 py-0.5 rounded text-xs" {...props}>
                    {children}
                  </code>
                );
              },
              p({ children }) {
                return <p className="mb-5 text-text-muted leading-[1.9]">{children}</p>;
              },
              strong({ children }) {
                return <strong className="text-text font-semibold">{children}</strong>;
              },
              ul({ children }) {
                return <ul className="list-disc list-inside mb-5 space-y-2.5 text-text-muted leading-[1.8]">{children}</ul>;
              },
              ol({ children }) {
                return <ol className="list-decimal list-inside mb-5 space-y-2.5 text-text-muted leading-[1.8]">{children}</ol>;
              },
              h1({ children }) {
                return <h1 className="text-lg font-bold text-text mt-6 mb-3">{children}</h1>;
              },
              h2({ children }) {
                return <h2 className="text-base font-bold text-text mt-5 mb-3">{children}</h2>;
              },
              h3({ children }) {
                return <h3 className="text-sm font-bold text-text mt-5 mb-3">{children}</h3>;
              },
              blockquote({ children }) {
                return <blockquote className="border-l-2 border-primary-dim/40 pl-4 my-5 text-text-muted/80 italic">{children}</blockquote>;
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
