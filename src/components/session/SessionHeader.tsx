"use client";

import * as React from "react";
import { Brain } from "lucide-react";
import { cn } from "@/lib/utils";

interface SessionHeaderProps {
    title?: string;
    rightContent?: React.ReactNode;
}

export function SessionHeader({ title, rightContent }: SessionHeaderProps) {
    if (!title && !rightContent) return null;

    return (
        <header className="w-full bg-[#0b0c10]/50 border-b border-white/5 py-3 px-6 md:px-8 flex items-center justify-between backdrop-blur-sm">
            <h1 className="text-sm font-bold text-slate-400 uppercase tracking-widest">{title}</h1>
            <div>
                {rightContent}
            </div>
        </header>
    );
}
