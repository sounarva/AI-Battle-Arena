import { useRef, useState } from 'react'
import PreLoader from '../../../components/PreLoader';
import TopBar from '../../../components/TopBar';
import Header from '../../../components/Header';
import InputBox from '../../../components/InputBox';
import BattleArena from '../../../components/BattleArena';
import JudgePanel from '../../../components/JudgePanel';
import { useArena } from '../hooks/useArena';

const HomeArena = () => {
    const { result, isLoading, error, handleBattle } = useArena()
    const [submittedQuery, setSubmittedQuery] = useState('');
    const [appMounted, setAppMounted] = useState(false);
    const resultsRef = useRef(null);

    const handleSubmit = async (query) => {
        setSubmittedQuery(query);
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        await handleBattle(query)
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
}

export default HomeArena