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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">

            {/* Practice Test Card (previously Mock Exam) */}
            <div className="group relative rounded-3xl bg-[#0b0c10] border border-white/5 p-8 flex flex-col gap-6 transition-all duration-300 shadow-2xl">
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-900/40">
                            <Clock className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Practice Test</h2>
                    </div>
                    <p className="text-slate-400 text-[15px] leading-relaxed">
                        Simulate the actual AWS Certified AI Practitioner exam environment under time pressure.
                    </p>
                </div>

                <div className="mt-auto space-y-6">
                    {/* Stats Row */}
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0e1016] border border-white/5">
                        <div className="flex items-center gap-3 flex-1 border-r border-white/5">
                            <div className="p-2 rounded-lg bg-blue-600/10">
                                <List className="w-5 h-5 text-blue-500" />
                            </div>
                            <span className="text-sm font-semibold text-white">65 questions</span>
                        </div>
                        <div className="flex items-center gap-3 flex-1 pl-2">
                            <div className="p-2 rounded-lg bg-blue-600/10">
                                <Clock className="w-5 h-5 text-blue-500" />
                            </div>
                            <span className="text-sm font-semibold text-white">90 mins</span>
                        </div>
                    </div>

                    <Button
                        onClick={() => handleStart("mock")}
                        className="w-full h-14 text-base font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-xl tracking-wide shadow-lg shadow-blue-900/20"
                    >
                        START <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </div>

            {/* Flashcards Card */}
            <div className="group relative rounded-3xl bg-[#0b0c10] border border-white/5 p-8 flex flex-col gap-6 transition-all duration-300 shadow-2xl">
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 shrink-0 rounded-xl bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-900/40">
                            <Zap className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Flashcards</h2>
                    </div>
                    <p className="text-slate-400 text-[15px] leading-relaxed">
                        View the answer and detailed explanations after each question.
                    </p>
                </div>

                <div className="mt-auto space-y-6">
                    {/* Stats Row */}
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0e1016] border border-white/5">
                        <div className="flex items-center gap-3 flex-1 border-r border-white/5">
                            <div className="p-2 rounded-lg bg-orange-500/10">
                                <List className="w-5 h-5 text-orange-500" />
                            </div>
                            <span className="text-sm font-semibold text-white">10 questions</span>
                        </div>
                        <div className="flex items-center gap-3 flex-1 pl-2">
                            <div className="p-2 rounded-lg bg-orange-500/10">
                                <Clock className="w-5 h-5 text-orange-500" />
                            </div>
                            <span className="text-sm font-semibold text-white">Unlimited</span>
                        </div>
                    </div>

                    <Button
                        onClick={() => handleStart("flashcard")}
                        className="w-full h-14 text-base font-bold bg-orange-500 hover:bg-orange-400 text-white rounded-xl tracking-wide shadow-lg shadow-orange-900/20"
                    >
                        START <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </div>

        </div>
    );
}
