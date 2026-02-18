"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { QuestionCard } from "./QuestionCard";
import { ResultsView } from "./ResultsView";
import { SessionHeader } from "./SessionHeader";
import { Sidebar } from "./Sidebar";
import { getRandomQuestions, shuffleArray, type Question } from "@/helpers/question-engine";
import { useSessionHistory } from "@/context/SessionHistoryContext";

export default function PracticeSession() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { seenQuestionIds, markQuestionsAsSeen, isLoaded } = useSessionHistory();

    // Configuration
    const mode = searchParams.get("mode") as "mock" | "flashcard" || "mock";
    const feedbackMode = searchParams.get("feedback") as "immediate" | "end" || (mode === "flashcard" ? "immediate" : "end");

    // State
    const [questions, setQuestions] = React.useState<Question[]>([]);
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [answers, setAnswers] = React.useState<Record<string, string | string[]>>({});
    const [bookmarked, setBookmarked] = React.useState<Set<string>>(new Set());
    const [isFinished, setIsFinished] = React.useState(false);
    const [showFeedbackForCurrent, setShowFeedbackForCurrent] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [startTime] = React.useState(Date.now());
    const [timeSpent, setTimeSpent] = React.useState(0);

    // Initialize
    React.useEffect(() => {
        if (!isLoaded) return;

        const count = mode === "mock" ? 65 : 10;
        const qs = getRandomQuestions(count, seenQuestionIds);

        // Shuffle options for each question so their order is randomized per session
        const shuffledQs = qs.map(q => ({
            ...q,
            options: shuffleArray(q.options)
        }));
        setQuestions(shuffledQs);
        setLoading(false);
        const newIds = qs.map(q => q.id);
        markQuestionsAsSeen(newIds);
    }, [mode, markQuestionsAsSeen, isLoaded]);

    // Derived State
    const currentQuestion = questions[currentIndex];
    const isLastQuestion = currentIndex === questions.length - 1;

    const stats = React.useMemo(() => {
        let correct = 0;
        let incorrect = 0;
        Object.keys(answers).forEach((qId) => {
            const question = questions.find((q) => q.id === qId);
            if (!question) return;

            const selected = answers[qId];
            let isCorrect = false;

            if (Array.isArray(selected) && Array.isArray(question.correctAnswer)) {
                isCorrect =
                    selected.length === question.correctAnswer.length &&
                    selected.every((val) => (question.correctAnswer as string[]).includes(val));
            } else {
                isCorrect = selected === question.correctAnswer;
            }

            if (isCorrect) correct++;
            else incorrect++;
        });
        return { correct, incorrect };
    }, [answers, questions]);

    // Handlers
    const handleAnswerSelect = (option: string) => {
        if (showFeedbackForCurrent || isFinished) return;

        setAnswers(prev => {
            const current = prev[currentQuestion.id];
            if (currentQuestion.multiSelect) {
                let newSelection: string[] = [];
                if (Array.isArray(current)) {
                    if (current.includes(option)) {
                        newSelection = current.filter(o => o !== option);
                    } else {
                        newSelection = [...current, option];
                    }
                } else {
                    newSelection = [option];
                }
                return { ...prev, [currentQuestion.id]: newSelection };
            } else {
                return { ...prev, [currentQuestion.id]: option };
            }
        });

        if (feedbackMode === "immediate" && !currentQuestion.multiSelect) {
            setShowFeedbackForCurrent(true);
        }
    };

    const handleNext = () => {
        setShowFeedbackForCurrent(false);
        if (isLastQuestion) {
            finishSession();
        } else {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const handlePrevious = () => {
        setShowFeedbackForCurrent(feedbackMode === "immediate" ? !!answers[questions[currentIndex - 1]?.id] : false); // Simple logic: if answered in immediate mode, show feedback? Actually just reset for consistency unless stored.
        // For simple flashcards, we usually just go back.
        setCurrentIndex(Math.max(0, currentIndex - 1));
    }

    const toggleBookmark = () => {
        setBookmarked(prev => {
            const next = new Set(prev);
            if (next.has(currentQuestion.id)) next.delete(currentQuestion.id);
            else next.add(currentQuestion.id);
            return next;
        });
    }

    const finishSession = () => {
        setTimeSpent(Date.now() - startTime);
        setIsFinished(true);
    };

    const handleRestart = () => {
        router.push("/");
    };

    if (loading) {
        return <div className="flex items-center justify-center min-h-[50vh] text-white">Loading session...</div>;
    }

    if (isFinished) {
        return (
            <ResultsView
                questions={questions}
                userAnswers={answers}
                onRestart={handleRestart}
                onHome={handleRestart}
                mode={mode}
                bookmarkedQuestions={bookmarked}
                timeSpent={timeSpent}
            />
        );
    }

    // --- RENDER ---

    const questionIds = questions.map(q => q.id);

    return (
        <div className="h-[calc(100vh-4rem)] overflow-hidden bg-[#050609] flex flex-col">
            {/* Removed SessionHeader as it is now empty for both modes */}

            <div className="flex flex-1 overflow-hidden h-full relative">

                {/* Main Content Column */}
                <div className="flex-1 flex flex-col min-w-0">
                    <main className={cn(
                        "flex-1 overflow-y-auto",
                        mode === "mock" ? "p-4 md:p-8" : "py-8 px-4"
                    )}>
                        <div className={cn(
                            "w-full mx-auto flex flex-col gap-6",
                            "max-w-4xl"
                        )}>
                            {/* Question Info Header */}
                            <div className="space-y-2">
                                {mode === "flashcard" && (
                                    <div className="mb-6 space-y-4">
                                        {/* Progress Bar */}
                                        <div className="w-full h-1 bg-[#15171e] rounded-full overflow-hidden flex gap-0.5">
                                            {questions.map((q, idx) => {
                                                const isCurrent = idx === currentIndex;
                                                const ans = answers[q.id];
                                                let colorClass = "bg-[#2a2d36]";

                                                if (ans) {
                                                    let isCorrect = false;
                                                    if (Array.isArray(ans) && Array.isArray(q.correctAnswer)) {
                                                        isCorrect = ans.length === q.correctAnswer.length && ans.every(v => (q.correctAnswer as string[]).includes(v));
                                                    } else {
                                                        isCorrect = ans === q.correctAnswer;
                                                    }
                                                    colorClass = isCorrect ? "bg-emerald-500" : "bg-red-500";
                                                }
                                                // Removed isCurrent check to keep unanswered current question dark

                                                return (
                                                    <div key={q.id} className={cn("h-full flex-1 rounded-full transition-colors", colorClass)} />
                                                );
                                            })}
                                        </div>

                                        {/* Stats */}
                                        <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                                <span className="text-emerald-500">{stats.correct} Correct</span>
                                            </div>
                                            <div className="w-px h-3 bg-white/10" />
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                                <span className="text-red-500">{stats.incorrect} Incorrect</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Card */}
                            <QuestionCard
                                question={currentQuestion}
                                selectedAnswer={answers[currentQuestion.id] || null}
                                onSelect={handleAnswerSelect}
                                showFeedback={
                                    (feedbackMode === "immediate" && showFeedbackForCurrent) ||
                                    (feedbackMode === "end" && isFinished)
                                }
                                currentIndex={currentIndex}
                                totalQuestions={questions.length}
                                onBookmark={mode === "mock" ? toggleBookmark : undefined}
                                isBookmarked={mode === "mock" ? bookmarked.has(currentQuestion.id) : undefined}
                            />

                            {/* Explanation Block - Outside Card */}
                            {((feedbackMode === "immediate" && showFeedbackForCurrent) || (feedbackMode === "end" && isFinished)) && (
                                <div className="p-6 bg-[#0f1117] rounded-xl border border-blue-900/20 animate-in fade-in slide-in-from-bottom-2 shadow-lg">
                                    <h4 className="font-bold mb-3 flex items-center gap-2 text-slate-400 text-[10px] uppercase tracking-widest">
                                        <span className="text-sm">💡</span> EXPLANATION
                                    </h4>
                                    <p className="text-slate-300 leading-relaxed text-sm">
                                        {currentQuestion.explanation.split(/Reference:/i)[0].trim()}
                                    </p>
                                </div>
                            )}
                        </div>
                    </main>

                    {/* Pinned Navigation Footer */}
                    <div className="border-t border-white/5 bg-[#050609] px-4 py-3 md:px-8 md:py-4">
                        <div className={cn(
                            "mx-auto flex items-center justify-between",
                            "max-w-4xl"
                        )}>
                            <div className="flex gap-4">
                                <Button
                                    variant="outline"
                                    className="border-white/10 text-white hover:bg-white/5 hover:text-white h-12 px-6 rounded-md text-xs font-bold tracking-wider"
                                    onClick={handlePrevious}
                                    disabled={currentIndex === 0}
                                >
                                    &lt; PREVIOUS
                                </Button>
                                {mode === "mock" && (
                                    <div className="hidden" /> // Placeholder to keep layout if needed, effectively removed
                                )}
                            </div>

                            {feedbackMode === "immediate" && !showFeedbackForCurrent && !answers[currentQuestion.id] ? (
                                <Button disabled className="bg-blue-600/50 text-white/50 px-8 h-12 rounded-md min-w-[140px] font-bold text-xs tracking-wider shadow-none cursor-not-allowed">
                                    NEXT &gt;
                                </Button>
                            ) : feedbackMode === "immediate" && !showFeedbackForCurrent && currentQuestion.multiSelect ? (
                                <Button onClick={() => setShowFeedbackForCurrent(true)} className="bg-blue-600 hover:bg-blue-500 text-white px-8 h-12 rounded-md font-bold shadow-lg shadow-blue-500/20 text-xs tracking-wider">
                                    CHECK ANSWER
                                </Button>
                            ) : (
                                <Button
                                    onClick={handleNext}
                                    disabled={mode === "mock" && isLastQuestion}
                                    className={cn(
                                        "px-8 h-12 rounded-md min-w-[140px] font-bold text-xs tracking-wider transition-all duration-200 shadow-lg",
                                        mode === "mock" && isLastQuestion
                                            ? "bg-blue-600/50 text-white/50 shadow-none cursor-not-allowed"
                                            : "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/20"
                                    )}
                                >
                                    {isLastQuestion && mode !== "mock" ? "FINISH TEST" : "NEXT >"}
                                </Button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Sidebar (Mock Mode Only) */}
                {mode === "mock" && (
                    <Sidebar
                        totalQuestions={questions.length}
                        currentIndex={currentIndex}
                        answers={answers}
                        bookmarked={bookmarked}
                        questionIds={questionIds}
                        onNavigate={(idx) => {
                            setCurrentIndex(idx);
                            setShowFeedbackForCurrent(feedbackMode === "immediate" ? !!answers[questions[idx].id] : false);
                        }}
                        onFinish={finishSession}
                        durationSeconds={90 * 60}
                    />
                )}
            </div>
        </div>
    );
}
