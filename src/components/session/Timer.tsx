"use client";

import * as React from "react";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimerProps {
    durationSeconds: number;
    onExpire: () => void;
    className?: string;
}

export function Timer({ durationSeconds, onExpire, className }: TimerProps) {
    const [timeLeft, setTimeLeft] = React.useState(durationSeconds);

    React.useEffect(() => {
        if (timeLeft <= 0) {
            onExpire();
            return;
        }

        const intervalId = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft, onExpire]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const isWarning = timeLeft < 600; // Last 10 minutes

    return (
        <div className={cn(
            "flex items-center gap-2 font-mono text-lg font-bold px-4 py-2 rounded-full border bg-background shadow-sm",
            isWarning ? "text-destructive border-destructive/50" : "text-primary",
            className
        )}>
            <Clock className="w-5 h-5" />
            <span>
                {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
            </span>
        </div>
    );
}
