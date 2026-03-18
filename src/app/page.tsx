import { ModeSelection } from "@/components/home/ModeSelection";
import { GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8 bg-white relative overflow-hidden font-['Inter',sans-serif]">

      {/* Background gradients or effects if needed matching the dark theme */}


      <div className="z-10 w-full max-w-6xl flex flex-col gap-12 sm:gap-16">



        {/* Hero Section */}
        <div className="text-center space-y-6 max-w-4xl mx-auto mt-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Prepare for your AWS Certified AI Practitioner exam (AIF-C01)
          </h1>
          <p className="text-slate-500 text-lg mx-auto mt-4 font-['Inter',sans-serif] leading-relaxed">
            Master artificial intelligence (AI), machine learning (ML), and generative AI concepts and use cases. Build confidence and boost your exam readiness with free practice sessions.
          </p>
        </div>

        {/* Selection Interface */}
        <ModeSelection />

        {/* Footer Info Text */}
        <div className="text-slate-500 max-w-[848px] mx-auto mt-16 text-[12px] font-['Roboto',sans-serif] text-center leading-relaxed space-y-6">
          <p>
            The AWS Certified AI Practitioner Practice Exams (AIF-C01) is one of the newest certifications of Amazon Web Services.
          </p>
          <p>
            This AWS Certified AI Practitioner exam is intended for individuals who can effectively demonstrate an overall knowledge of AI/ML, generative AI technologies, and associated AWS services and tools independent of a specific job role. The target candidate for this certification should have a solid understanding with AI, ML, and generative AI concepts, and can also determine the right AI/ML technologies for specific use cases while applying these technologies responsibly. Additionally, you should have up to 6 months of experience working with AI/ML technologies on AWS. Take your career and salary to the next level with an AWS AI Practitioner certification!
          </p>
        </div>

      </div>
    </div>
  );
}
