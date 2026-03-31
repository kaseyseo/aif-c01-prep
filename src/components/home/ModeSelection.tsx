"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Clock, Zap, ArrowRight, List, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ModeSelection() {
    const router = useRouter();

    const handleStart = (mode: "mock" | "flashcard") => {
        const params = new URLSearchParams();
        params.set("mode", mode);
        params.set("feedback", mode === "flashcard" ? "immediate" : "end");
        router.push(`/practice?${params.toString()}`);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">

            {/* Mock Test Card (previously Mock Exam) */}
            <div className="group relative rounded-3xl bg-white border border-slate-200 p-8 flex flex-col gap-6 transition-all duration-300">
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 shrink-0 rounded-xl bg-indigo-50 flex items-center justify-center">
                            <Clock className="w-5 h-5 text-indigo-500" />
                        </div>
                        <h2 className="text-[20px] font-bold text-slate-900 tracking-tight">Mock Test</h2>
                    </div>
                    <p className="text-slate-500 text-[16px] leading-relaxed min-h-[48px]">
                        Simulate the actual AWS Certified AI Practitioner exam environment under time pressure.
                    </p>
                </div>

                <div className="mt-auto space-y-6">
                    {/* Stats Row */}
                    <div className="flex justify-start items-center gap-2">
                        <div className="flex items-center gap-2">
                            <List className="w-[11.67px] h-[11.67px] text-indigo-500" />
                            <span className="text-[16px] text-slate-500">65 questions</span>
                        </div>
                        <span className="text-[13px] text-slate-500 mx-1">•</span>
                        <div className="flex items-center gap-2">
                            <Clock className="w-[11.67px] h-[11.67px] text-indigo-500" />
                            <span className="text-[16px] text-slate-500">90 mins</span>
                        </div>
                    </div>

                    <Button
                        onClick={() => handleStart("mock")}
                        className="w-full h-14 text-[16px] font-bold bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl transition-all flex items-center justify-center gap-2"
                    >
                        START <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            {/* Flashcards Card */}
            <div className="group relative rounded-3xl bg-white border border-slate-200 p-8 flex flex-col gap-6 transition-all duration-300">
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 shrink-0 rounded-xl bg-indigo-50 flex items-center justify-center">
                            <Zap className="w-5 h-5 text-indigo-500" />
                        </div>
                        <h2 className="text-[20px] font-bold text-slate-900 tracking-tight">Flashcards</h2>
                    </div>
                    <p className="text-slate-500 text-[16px] leading-relaxed min-h-[48px]">
                        View the answer and detailed explanations after each question.
                    </p>
                </div>

                <div className="mt-auto space-y-6">
                    {/* Stats Row */}
                    <div className="flex justify-start items-center gap-2">
                        <div className="flex items-center gap-2">
                            <Zap className="w-[11.67px] h-[11.67px] text-indigo-500" />
                            <span className="text-[16px] text-slate-500">10 questions</span>
                        </div>
                        <span className="text-[13px] text-slate-500 mx-1">•</span>
                        <div className="flex items-center gap-2">
                            <Clock className="w-[11.67px] h-[11.67px] text-indigo-500" />
                            <span className="text-[16px] text-slate-500">Untimed</span>
                        </div>
                    </div>

                    <Button
                        onClick={() => handleStart("flashcard")}
                        className="w-full h-14 text-[16px] font-bold bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl transition-all"
                    >
                        START
                    </Button>
                </div>
            </div>

        </div>
    );
}
