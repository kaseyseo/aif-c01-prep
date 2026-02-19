import { Button } from "@/components/ui/button";

export default function AboutUsPage() {
    return (
        <div className="min-h-screen bg-[#050609] flex flex-col items-center">
            <div className="p-8 max-w-3xl mx-auto text-center space-y-12 py-20">
                <div className="space-y-6">
                    <h1 className="mb-8 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2">
                        About Us
                    </h1>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        We’re here to help professionals learn and apply the latest AI concepts on AWS.
                    </p>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        Our goal is to provide realistic, high-quality practice questions so you can confidently pass the AWS Certified AI Practitioner (AIF-C01) exam.
                    </p>
                </div>

                <div className="bg-[#15171e] border border-white/5 rounded-2xl p-8 w-full max-w-lg mx-auto">
                    <h2 className="text-xl font-bold text-white mb-6">Contact Us</h2>
                    <form className="space-y-4 text-left">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-[#050609] border border-white/10 rounded-lg p-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-[#050609] border border-white/10 rounded-lg p-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-[#050609] border border-white/10 rounded-lg p-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                placeholder="How can we help you?"
                            />
                        </div>
                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 mt-2 rounded-lg transition-colors">
                            Send
                        </Button>
                    </form>
                </div>

                <div className="mt-8 text-center text-sm text-slate-500">
                    This site is not affiliated with, endorsed by, or sponsored by Amazon Web Services.
                </div>
            </div>
        </div>
    );
}
