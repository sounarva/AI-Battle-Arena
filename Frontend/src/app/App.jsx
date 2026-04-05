import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import InputBox from '../components/InputBox';
import BattleArena from '../components/BattleArena';
import JudgePanel from '../components/JudgePanel';
import PreLoader from '../components/PreLoader';
import TopBar from '../components/TopBar';

const MOCK_RESPONSE = {
  solution_1: `To reverse a string in JavaScript, you can use the built-in array methods:

\`\`\`javascript
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // "olleh"
\`\`\`

This approach splits the string into an array of characters, reverses the array, and joins it back. It's **concise** and easy to understand.

> Great for quick scripts and one-liners.`,
  solution_2: `Here's a more **performant** approach using a for loop:

\`\`\`javascript
function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("hello")); // "olleh"
\`\`\`

This avoids creating intermediate arrays and is more **memory efficient** for large strings.

### Why this is better:
- No intermediate array allocations
- \`O(n)\` time with minimal overhead
- Works with any string length`,
  judge_recommendation: {
    solution_1_score: 7,
    solution_2_score: 9,
    solution_1_reasoning: "Clean and readable one-liner using built-in methods. Great for quick scripts but creates intermediate arrays which can be inefficient for very large strings.",
    solution_2_reasoning: "More performant approach with explicit iteration. Better memory efficiency and demonstrates a deeper understanding of string manipulation fundamentals."
  }
};

const App = () => {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [submittedQuery, setSubmittedQuery] = useState('');
  const [error, setError] = useState('');
  const [appMounted, setAppMounted] = useState(false);
  const resultsRef = useRef(null);

  const handleSubmit = async (query) => {
    setError('');
    setIsLoading(true);
    setResult(null);
    setSubmittedQuery(query);

    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);

    try {
      const response = await axios.post('http://localhost:3000/use-graph', { query });
      console.log(response.data.result);
      setResult(response.data.result);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (!appMounted) {
    return <PreLoader onComplete={() => setAppMounted(true)} />;
  }

  return (
    <div className="min-h-screen bg-bg flex flex-col items-center">
      <div className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(72,71,77,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(72,71,77,0.03) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative z-10 w-full flex flex-col items-center">
        <TopBar />
        <Header />
        <InputBox onSubmit={handleSubmit} isLoading={isLoading} />

        {submittedQuery && (isLoading || result) && (
          <div className="mt-8 w-full max-w-5xl mx-auto px-4" ref={resultsRef}>
            <div className="rounded-xl bg-surface/60 border border-outline/10 px-5 py-3 flex items-center gap-3">
              <span className="text-primary-dim text-lg">⚡</span>
              <p className="text-sm text-text-muted">{submittedQuery}</p>
            </div>
          </div>
        )}

        {error && (
          <div className="mt-6 text-sm text-red-400 text-center animate-fade-in">{error}</div>
        )}

        <BattleArena result={result} isLoading={isLoading} />
        <JudgePanel judge={result?.judge_recommendation} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default App;