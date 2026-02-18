"use client";

import Link from "next/link";
import { ArrowRight, Clock, Layers, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ExamGuidePage() {
    return (
        <article className="min-h-screen bg-[#050609] text-slate-300">
            <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-16">

                {/* Header */}
                <header className="space-y-6 text-center border-b border-white/5 pb-10">
                    <h1 className="mb-8 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2">
                        AWS Certified AI Practitioner Exam Study Guide
                    </h1>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        The AWS Certified AI Practitioner (AIF-C01) is a foundational certification designed to validate your overall understanding of Artificial Intelligence (AI), Machine Learning (ML), and the rapidly evolving landscape of Generative AI on the AWS Cloud.
                    </p>
                </header>

                {/* Section 1: Exam Structure */}
                <section className="space-y-6">
                    <h2 className="text-xl md:text-3xl font-bold text-white flex items-center gap-3">
                        1. Exam Logistics
                    </h2>


                    <div className="overflow-hidden rounded-xl border border-white/10">
                        <table className="w-full text-left order-collapse">
                            <tbody className="divide-y divide-white/5 text-slate-300">
                                <tr className="bg-[#0b0c10]/50 hover:bg-[#0b0c10] transition-colors">
                                    <td className="p-4">Number of questions</td>
                                    <td className="p-4 text-right">65</td>
                                </tr>
                                <tr className="bg-[#0b0c10]/50 hover:bg-[#0b0c10] transition-colors">
                                    <td className="p-4">Time for exam</td>
                                    <td className="p-4 text-right">90 min</td>
                                </tr>
                                <tr className="bg-[#0b0c10]/50 hover:bg-[#0b0c10] transition-colors">
                                    <td className="p-4">Answer choices</td>
                                    <td className="p-4 text-right">4-6</td>
                                </tr>
                                <tr className="bg-[#0b0c10]/50 hover:bg-[#0b0c10] transition-colors">
                                    <td className="p-4">Partial Credit</td>
                                    <td className="p-4 text-right">None</td>
                                </tr>
                                <tr className="bg-[#0b0c10]/50 hover:bg-[#0b0c10] transition-colors">
                                    <td className="p-4">Score required</td>
                                    <td className="p-4 text-right">700/1000</td>
                                </tr>
                                <tr className="bg-[#0b0c10]/50 hover:bg-[#0b0c10] transition-colors">
                                    <td className="p-4">Unscored questions</td>
                                    <td className="p-4 text-right">15</td>
                                </tr>
                                <tr className="bg-[#0b0c10]/50 hover:bg-[#0b0c10] transition-colors">
                                    <td className="p-4">Penalty for guessing</td>
                                    <td className="p-4 text-right">None</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Section 2: Domain Breakdown */}
                <section className="space-y-6">
                    <h2 className="text-xl md:text-3xl font-bold text-white flex items-center gap-3">
                        2. Exam Question Domains
                    </h2>


                    <div className="overflow-hidden rounded-xl border border-white/10">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#0f1117] border-b border-white/10">
                                    <th className="p-4 text-sm font-medium text-white uppercase tracking-wider w-1/3">Domain</th>
                                    <th className="p-4 text-sm font-medium text-white uppercase tracking-wider w-[100px] text-center">Weight</th>
                                    <th className="p-4 text-sm font-medium text-white uppercase tracking-wider">Key Focus</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-slate-300">
                                <tr className="bg-[#0b0c10]/50 hover:bg-[#0b0c10] transition-colors">
                                    <td className="p-4 font-medium text-white align-top">Fundamentals of AI and ML</td>
                                    <td className="p-4 text-center align-top">20%</td>
                                    <td className="p-4 align-top">
                                        <ul className="list-disc pl-4 space-y-1">
                                            <li>Explain basic AI concepts and terminologies</li>
                                            <li>Identify practical use cases for AI</li>
                                            <li>Describe the ML development lifecycle</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr className="bg-[#0b0c10]/50 hover:bg-[#0b0c10] transition-colors">
                                    <td className="p-4 font-medium text-white align-top">Fundamentals of Generative AI</td>
                                    <td className="p-4 text-center align-top">24%</td>
                                    <td className="p-4 align-top">
                                        <ul className="list-disc pl-4 space-y-1">
                                            <li>Explain the basic concepts of generative AI</li>
                                            <li>Understand the capabilities and limitations of generative AI for solving business problems</li>
                                            <li>Describe AWS infrastructure and technologies for building generative AI application</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr className="bg-[#0b0c10]/50 hover:bg-[#0b0c10] transition-colors">
                                    <td className="p-4 font-medium text-white align-top">Applications of Foundation Models</td>
                                    <td className="p-4 text-center align-top">28%</td>
                                    <td className="p-4 align-top">
                                        <ul className="list-disc pl-4 space-y-1">
                                            <li>Describe design considerations for applications that use foundational models</li>
                                            <li>Choose effective prompt engineering techniques</li>
                                            <li>Describe the training and fine-tuning process for foundation models</li>
                                            <li>Describe methods to evaluate foundation model performance</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr className="bg-[#0b0c10]/50 hover:bg-[#0b0c10] transition-colors">
                                    <td className="p-4 font-medium text-white align-top">Guidelines for Responsible AI</td>
                                    <td className="p-4 text-center align-top">14%</td>
                                    <td className="p-4 align-top">
                                        <ul className="list-disc pl-4 space-y-1">
                                            <li>Explain the development of AI systems that are responsible</li>
                                            <li>Recognize the importance of transparent and explainable models</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr className="bg-[#0b0c10]/50 hover:bg-[#0b0c10] transition-colors">
                                    <td className="p-4 font-medium text-white align-top">Security, Compliance, and Governance for AI Solutions</td>
                                    <td className="p-4 text-center align-top">14%</td>
                                    <td className="p-4 align-top">
                                        <ul className="list-disc pl-4 space-y-1">
                                            <li>Explain methods to secure AI systems</li>
                                            <li>Recognize governance and compliance regulations for AI systems</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Section 3: Study Tips */}
                <section className="space-y-6">
                    <h2 className="text-xl md:text-3xl font-bold text-white flex items-center gap-3">
                        3. Study Tips for AIF-C01
                    </h2>

                    <div className="grid gap-6">
                        <div className="flex gap-4 p-4 rounded-xl bg-[#0b0c10] border border-white/5">
                            <div className="shrink-0 mt-1">
                                <CheckCircle className="w-6 h-6 text-emerald-500" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">Master core concepts</h3>
                                <p className="text-slate-400">Develop a clear understanding of fundamental AI and machine learning concepts commonly tested in the exam.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-4 rounded-xl bg-[#0b0c10] border border-white/5">
                            <div className="shrink-0 mt-1">
                                <CheckCircle className="w-6 h-6 text-emerald-500" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">Learn by doing</h3>
                                <p className="text-slate-400">Apply what you learn through practical exploration using AWS AI and ML service.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-4 rounded-xl bg-[#0b0c10] border border-white/5">
                            <div className="shrink-0 mt-1">
                                <CheckCircle className="w-6 h-6 text-emerald-500" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">Boost your exam readiness</h3>
                                <p className="text-slate-400">Use our free practice tests to get comfortable with the exam format, question style, and time constraints.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: Next Steps */}
                <section className="space-y-6">
                    <h2 className="text-xl md:text-3xl font-bold text-white flex items-center gap-3">
                        4. Practice
                    </h2>
                    <p className="text-slate-400">
                        Once you have reviewed this guide, put your knowledge to the test with our free practice sessions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        <Link href="/practice?mode=mock&feedback=end" className="w-full">
                            <div className="group h-full p-6 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-600/20 hover:border-blue-500 rounded-2xl transition-all duration-300 flex flex-col items-center text-center gap-4">
                                <div className="p-4 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-900/40 group-hover:scale-110 transition-transform">
                                    <Clock className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">Start Mock Test</h3>
                                    <p className="text-sm text-blue-200">65 questions • 90 mins</p>
                                </div>
                            </div>
                        </Link>

                        <Link href="/practice?mode=flashcard&feedback=immediate" className="w-full">
                            <div className="group h-full p-6 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/20 hover:border-orange-500 rounded-2xl transition-all duration-300 flex flex-col items-center text-center gap-4">
                                <div className="p-4 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-900/40 group-hover:scale-110 transition-transform">
                                    <Layers className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">Start Flashcards</h3>
                                    <p className="text-sm text-orange-100">10 questions • Immediate feedback</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>

            </div>
        </article>
    );
}
