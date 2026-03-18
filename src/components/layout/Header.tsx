"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "FREE PRACTICE" },
        {
            label: "RESOURCES",
            dropdown: [
                { href: "/resources/exam-guide", label: "Exam Guide" },
                { href: "/resources/exam-topics", label: "Exam Topics" },
                { href: "/resources/study-tips", label: "Study Tips" },
                { href: "/resources/faqs", label: "FAQs" },
            ]
        },
        {
            label: "HELP",
            dropdown: [
                { href: "/help/about-us", label: "About Us" },
                { href: "/help/contact-us", label: "Contact Us" },
                { href: "/help/privacy-policy", label: "Privacy Policy" },
            ]
        },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo / Title */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                            <GraduationCap className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-slate-900 font-bold text-[18px] tracking-wide font-['Liberation_Sans',sans-serif] hidden sm:block">
                            AIF C01 PREP
                        </span>
                        <span className="text-slate-900 font-bold text-[18px] tracking-wide font-['Liberation_Sans',sans-serif] sm:hidden">
                            AIF C01 PREP
                        </span>
                    </Link>

                    {/* Navigation */}
                    <nav className="flex items-center gap-1 sm:gap-4 font-['Inter',sans-serif]">
                        {links.map((link) => {
                            if (link.dropdown) {
                                const basePath = link.dropdown[0].href.split('/')[1];
                                const isActive = pathname.startsWith(`/${basePath}`);
                                return (
                                    <div key={link.label} className="relative group">
                                        <button
                                            className={cn(
                                                "flex items-center gap-1 px-4 py-2 text-[14px] uppercase transition-colors rounded-md",
                                                isActive
                                                    ? "text-slate-900 bg-slate-50 font-medium"
                                                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                                            )}
                                        >
                                            {link.label}
                                            <ChevronDown className="w-4 h-4 opacity-50 transition-transform group-hover:rotate-180" />
                                        </button>

                                        {/* Dropdown Menu */}
                                        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-48 rounded-xl bg-white border border-slate-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-2">
                                            {link.dropdown.map((dropdownLink) => (
                                                <Link
                                                    key={dropdownLink.href}
                                                    href={dropdownLink.href}
                                                    className={cn(
                                                        "block px-4 py-2.5 text-sm rounded-lg transition-colors",
                                                        pathname === dropdownLink.href
                                                            ? "text-slate-900 bg-slate-50 font-medium"
                                                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                                                    )}
                                                >
                                                    {dropdownLink.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                );
                            }

                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href!}
                                    className={cn(
                                        "px-4 py-2 text-[14px] uppercase transition-colors rounded-md",
                                        isActive
                                            ? "text-slate-900 bg-slate-50 font-medium"
                                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
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
