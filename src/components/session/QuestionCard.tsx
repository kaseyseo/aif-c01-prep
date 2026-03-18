"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle, Bookmark } from "lucide-react";

// Inline Badge since I haven't created it yet specifically, or I can just use div
function StatusBadge({ correct }: { correct: boolean }) {
    if (correct) {
        return (
            <div className="flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full text-xs font-semibold">
                <CheckCircle className="w-4 h-4" /> Correct
            </div>
        );
    }
    return (
        <div className="flex items-center gap-1 text-red-700 bg-red-50 px-2 py-1 rounded-full text-xs font-semibold">
            <XCircle className="w-4 h-4" /> Incorrect
        </div>
    );
}

import { Question } from "@/helpers/question-engine";

interface QuestionCardProps {
    question: Question;
    selectedAnswer: string | string[] | null;
    onSelect: (option: string) => void;
    showFeedback: boolean;
    currentIndex?: number;
    totalQuestions?: number;
    onBookmark?: () => void;
    isBookmarked?: boolean;
}

export function QuestionCard({
    question,
    selectedAnswer,
    onSelect,
    showFeedback,
    currentIndex,
    totalQuestions,
    onBookmark,
    isBookmarked
}: QuestionCardProps) {

    const isCorrect = React.useMemo(() => {
        if (Array.isArray(selectedAnswer) && Array.isArray(question.correctAnswer)) {
            return selectedAnswer.length === question.correctAnswer.length &&
                selectedAnswer.every(val => (question.correctAnswer as string[]).includes(val));
        }
        return selectedAnswer === question.correctAnswer;
    }, [selectedAnswer, question.correctAnswer]);

    return (
        <Card className="w-full bg-transparent border-none shadow-none p-0">
            <CardHeader className="p-0 pb-6">
                {/* Count Badge for Flashcard Mode */}
                {/* Header Row: Count Badge and Bookmark */}
                <div className="flex justify-between items-start mb-4">
                    {typeof currentIndex === 'number' && typeof totalQuestions === 'number' && (
                        <div className="px-3 py-1 bg-white shadow-sm text-slate-500 text-xs font-bold rounded-full border border-slate-200">
                            {currentIndex + 1} / {totalQuestions}
                        </div>
                    )}

                    {onBookmark && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onBookmark();
                            }}
                            className={cn(
                                "transition-colors",
                                isBookmarked ? "text-amber-500 fill-amber-500" : "text-slate-400 hover:text-amber-500"
                            )}
                        >
                            <Bookmark className={cn("w-5 h-5", isBookmarked && "fill-current")} />
                        </button>
                    )}
                </div>

                <CardTitle className="text-[22px] tracking-tight text-slate-900 font-bold leading-normal">
                    {question.text}
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-0">
                <div className="grid gap-3">
                    {question.options.map((option, index) => {
                        const isSelected = Array.isArray(selectedAnswer)
                            ? selectedAnswer.includes(option)
                            : selectedAnswer === option;

                        const isTargetCorrect = Array.isArray(question.correctAnswer)
                            ? question.correctAnswer.includes(option)
                            : option === question.correctAnswer;

                        // Base classes
                        let containerClass = "p-4 rounded-xl border transition-all flex items-center justify-between group relative cursor-pointer";
                        let textClass = "text-base font-medium flex-1";
                        let radioOuterClass = cn(
                            "flex h-5 w-5 shrink-0 items-center justify-center border-2 transition-all mr-4",
                            question.multiSelect ? "rounded" : "rounded-full"
                        );
                        let radioInnerClass = question.multiSelect ? "h-2.5 w-2.5 rounded-[1px]" : "h-2.5 w-2.5 rounded-full";

                        // State Logic
                        if (showFeedback) {
                            if (isTargetCorrect) {
                                // Correct Answer (Whether selected or not)
                                containerClass += " border-emerald-500 bg-emerald-50";
                                textClass += " text-emerald-800";
                                radioOuterClass += " border-emerald-500";
                                // If selected, fill it. If distinct correct answer that wasn't selected, it's empty but green.

                            } else if (isSelected) {
                                // Selected WRONG answer
                                containerClass += " border-red-500 bg-red-50";
                                textClass += " text-red-800";
                                radioOuterClass += " border-red-500";
                            } else {
                                // Unselected and Wrong
                                containerClass += " border-slate-200 bg-white opacity-50";
                                textClass += " text-slate-500";
                                radioOuterClass += " border-slate-300";
                            }
                        } else {
                            // Normal Interaction
                            if (isSelected) {
                                containerClass += " border-emerald-500 bg-emerald-50 shadow-[0_0_20px_rgba(16,185,129,0.1)]";
                                textClass += " text-emerald-900";
                                radioOuterClass += " border-emerald-500";
                            } else {
                                containerClass += " border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50";
                                textClass += " text-slate-700";
                                radioOuterClass += " border-slate-300 group-hover:border-emerald-400";
                            }
                        }

                        return (
                            <div
                                key={index}
                                className={containerClass}
                                onClick={() => !showFeedback && onSelect(option)}
                            >
                                <div className="flex items-center">
                                    {/* Indicator */}
                                    <div className={radioOuterClass}>
                                        {isSelected && (
                                            <div className={cn(
                                                radioInnerClass,
                                                showFeedback && isTargetCorrect ? "bg-emerald-500" :
                                                    showFeedback && !isTargetCorrect ? "bg-red-500" :
                                                        "bg-emerald-500"
                                            )} />
                                        )}
                                    </div>
                                    <span className={textClass}>
                                        {option}
                                    </span>
                                </div>

                                {/* Right Side Status Icon */}
                                {showFeedback && isTargetCorrect && (
                                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                                )}
                            </div>
                        );
                    })}
                </div>
            </CardContent>
        </Card>
    );
}
