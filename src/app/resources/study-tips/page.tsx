import Link from 'next/link';

export default function StudyTipsPage() {
    return (
        <div className="min-h-screen bg-white pt-32 pb-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

                {/* Hero */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                        Study Tips for the AWS Certified AI Practitioner Exam
                    </h1>
                    <p className="text-slate-500 text-lg mx-auto leading-relaxed">
                        A practical, step-by-step preparation guide from your first day of studying to walking out of the AWS Certified AI Practitioner (AIF-C01) exam with a passing score.
                    </p>
                </div>

                {/* Content Container */}
                <div className="space-y-16">

                    {/* How Long Does It Take */}
                    <div className="space-y-6">
                        <h2 className="tracking-tight text-3xl font-bold text-slate-900">How Long Does It Take to Prepare?</h2>
                        <div className="space-y-5 text-slate-500 text-[16px] leading-relaxed">
                            <p>Most candidates are ready for the AIF-C01 exam after two to four weeks of consistent study, assuming they spend around one to two hours per day. If you have existing familiarity with AWS services or AI/ML concepts, you may be ready sooner. If you are completely new to both, allow yourself a full four to six weeks.</p>
                            <p>This is a foundational exam, not a specialist one. The questions test conceptual understanding rather than deep technical skills, which means the preparation curve is more manageable than certifications like the AWS Solutions Architect or Machine Learning Specialty.</p>
                        </div>
                    </div>

                    <div className="border-t border-slate-200"></div>

                    {/* 4-Week Study Schedule */}
                    <div className="space-y-6">
                        <h2 className="tracking-tight text-3xl font-bold text-slate-900">4-Week Study Schedule</h2>
                        <p className="text-slate-500 text-lg">This schedule assumes you can study for 1 to 2 hours per day. Adjust the pace based on your existing background knowledge.</p>

                        <div className="border border-slate-200 rounded-lg overflow-hidden flex flex-col">
                            {/* Table Header */}
                            <div className="flex bg-white border-b border-slate-200">
                                <div className="w-32 shrink-0 px-6 py-4 font-bold text-slate-900 text-[12px] uppercase tracking-wider">Week</div>
                                <div className="flex-1 px-6 py-4 font-bold text-slate-900 text-[12px] uppercase tracking-wider">Strategy</div>
                            </div>

                            {/* Table Body */}
                            {[
                                { week: "Week 1", content: "Read the official exam guide. Take a diagnostic practice test. Begin your video course, focusing on Domains 1 and 2 (AI/ML fundamentals and generative AI)." },
                                { week: "Week 2", content: "Complete your video course, focusing on Domains 3, 4, and 5. Review AWS service pages for Amazon Bedrock, SageMaker, and key AI services. Do 50–75 domain-specific practice questions." },
                                { week: "Week 3", content: "Take two full-length timed practice exams. Review every incorrect answer in detail. Revisit weak domains using your video course or AWS documentation. Do another 75–100 practice questions." },
                                { week: "Week 4", content: "Take two more full timed practice exams. Focus revision time exclusively on lowest-scoring domains. Book your exam when scoring consistently above 80%. Rest the day before your exam." },
                            ].map((item, idx, arr) => (
                                <div key={idx} className={`flex flex-col sm:flex-row bg-white ${idx !== arr.length - 1 ? 'border-b border-slate-200' : ''}`}>
                                    <div className="sm:w-32 shrink-0 px-6 py-5 flex items-center">
                                        <div className="bg-indigo-50 text-indigo-700 border border-indigo-200 font-medium text-[12px] px-2.5 py-1 rounded">
                                            {item.week}
                                        </div>
                                    </div>
                                    <div className="flex-1 px-6 py-5 text-slate-500 text-[16px] leading-relaxed">
                                        {item.content}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="border-t border-slate-200"></div>

                    {/* Step-by-Step Study Plan */}
                    <div className="space-y-6">
                        <h2 className="tracking-tight text-[30px] font-bold text-slate-900">Step-by-Step Study Plan</h2>

                        <div className="space-y-6">
                            {[
                                {
                                    num: "1",
                                    title: "Read the Official Exam Guide",
                                    desc: "The first thing you should do is download and read the official AWS Certified AI Practitioner Exam Guide from the AWS Certification website. This document outlines every domain, task statement, and in-scope AWS service. It is the most authoritative source on what will and will not be tested. Highlight the services and topics you are unfamiliar with — this becomes your study checklist."
                                },
                                {
                                    num: "2",
                                    title: "Take a Diagnostic Practice Test",
                                    desc: "Before diving into study materials, take a timed practice exam to establish your baseline. Do not worry about your score. The goal is to identify your weak areas. If you score 45% on Domain 3 but 75% on Domain 5, you immediately know where to concentrate your time. Skipping this step means studying everything equally, which is inefficient."
                                },
                                {
                                    num: "3",
                                    title: "Complete a Video Course",
                                    desc: "Video courses are the fastest way to build a solid conceptual foundation. They walk you through every domain in a structured way, often with real AWS console demonstrations."
                                },
                                {
                                    num: "4",
                                    title: "Review AWS Documentation",
                                    desc: "For each key AWS service in the exam (particularly Amazon Bedrock, Amazon SageMaker, and related tools), read the official service page and FAQ. AWS documentation is free and authoritative. Focus on the \"What is it?\", \"When would you use it?\", and \"How does it compare to similar services?\" sections. This is what the exam actually tests."
                                },
                                {
                                    num: "5",
                                    title: "Do Extensive Practice Questions",
                                    desc: "This is the most important part of your preparation. Aim to complete at least 200-300 practice questions before your exam. The goal is not just to memorise answers, but to understand why each answer is correct and why the distractors are wrong. Reading the explanation for every question dramatically deepens your understanding."
                                },
                                {
                                    num: "6",
                                    title: "Review Weak Areas",
                                    desc: "In the final week, focus exclusively on the domains where your practice scores are lowest. Re-read those sections of your notes, watch targeted video segments, and do domain-specific practice questions. When you are consistently scoring above 80% on full practice exams, you are ready. Book your exam and avoid cramming in the final 24 hours."
                                }
                            ].map((step, idx) => (
                                <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 shadow-sm">
                                    <div className="shrink-0">
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold text-2xl">
                                            {step.num}
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-[20px] font-bold text-slate-900">{step.title}</h3>
                                        <p className="text-slate-500 text-[16px] leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="border-t border-slate-200"></div>

                    {/* Time Management */}
                    <div className="space-y-6">
                        <h2 className="tracking-tight text-[30px] font-bold text-slate-900">Time Management on Exam Day</h2>
                        <p className="text-slate-500 text-[16px] leading-relaxed">
                            With 65 questions in 90 minutes, you have an average of approximately 83 seconds per question. This is generous compared to many other certification exams, but it is easy to lose track of time if you get stuck on difficult questions.
                        </p>

                        <div className="space-y-6 pt-2">
                            <div className="border-l-2 border-indigo-500 pl-6 space-y-3">
                                <h3 className="text-[20px] font-bold text-slate-900">Before the Exam</h3>
                                <p className="text-slate-500 text-[16px] leading-relaxed">
                                    Arrive early if testing at a Pearson VUE centre, or log in 15–30 minutes early for an online proctored exam. Have your government-issued ID ready. Avoid scheduling your exam during a stressful period. Your performance will be better when you are rested and mentally fresh.
                                </p>
                            </div>

                            <div className="border-l-2 border-indigo-500 pl-6 space-y-3">
                                <h3 className="text-[20px] font-bold text-slate-900">During the Exam</h3>
                                <div className="space-y-3 text-slate-500 text-[16px] leading-relaxed">
                                    <p>Work through the questions at a steady pace. If you encounter a question you are unsure about, flag it and move on — do not spend more than 90 seconds on any single question during your first pass. Once you have answered all questions, return to the flagged ones with your remaining time.</p>
                                    <p>For multiple-choice questions, use process of elimination. AWS exam questions typically include one or two obviously wrong distractors, which means you are often choosing between two plausible options. Think about which answer best aligns with AWS best practices and the principle of least privilege or managed services over self-managed ones.</p>
                                    <p>For multiple-response questions, pay close attention to how many answers are required. The question will usually indicate this (e.g., "Select TWO"). Do not select more or fewer than the specified number.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-200"></div>

                    {/* Common Mistakes */}
                    <div className="space-y-8">
                        <h2 className="tracking-tight text-[30px] font-bold text-slate-900">Common Mistakes to Avoid</h2>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {/* Do This */}
                            <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 sm:p-8 space-y-6">
                                <h3 className="text-[20px] font-bold text-indigo-700 flex items-center justify-center sm:justify-start gap-2">
                                    Do This
                                </h3>
                                <ul className="space-y-4 text-slate-500 text-[16px]">
                                    <li className="flex gap-3">
                                        <svg className="w-5 h-5 text-indigo-700 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>Focus on the business value of AI services.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <svg className="w-5 h-5 text-indigo-700 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>Understand the difference between Generative AI and traditional ML.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <svg className="w-5 h-5 text-indigo-700 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>Memorize the Responsible AI principles (Fairness, Explainability, etc.).</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <svg className="w-5 h-5 text-indigo-700 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>Know when to use SageMaker vs. Bedrock.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Avoid This */}
                            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 sm:p-8 space-y-6">
                                <h3 className="text-[20px] font-bold text-red-600 flex items-center justify-center sm:justify-start gap-2">
                                    Avoid This
                                </h3>
                                <ul className="space-y-4 text-slate-500 text-[16px]">
                                    <li className="flex gap-3">
                                        <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        <span>Don't try to memorize Python or SQL code syntax.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        <span>Don't ignore the security domain (it's a huge part of the exam).</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        <span>Don't skip reading the whitepapers if you are failing practice tests.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        <span>Don't assume past IT knowledge applies 1:1 to AI concepts.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
