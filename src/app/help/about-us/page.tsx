import { Button } from "@/components/ui/button";

export default function AboutUsPage() {
    return (
        <div className="min-h-screen bg-white pt-24 pb-24 font-['Inter',sans-serif] flex flex-col items-center">
            <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-12">
                <div className="space-y-6">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-2">
                        About Us
                    </h1>
                    <p className="text-slate-500 text-lg mx-auto mt-4 font-['Inter',sans-serif] leading-relaxed">
                        We offer top quality materials to help professionals learn and apply the latest AI concepts on AWS. Our goal is to provide realistic, high-quality practice questions so you can confidently pass the AWS Certified AI Practitioner (AIF-C01) exam.
                    </p>
                    <p className="text-slate-500 text-lg mx-auto mt-4 font-['Inter',sans-serif] leading-relaxed">
                        If you have any questions, please contact us.
                    </p>
                    <p className="text-slate-500 text-lg mx-auto mt-4 font-['Inter',sans-serif] leading-relaxed">
                        We are not affiliated with, endorsed by, or sponsored by Amazon Web Services.
                    </p>
                </div>
            </div>
        </div>
    );
}
