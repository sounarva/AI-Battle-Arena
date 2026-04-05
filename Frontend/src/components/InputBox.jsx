import React, { useState } from 'react';

const InputBox = ({ onSubmit, isLoading }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() && !isLoading) {
      onSubmit(query.trim());
      setQuery('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto px-4">
      <div className="relative flex items-center rounded-xl border border-outline/20 bg-surface-card/60 backdrop-blur-xl transition-all duration-300 focus-within:border-primary-dim/50 focus-within:shadow-[0_0_20px_rgba(132,85,239,0.15)]">
        <input
          id="query-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete='off'
          placeholder="Ask anything..."
          disabled={isLoading}
          className="flex-1 bg-transparent px-5 py-4 text-text text-base placeholder:text-text-muted/50 outline-none disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={!query.trim() || isLoading}
          className="mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-primary-dim to-primary text-bg transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95 disabled:opacity-30 disabled:hover:scale-100 cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
            <path d="M3.105 2.288a.75.75 0 0 0-.826.95l1.414 4.926A1.5 1.5 0 0 0 5.135 9.25h6.115a.75.75 0 0 1 0 1.5H5.135a1.5 1.5 0 0 0-1.442 1.086l-1.414 4.926a.75.75 0 0 0 .826.95 28.897 28.897 0 0 0 15.293-7.155.75.75 0 0 0 0-1.114A28.897 28.897 0 0 0 3.105 2.288Z" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default InputBox;
