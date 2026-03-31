'use client';

import Link from 'next/link';

const faqSections = [
    {
        id: "about-exam",
        title: "About the Exam",
        items: [
            {
                question: "What is the AWS Certified AI Practitioner (AIF-C01) exam?",
                answer: (
                    <>
                        <p>The AWS Certified AI Practitioner is a foundational-level certification from Amazon Web Services. It validates that you have a broad understanding of artificial intelligence, machine learning, and generative AI concepts, along with familiarity with the AWS services that support them.</p>
                        <p className="mt-4">It is designed for anyone who works with or around AI systems — regardless of their technical background. Business analysts, project managers, developers, and sales professionals all sit and pass this exam. It is not a hands-on engineering exam.</p>
                    </>
                )
            },
            {
                question: "Is the AIF-C01 a hard exam?",
                answer: (
                    <>
                        <p>Compared to other AWS certifications, the AIF-C01 is considered moderate in difficulty. It does not require any programming knowledge or hands-on AWS experience. The questions test conceptual understanding rather than technical implementation.</p>
                        <p className="mt-4">That said, the exam does go beyond surface-level definitions. You need to understand the differences between similar AWS services, the tradeoffs between different AI approaches (such as fine-tuning vs. RAG), and the principles of responsible AI. Candidates who underestimate the exam and skip preparation often fail.</p>
                        <p className="mt-4">With two to four weeks of dedicated study and regular practice testing, most candidates are well-prepared to pass.</p>
                    </>
                )
            },
            {
                question: "What are the prerequisites for the AIF-C01?",
                answer: (
                    <>
                        <p>There are no mandatory prerequisites to sit the exam. AWS recommends that candidates have up to six months of exposure to AI/ML technologies on AWS and a basic familiarity with core AWS services such as Amazon EC2, Amazon S3, AWS Lambda, and Amazon SageMaker.</p>
                        <p className="mt-4">Familiarity with the AWS shared responsibility model and AWS IAM is also helpful. However, these are recommendations — not hard requirements. Many candidates with no prior AWS experience pass this exam after focused self-study.</p>
                    </>
                )
            },
            {
                question: "How many questions are on the AIF-C01 exam and how long is it?",
                answer: (
                    <>
                        <p>The exam has 65 questions in total, of which 50 are scored and 15 are unscored. The unscored questions are used by AWS to evaluate potential future exam content — you will not know which questions are unscored.</p>
                        <p className="mt-4">You have 90 minutes to complete the exam. This works out to roughly 83 seconds per question, which most candidates find sufficient. The question types include multiple choice (one correct answer), multiple response (two or more correct answers), and ordering questions.</p>
                    </>
                )
            },
            {
                question: "What is the passing score for the AIF-C01?",
                answer: (
                    <>
                        <p>The minimum passing score is 700 on a scale of 100 to 1,000. AWS uses a scaled scoring model — the exact number of correct answers required to achieve a score of 700 may vary slightly between exam versions, but a scaled score of 700 always represents a passing result.</p>
                        <p className="mt-4">There is no penalty for incorrect answers, so always answer every question — even if you are unsure. An unanswered question is scored the same as an incorrect one.</p>
                        <div className="mt-6 p-5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-800">
                            <strong>Benchmark to aim for:</strong> Score consistently above 80% on practice exams before booking. This gives you a comfortable buffer above the actual threshold.
                        </div>
                    </>
                )
            },
            {
                question: "How long is the AIF-C01 certification valid?",
                answer: (
                    <>
                        <p>AWS certifications are valid for three years from the date you pass the exam. To maintain your certification, you need to recertify before it expires. You can recertify by passing the same exam again or by passing a higher-level certification in the same domain.</p>
                    </>
                )
            }
        ]
    },
    {
        id: "registration",
        title: "Registration and Cost",
        items: [
            {
                question: "How much does the AIF-C01 exam cost?",
                answer: (
                    <>
                        <p>The standard exam fee is $100 USD. Pricing may vary by region and currency.</p>
                        <p className="mt-4">AWS offers a 50% discount voucher to candidates who have passed any previous AWS certification exam. If you hold any current AWS certification, check your AWS Certification account for a discount code before booking.</p>
                        <p className="mt-4">AWS also sometimes offers promotional vouchers or discounts at events such as AWS re:Invent. If you are attending an AWS event, it is worth checking for available discount codes.</p>
                    </>
                )
            },
            {
                question: "How do I register for the AIF-C01 exam?",
                answer: (
                    <>
                        <p>You register through your AWS Certification account at <a href="https://aws.amazon.com/certification" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500 underline">aws.amazon.com/certification</a>. If you do not already have one, you will need to create a free account.</p>
                        <p className="mt-4">From your account, you can search for the AWS Certified AI Practitioner exam and select a delivery method: in-person testing at a Pearson VUE testing centre, or an online proctored exam taken from your own location. Both require a valid government-issued photo ID.</p>
                        <p className="mt-4">For the online proctored exam, you will also need to ensure your testing environment meets Pearson VUE's requirements — including a quiet, private room, a working webcam, and a stable internet connection.</p>
                    </>
                )
            },
            {
                question: "Can I take the exam online from home?",
                answer: (
                    <>
                        <p>Yes. The AIF-C01 is available as an online proctored exam through Pearson VUE OnVUE. You will be monitored via webcam by a remote proctor throughout the exam.</p>
                        <p className="mt-4">Requirements include: a quiet, private room with no other people present; a working webcam and microphone; a stable internet connection; and a government-issued photo ID. You will need to complete a pre-check of your environment before the exam begins. Phones, notes, and secondary monitors are not permitted.</p>
                    </>
                )
            }
        ]
    },
    {
        id: "results",
        title: "Results and What Comes Next",
        items: [
            {
                question: "When will I get my results?",
                answer: (
                    <>
                        <p>You will typically see a preliminary pass/fail result immediately after completing the exam, before you leave the testing centre or close the online exam window. However, this is a preliminary result only.</p>
                        <p className="mt-4">Your official score report — including your scaled score and performance breakdown by domain — is usually available in your AWS Certification account within one to five business days. You will receive an email notification when your results are ready.</p>
                        <p className="mt-4">If you pass, your digital badge and certificate will be available for download and sharing at the same time as your score report.</p>
                    </>
                )
            },
            {
                question: "What happens if I fail the exam?",
                answer: (
                    <>
                        <p>If you do not pass, you can retake the exam. AWS requires a waiting period of 14 days between your first and second attempt. If you fail a second time, the waiting period extends to 14 days for each subsequent attempt.</p>
                        <p className="mt-4">Your score report will show your performance across each domain, which is invaluable for understanding where to focus your study before retaking. Many candidates pass on their second attempt after targeting their weak areas.</p>
                        <p className="mt-4">Each retake requires a new exam registration and full payment of the exam fee.</p>
                    </>
                )
            },
            {
                question: "What certifications can I pursue after passing the AIF-C01?",
                answer: (
                    <>
                        <p>The AIF-C01 is a strong foundation for a number of career paths in AWS. For those interested in deepening their AI/ML expertise, the natural progression is the <strong>AWS Certified Machine Learning Engineer – Associate (MLA-C01)</strong>, which tests more technical skills around building and deploying ML solutions on AWS.</p>
                        <p className="mt-4">For a broader cloud career, you might consider the <strong>AWS Certified Solutions Architect – Associate (SAA-C03)</strong>, which is one of the most valued and widely recognised cloud certifications globally.</p>
                        <p className="mt-4">If you want to continue building AI-specific skills, the <strong>AWS Certified Machine Learning – Specialty</strong> is the most advanced AI/ML certification AWS currently offers.</p>
                    </>
                )
            }
        ]
    },
    {
        id: "preparation",
        title: "Study and Preparation",
        items: [
            {
                question: "How long should I study for the AIF-C01?",
                answer: (
                    <>
                        <p>Most candidates are ready after two to four weeks of consistent study, spending around one to two hours per day. Candidates who already work with AWS or have an AI/ML background may be ready in less time. Those who are completely new to both cloud computing and AI should allow four to six weeks.</p>
                        <p className="mt-4">The most reliable indicator of readiness is your practice exam score. When you are consistently scoring above 80% on full-length timed practice tests, you are ready to book your exam.</p>
                    </>
                )
            },
            {
                question: "Are there free study resources available?",
                answer: (
                    <>
                        <p>Yes, there are several high-quality free resources:</p>
                        <p className="mt-2"><strong>AWS Skill Builder</strong> — AWS's own learning platform includes foundational training content for the AIF-C01 at no cost (the official practice exam is paid, but the course content is free).</p>
                        <p className="mt-2"><strong>Andrew Brown's FreeCodeCamp YouTube Course</strong> — A comprehensive 15-hour course covering the entire AIF-C01 syllabus, completely free on YouTube.</p>
                        <p className="mt-2"><strong>AWS Documentation and Service FAQs</strong> — Free and authoritative. Reading the FAQ pages for Amazon Bedrock, SageMaker, and other key services is one of the best ways to prepare.</p>
                        <p className="mt-2"><strong>This site (aif-c01.com)</strong> — Free practice tests covering all five AIF-C01 domains in both timed exam mode and flashcard mode.</p>
                    </>
                )
            },
            {
                question: "Do I need to know how to code or use AWS hands-on to pass?",
                answer: (
                    <>
                        <p>No. The AIF-C01 is a foundational exam that tests conceptual knowledge, not hands-on technical skills. You will not be asked to write code, configure AWS services, or interpret technical architecture diagrams in depth.</p>
                        <p className="mt-4">You do need to understand what various AWS services do, when to use them, and how they compare to one another. You should also understand AI/ML concepts at a conceptual level — for example, knowing what RAG is and when it would be preferable to fine-tuning, without needing to implement either.</p>
                    </>
                )
            },
            {
                question: "Is the AIF-C01 worth getting?",
                answer: (
                    <>
                        <p>For most professionals, yes. According to a 2023 AWS study, employers are willing to pay significantly more for AI-skilled workers — with premiums as high as 43% more in some roles like sales and marketing. As AI becomes more embedded in business operations, employers increasingly value candidates who can speak confidently about AI tools, capabilities, and responsible use.</p>
                        <p className="mt-4">The AIF-C01 is particularly valuable if you work in or alongside technology teams and want to demonstrate AI fluency, if you are preparing for a move into cloud or AI roles, or if you want to build toward the more technical AWS Machine Learning certifications. Given the moderate exam cost and relatively short preparation time, the return on investment is strong for most candidates.</p>
                    </>
                )
            }
        ]
    }
];

