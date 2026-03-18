"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Bookmark, CheckCircle2, Circle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
    totalQuestions: number;
    currentIndex: number;
    answers: Record<string, any>;
    bookmarked: Set<string>;
    questionIds: string[];
    onNavigate: (index: number) => void;
    onFinish: () => void;
    durationSeconds?: number; // Optional as Flashcard mode might not employ it the same way, but Mock does.
}

function formatTime(seconds: number) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')} : ${s.toString().padStart(2, '0')}`;
}

export function Sidebar({ totalQuestions, currentIndex, answers, bookmarked, questionIds, onNavigate, onFinish, durationSeconds = 90 * 60 }: SidebarProps) {
    const [timeLeft, setTimeLeft] = React.useState(durationSeconds);
    const [showConfirmModal, setShowConfirmModal] = React.useState(false);

    // Timer Logic
    React.useEffect(() => {
        if (timeLeft <= 0) {
            onFinish();
            return;
        }
        const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        return () => clearInterval(timer);
    }, [timeLeft, onFinish]);

    const progress = ((durationSeconds - timeLeft) / durationSeconds) * 100;

    const handleFinishClick = () => {
        const answeredCount = Object.keys(answers).length;
        const unansweredCount = totalQuestions - answeredCount;

        if (unansweredCount > 0) {
            setShowConfirmModal(true);
        } else {
            onFinish();
        }
    };

    return (
        <>
            <div className="w-72 flex-shrink-0 flex flex-col bg-white border-l border-slate-200 h-[calc(100vh-64px)] hidden lg:flex relative shadow-sm">

                {/* Top: Timer Component */}
                <div className="p-6 border-b border-slate-200 bg-white z-10">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-500">Time Remaining</span>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-slate-900" />
                            <span className="text-2xl font-bold text-slate-900 font-mono">
                                {formatTime(timeLeft)}
                            </span>
                        </div>
                    </div>
                    {/* Linear Progress Bar */}
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-emerald-500 transition-all duration-1000 ease-linear rounded-full"
                            style={{ width: `${Math.min(100, Math.max(0, 100 - progress))}%` }} // Decreasing
                        />
                    </div>
                </div>

                {/* Headers */}
                <div className="px-6 py-4 bg-white border-b border-slate-200">
                    <h3 className="text-sm font-medium text-slate-500">Total Questions: {totalQuestions}</h3>
                </div>

                {/* Navigation: Question List */}
                <div className="flex-1 overflow-y-auto">
                    <div className="flex flex-col">
                        {Array.from({ length: totalQuestions }).map((_, idx) => {
                            const qId = questionIds[idx];
                            const isAnswered = !!answers[qId];
                            const isCurrent = idx === currentIndex;
                            const isBookmarked = bookmarked.has(qId);

                            // Auto-scroll logic
                            const buttonRef = React.useRef<HTMLButtonElement>(null);
                            React.useEffect(() => {
                                if (isCurrent && buttonRef.current) {
                                    buttonRef.current.scrollIntoView({
                                        behavior: "smooth",
                                        block: "center",
                                    });
                                }
                            }, [isCurrent]);

                            return (
                                <button
                                    key={idx}
                                    ref={buttonRef}
                                    onClick={() => onNavigate(idx)}
                                    className={cn(
                                        "flex items-center justify-between px-6 py-4 border-b border-slate-100 hover:bg-slate-50 transition-colors text-left",
                                        isCurrent && "bg-emerald-50 border-l-2 border-l-emerald-500" // Highlight current
                                    )}
                                >
                                    <div className="flex items-center gap-4">
                                        {/* Status Icon */}
                                        <div className="shrink-0">
                                            {isAnswered ? (
                                                <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center" />
                                            ) : (
                                                <div className={cn(
                                                    "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors",
                                                    isCurrent ? "border-emerald-500" : "border-slate-300"
                                                )} />
                                            )}
                                        </div>

                                        <span className={cn(
                                            "text-sm font-medium transition-colors",
                                            isCurrent ? "text-emerald-900 font-bold" : "text-slate-500"
                                        )}>
                                            Question {idx + 1}
                                        </span>
                                    </div>

                                    {/* Bookmark Ribbon */}
                                    {isBookmarked && (
                                        <div className="shrink-0 text-amber-500">
                                            <Bookmark className="w-4 h-4 fill-current" />
                                        </div>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Footer: Persistent Action Bar */}
                <div className="px-6 py-4 border-t border-slate-200 bg-white sticky bottom-0 z-10 w-full mt-auto">
                    <Button
                        onClick={handleFinishClick}
                        variant="outline"
                        className="w-full border border-emerald-200 bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white font-bold h-12 rounded-lg transition-all shadow-sm"
                    >
                        SUBMIT TEST
                    </Button>
                </div>
            </div>

            {/* Custom Modal Overlay */}
            {showConfirmModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                    <div className="bg-white text-slate-900 p-6 rounded-xl border border-slate-200 max-w-sm w-full shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                        <h3 className="text-lg font-bold mb-2 text-slate-900">Finish Exam?</h3>
                        <p className="text-slate-500 text-sm mb-6">
                            {totalQuestions - Object.keys(answers).length} questions are unanswered. Are you sure you want to finish the test?
                        </p>
                        <div className="flex gap-3 justify-end">
                            <Button
                                variant="outline"
                                onClick={() => setShowConfirmModal(false)}
                                className="border-slate-200 text-slate-700 hover:bg-slate-50 bg-white"
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={() => {
                                    setShowConfirmModal(false);
                                    onFinish();
                                }}
                                className="bg-emerald-600 hover:bg-emerald-500 text-white"
                            >
                                Finish Exam
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
