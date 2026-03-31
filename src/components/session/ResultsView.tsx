"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, RotateCcw, Home, Bookmark, Filter, ChevronDown, ChevronUp, Clock, ClipboardCheck, List } from "lucide-react";
import { type Question, calculateScore } from "@/helpers/question-engine";
import { cn } from "@/lib/utils";

interface ResultsViewProps {
    userAnswers: Record<string, string | string[]>;
    questions: Question[];
    onRestart: () => void;
    onHome: () => void;
    mode: "mock" | "flashcard";
    bookmarkedQuestions?: Set<string>;
    timeSpent?: number;
}

function formatTime(ms: number) {
    const seconds = Math.floor(ms / 1000);
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s}s`;
}

export function ResultsView({ userAnswers, questions, onRestart, onHome, mode, bookmarkedQuestions, timeSpent = 0 }: ResultsViewProps) {
    const score = calculateScore(userAnswers, questions);
    const [filter, setFilter] = React.useState<"all" | "correct" | "incorrect" | "bookmarked">("all");

    const filteredQuestions = React.useMemo(() => {
        return questions.filter(q => {
            if (filter === "bookmarked") return bookmarkedQuestions?.has(q.id);

            const ua = userAnswers[q.id];
            let isCorrect = false;
            if (Array.isArray(ua) && Array.isArray(q.correctAnswer)) {
                isCorrect = ua.length === q.correctAnswer.length && ua.every(val => (q.correctAnswer as string[]).includes(val));
            } else {
                isCorrect = ua === q.correctAnswer;
            }

            if (filter === "correct") return isCorrect;
            if (filter === "incorrect") return !isCorrect;
            return true;
        });
    }, [questions, userAnswers, filter, bookmarkedQuestions]);

    return (
        <div className="flex h-[calc(100vh-4rem)] bg-slate-50 overflow-hidden">
            {/* Sidebar */}
            <aside className="w-72 bg-white border-r border-slate-200 flex flex-col shrink-0 z-20 shadow-sm">
                <div className="p-6 space-y-8 flex-1 overflow-y-auto">

                    {/* Your Performance Section */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-medium text-slate-500 tracking-wider">Your Performance</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-slate-600">
                                <ClipboardCheck className="w-4 h-4 text-slate-500" />
                                <span className="text-sm font-normal">Score: <span className="text-slate-900 font-bold">{score.percentage}%</span> ({score.correct}/{score.total})</span>
                            </div>
                            {mode === "mock" && (
                                <div className="flex items-center gap-3 text-slate-600">
                                    <Clock className="w-4 h-4 text-slate-500" />
                                    <span className="text-sm font-normal">Time Spent: <span className="text-slate-900 font-bold">{formatTime(timeSpent)}</span></span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Review Section */}
                    <div className="space-y-4">
                        <div className="h-px bg-slate-200 w-full" />
                        <h3 className="text-sm font-medium text-slate-500 tracking-wider">Review</h3>
                        <div className="space-y-1">
                            <FilterButton
                                active={filter === "all"}
                                onClick={() => setFilter("all")}
                                label="All Questions"
                                icon={<List className="w-4 h-4" />}
                                activeClass="bg-indigo-50 border-l-2 border-indigo-500 text-indigo-900"
                            />
                            <FilterButton
                                active={filter === "correct"}
                                onClick={() => setFilter("correct")}
                                label={`Correct (${score.correct})`}
                                icon={<Check className="w-4 h-4 text-emerald-500" />}
                            />
                            <FilterButton
                                active={filter === "incorrect"}
                                onClick={() => setFilter("incorrect")}
                                label={`Incorrect (${score.total - score.correct})`}
                                icon={<X className="w-4 h-4 text-red-500" />}
                            />
                            {mode === "mock" && (
                                <FilterButton
                                    active={filter === "bookmarked"}
                                    onClick={() => setFilter("bookmarked")}
                                    label={`Bookmarked (${bookmarkedQuestions?.size || 0})`}
                                    icon={<Bookmark className="w-4 h-4 text-amber-500" />}
                                />
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 space-y-3 bg-white border-t border-slate-200">
                    <Button onClick={onHome} className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold h-12 rounded-xl">
                        <Home className="w-4 h-4 mr-2" /> Back to Home
                    </Button>
                    <Button onClick={onRestart} variant="outline" className="w-full text-slate-700 border-slate-200 hover:bg-slate-50 bg-white font-bold h-12 rounded-xl">
                        <RotateCcw className="w-4 h-4 mr-2" /> Retake
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto bg-slate-50 p-6 scroll-smooth">
                <div className="max-w-3xl mx-auto space-y-6 pb-20">


                    {filteredQuestions.map((q, idx) => {
                        const ua = userAnswers[q.id];
                        return (
                            <ReviewQuestionCard
                                key={q.id}
                                question={q}
                                userAnswer={ua}
                                index={questions.findIndex(qu => qu.id === q.id)}
                            />
                        );
                    })}

                    {filteredQuestions.length === 0 && (
                        <div className="text-center py-20 text-slate-500">
                            No questions match this filter.
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

function FilterButton({ active, onClick, label, icon, activeClass }: { active: boolean, onClick: () => void, label: string, icon: React.ReactNode, activeClass?: string }) {
    // Determine icon color based on active state if needed, or let icon prop handle it
    // The previous implementation had specific logic for "List" icon in "All Questions" which used "text-black" in active state because bg was white.
    // Now bg is dark blue/transparent.

    return (
        <button
            onClick={onClick}
            className={cn(
                "w-[calc(100%+1.5rem)] -mx-3 flex items-center gap-3 p-3 text-sm font-medium transition-all duration-200",
                active ? (activeClass || "bg-indigo-50 border-l-2 border-indigo-500 text-indigo-900") : "text-slate-500 hover:bg-slate-50 hover:text-slate-700 border-l-2 border-transparent"
            )}
        >
            <div className={cn("shrink-0", active ? "text-indigo-900" : "text-slate-500")}>
                {icon}
            </div>
            <span>{label}</span>
        </button>
    );
}

function ReviewQuestionCard({ question, userAnswer, index }: { question: Question, userAnswer: string | string[], index?: number }) {
    let isCorrect = false;
    if (Array.isArray(userAnswer) && Array.isArray(question.correctAnswer)) {
        isCorrect = userAnswer.length === question.correctAnswer.length && userAnswer.every(val => (question.correctAnswer as string[]).includes(val));
    } else {
        isCorrect = userAnswer === question.correctAnswer;
    }

    const [isExpanded, setIsExpanded] = React.useState(true); // Default valid open in review

    return (
        <Card className="bg-white border border-slate-200 shadow-sm overflow-hidden">
            <CardContent className="p-0">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-50/50">
                    <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Question {index !== undefined ? index + 1 : question.id}</span>
                        <div className={cn(
                            "flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border",
                            isCorrect ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-red-50 text-red-700 border-red-200"
                        )}>
                            {isCorrect ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                            {isCorrect ? "Correct" : "Incorrect"}
                        </div>
                    </div>
                </div>

                <div className="p-6 space-y-6">
                    <h3 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 leading-relaxed">
                        {question.text}
                    </h3>

                    <div className="space-y-3">
                        {question.options.map((option, idx) => {
                            const isSelected = Array.isArray(userAnswer) ? userAnswer.includes(option) : userAnswer === option;
                            const isActuallyCorrect = Array.isArray(question.correctAnswer) ? question.correctAnswer.includes(option) : question.correctAnswer === option;

                            let stateClass = "border-slate-200 bg-white hover:bg-slate-50 text-slate-700 ";
                            let icon = null;

                            if (isActuallyCorrect) {
                                stateClass = "border-emerald-500 bg-emerald-50 text-emerald-900 font-bold shadow-[0_0_15px_-3px_rgba(16,185,129,0.1)] ";
                                icon = <Check className="w-5 h-5 text-emerald-600 shrink-0" />;
                            } else if (isSelected && !isActuallyCorrect) {
                                stateClass = "border-red-500 bg-red-50 text-red-900 font-bold ";
                                icon = <X className="w-5 h-5 text-red-600 shrink-0" />;
                            } else if (isSelected && isActuallyCorrect) {
                                // Already handled by first if, strictly speaking, but logically 'selected correct' is same.
                            }

                            return (
                                <div
                                    key={idx}
                                    className={cn(
                                        "relative flex items-center p-4 rounded-xl border transition-all duration-200",
                                        stateClass
                                    )}
                                >
                                    <div className="flex items-center gap-4 w-full">
                                        <div className={cn(
                                            "flex h-5 w-5 shrink-0 items-center justify-center border-2 transition-all",
                                            question.multiSelect ? "rounded" : "rounded-full",
                                            isActuallyCorrect ? "border-emerald-500 bg-emerald-500" :
                                                (isSelected ? "border-red-500 bg-red-500" : "border-slate-300 bg-transparent")
                                        )}>
                                            {(isActuallyCorrect || isSelected) && <span className="block h-2 w-2 bg-white rounded-full" />}
                                        </div>
                                        <span className="text-[15px] flex-1">{option}</span>
                                        {icon}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Explanation Box */}
                    <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">

                        <div className="p-4 flex items-center gap-2 border-b border-slate-200/60">
                            <span className="text-sm">💡</span>
                            <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">Explanation</span>
                        </div>
                        <div className="p-4 text-[15px]  text-slate-900 leading-relaxed">
                            {question.explanation.split(/Reference:/i)[0].trim()}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