export default function FAQsPage() {
    return (
        <div className="min-h-screen bg-white pt-24 pb-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

                {/* Hero */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
                        Everything you want to know about the AWS Certified AI Practitioner exam — from registration to results.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-12 md:gap-16 pt-8">

                    {/* Left Sticky Navigation */}
                    <div className="hidden md:block w-72 shrink-0">
                        <div className="sticky top-32 space-y-4">
                            <h3 className="font-bold text-[18px] text-slate-900 mb-6">Jump to a topic</h3>
                            <ul className="space-y-4 border-l border-slate-200">
                                {faqSections.map((section, idx) => (
                                    <li key={idx} className="-ml-[1px]">
                                        <a href={`#${section.id}`} className="block pl-4 border-l border-transparent hover:border-indigo-500 text-slate-500 hover:text-indigo-700 text-[16px] transition-colors">
                                            {section.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="flex-1 space-y-16">
                        {faqSections.map((section, idx) => (
                            <div key={idx} id={section.id} className="scroll-mt-32 space-y-4">
                                <h2 className="tracking-tight text-[28px] font-bold text-slate-900 border-b border-slate-200 pb-4 mb-4">{section.title}</h2>
                                <div className="space-y-1">
                                    {section.items.map((item, itemIdx) => (
                                        <details key={itemIdx} className="group bg-transparent border-none outline-none py-5 border-b border-slate-200 last:border-b-0">
                                            <summary className="flex justify-between items-start font-bold text-[18px] text-slate-900 cursor-pointer list-none select-none">
                                                <span className="pr-6 leading-snug">{item.question}</span>
                                                <span className="transition duration-300 group-open:rotate-45 group-open:text-indigo-500 block text-2xl leading-none text-slate-400 group-hover:text-indigo-500 shrink-0 mt-0.5">+</span>
                                            </summary>
                                            <div className="text-slate-500 mt-4 leading-relaxed text-[16px] pr-8">
                                                {item.answer}
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* CTA */}
                <div className="mt-20 max-w-4xl mx-auto bg-indigo-50 border border-indigo-200 rounded-3xl p-10 sm:p-14 text-center space-y-6 shadow-sm">
                    <h2 className="tracking-tight text-[30px] font-bold text-slate-900">Start Preparing Today</h2>
                    <p className="text-slate-500 text-[18px] max-w-xl mx-auto">Take a free AIF-C01 practice test and find out where you stand.</p>
                    <Link href="/" className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-10 rounded-xl transition-colors shadow-sm shadow-indigo-600/20">
                        Start a Free Practice Test
                    </Link>
                </div>

            </div>
        </div>
    );
}
