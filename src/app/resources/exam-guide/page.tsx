export default function ExamGuidePage() {
    return (
        <div className="min-h-screen bg-white pt-32 pb-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

                {/* Hero */}
                <div className="text-center space-y-6">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                        AWS Certified AI Practitioner Exam Guide
                    </h1>
                    <p className="text-slate-500 text-lg mx-auto mt-4 leading-relaxed">
                        Everything you need to know about the AWS Certified AI Practitioner (AIF-C01) exam, including format, domains, scoring, and how to prepare effectively.
                    </p>
                </div>

                <div className="space-y-16">

                    {/* What Is It */}
                    <div className="space-y-8">
                        <h2 className="tracking-tight text-2xl sm:text-3xl font-bold text-slate-900">What Is the AWS Certified AI Practitioner Certification?</h2>
                        <div className="space-y-5 text-slate-500 leading-relaxed text-[16px]">
                            <p>The AWS Certified AI Practitioner (AIF-C01) exam is intended for individuals who can effectively demonstrate overall knowledge of AI/ML, generative AI technologies, and associated AWS services and tools, independent of a specific job role.</p>
                            <p>The exam also validates a candidate’s ability to complete the following tasks:</p>
                            <p>Understand AI, ML, and generative AI concepts, methods, and strategies in general and on AWS. Understand the appropriate use of AI/ML and generative AI technologies to ask relevant questions within the candidate’s organization. Determine the correct types of AI/ML technologies to apply to specific use cases. Use AI, ML, and generative AI technologies responsibly.</p>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                            {[
                                { num: "65", label: "Total Questions" },
                                { num: "90", label: "Minutes Allowed" },
                                { num: "700", label: "Minimum Pass Score" },
                                { num: "$100", label: "Exam Fee (USD)" },
                            ].map((stat, idx) => (
                                <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm">
                                    <div className="text-3xl font-black text-indigo-500 mb-2">{stat.num}</div>
                                    <div className="text-xs font-bold text-slate-500">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <hr className="border-t border-slate-200" />

                    {/* Format and Types */}
                    <div className="space-y-8">
                        <h2 className="tracking-tight text-2xl sm:text-3xl font-bold text-slate-900">Exam Content</h2>

                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">Question Types</h3>
                            <p className="text-slate-500 leading-relaxed text-[16px]">The exam contains one or more of the following question types:</p>
                            <ul className="space-y-5 text-slate-500 leading-relaxed text-[16px]">
                                <li className="pl-6 border-l-2 border-slate-200"><strong className="text-slate-900 font-medium block mb-1">Multiple Choice</strong>One correct answer from four options. These are the most common question type on the exam.</li>
                                <li className="pl-6 border-l-2 border-slate-200"><strong className="text-slate-900 font-medium block mb-1">Multiple Response</strong>Two or more correct answers must be selected from five or more options. You must select all correct responses to receive credit. Partial credit is not awarded.</li>
                                <li className="pl-6 border-l-2 border-slate-200"><strong className="text-slate-900 font-medium block mb-1">Ordering</strong>A list of three to five items must be arranged in the correct sequence to complete a specified task or process.</li>
                                <li className="pl-6 border-l-2 border-slate-200"><strong className="text-slate-900 font-medium block mb-1">Matching</strong>A list of responses to match with a list of 3–7 prompts. You must match all the pairs correctly to receive credit for the question.</li>
                                <li className="pl-6 border-l-2 border-slate-200"><strong className="text-slate-900 font-medium block mb-1">Case Study</strong>One scenario with two or more questions about the scenario. The scenario is the same for each question in the case study. Each question in the case study will be evaluated separately. You will receive credit for each question that you answer correctly in the case study.</li>
                            </ul>
                        </div>

                        <div className="space-y-6 pt-4">
                            <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">Unscored content</h3>
                            <p className="text-slate-500 leading-relaxed text-[16px]">The exam includes 15 unscored questions that do not affect your score. AWS collects information about performance on these unscored questions to evaluate these questions for future use as scored questions. These unscored questions are not identified on the exam.</p>

                            <div className="p-6 rounded-xl bg-orange-50 border border-orange-200 text-orange-800 flex gap-4">
                                <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                <p className=" text-[16px]">Unanswered questions are scored as incorrect. There is no penalty for guessing, so always provide an answer even if you are unsure.</p>
                            </div>
                        </div>

                        <div className="space-y-6 pt-4">
                            <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">Exam results</h3>
                            <div className="space-y-5 text-slate-500 leading-relaxed text-[16px]">
                                <p>The AWS Certified AI Practitioner (AIF-C01) exam has a pass or fail designation. The exam is scored against a minimum standard established by AWS professionals who follow certification industry best practices and guidelines.</p>
                                <p>Your results for the exam are reported as a scaled score of 100–1,000. The minimum passing score is 700. Your score shows how you performed on the exam as a whole and whether you passed. Scaled scoring models help equate scores across multiple exam forms that might have slightly different difficulty levels.</p>
                                <p>Your score report could contain a table of classifications of your performance at each section level. The exam uses a compensatory scoring model, which means that you do not need to achieve a passing score in each section. You need to pass only the overall exam.</p>
                                <p>Each section of the exam has a specific weighting, so some sections have more questions than other sections have. The table of classifications contains general information that highlights your strengths and weaknesses. Use caution when you interpret section-level feedback.</p>
                            </div>
                        </div>

                    </div>

                    <hr className="border-t border-slate-200" />

                    {/* Delivery */}
                    <div className="space-y-8">
                        <h2 className="tracking-tight text-2xl sm:text-3xl font-bold text-slate-900">Exam Delivery</h2>
                        <p className="text-slate-500 leading-relaxed text-[16px]">The exam is available in two formats: as a proctored test at a Pearson VUE testing centre, or as an online proctored exam taken from your own location. Both options require valid government-issued identification. The AWS Certified AI Practitioner (AIF-C01) exam is available in multiple languages, making it accessible to a global audience.</p>
                    </div>

                    <hr className="border-t border-slate-200" />

                    {/* Domains and Weightings */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="tracking-tight text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Exam Domains and Weightings</h2>
                            <p className="text-slate-500 leading-relaxed text-[16px]">The AIF-C01 exam is divided into five content domains. Each domain carries a different percentage of the total scored content. Understanding which domains carry the most weight allows you to prioritise your study time effectively.</p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse border-b border-slate-200">
                                <thead>
                                    <tr className="border-b border-slate-200">
                                        <th className="py-4 px-6 font-bold text-slate-900 text-xs">Domain</th>
                                        <th className="py-4 px-6 font-bold text-slate-900 text-xs text-center">Topic</th>
                                        <th className="py-4 px-6 font-bold text-slate-900 text-xs text-right">Weight</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-500 divide-y divide-slate-200">
                                    {[
                                        { id: "Domain 1", name: "Fundamentals of AI and ML", weight: "20%" },
                                        { id: "Domain 2", name: "Fundamentals of Generative AI", weight: "24%" },
                                        { id: "Domain 3", name: "Applications of Foundation Models", weight: "28%" },
                                        { id: "Domain 4", name: "Guidelines for Responsible AI", weight: "14%" },
                                        { id: "Domain 5", name: "Security, Compliance, and Governance for AI Solutions", weight: "14%" },
                                    ].map((domain, idx) => (
                                        <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                            <td className="py-4 px-6 whitespace-nowrap">
                                                <span className="bg-indigo-50 text-indigo-700 text-xs font-medium px-3 py-1.5 rounded-md border border-indigo-100">{domain.id}</span>
                                            </td>
                                            <td className="py-4 px-6 text-center text-[16px]">{domain.name}</td>
                                            <td className="py-4 px-6 text-right text-[16px]">{domain.weight}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <hr className="border-t border-slate-200" />

                    {/* What is out of scope */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="tracking-tight text-2xl sm:text-3xl font-bold text-slate-900 mb-6">What Is Out of Scope?</h2>
                            <div className="space-y-4 text-slate-500 leading-relaxed text-[16px]">
                                <p>While the AIF-C01 covers a broad range of AI and ML concepts, certain technical depth is intentionally excluded. The exam does not test on deep technical implementation details, writing complex code algorithms, or building end-to-end machine learning pipelines from scratch. It focuses more on conceptual understanding, service selection, and the application of AI solutions rather than the heavy lifting of data engineering or model development.</p>
                            </div>
                        </div>
                    </div>

                    <hr className="border-t border-slate-200" />

                    {/* Who Should Take This */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="tracking-tight text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Who Should Take This Exam?</h2>
                            <div className="space-y-6 text-slate-500 leading-relaxed text-[16px]">
                                <p>This certification is recommended for individuals with approximately 6 months of exposure to AI/ML concepts on the AWS Cloud. Candidates should possess basic knowledge of core AWS services and a fundamental understanding of how AI works.</p>
                                <p>Because it is a foundational exam, it is suitable for a diverse range of roles beyond just engineering. It is highly valuable for sales and marketing professionals who need to articulate AI value propositions, product managers overseeing AI-driven features, and project managers coordinating AI initiatives. It serves as an excellent starting point for anyone looking to build literacy in AWS AI technologies.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
