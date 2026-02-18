"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "EXAM PREP" },
        { href: "/exam-guide", label: "EXAM GUIDE" },
        { href: "/about-us", label: "ABOUT US" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-[#050609] border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo / Title */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                            <GraduationCap className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-white font-bold text-sm tracking-wide hidden sm:block">
                            AIF C01 PREP
                        </span>
                        <span className="text-white font-bold text-sm tracking-wide sm:hidden">
                            AIF C01 PREP
                        </span>
                    </Link>

                    {/* Navigation */}
                    <nav className="flex items-center gap-1 sm:gap-6">
                        {links.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors rounded-md",
                                        isActive
                                            ? "text-white bg-white/10"
                                            : "text-slate-400 hover:text-white hover:bg-white/5"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </header>
    );
}
