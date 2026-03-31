import { Button } from "@/components/ui/button";

export default function ContactUsPage() {
    return (
        <div className="min-h-screen bg-white pt-24 pb-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
                <div className="space-y-6">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-2">
                        Contact Us
                    </h1>
                    <p className="text-slate-500 text-[18px] leading-relaxed max-w-2xl mx-auto">
                        Have a question or need assistance? <br />
                        Fill out the form below and we'll get back to you.
                    </p>
                </div>

                <div className="w-full max-w-xl mx-auto">
                    <form className="space-y-5 text-left">
                        <div>
                            <label htmlFor="name" className="block text-[14px] font-bold text-slate-700 mb-1.5">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-[14px] font-bold text-slate-700 mb-1.5">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-[14px] font-bold text-slate-700 mb-1.5">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                                placeholder="How can we help you?"
                            />
                        </div>
                        <Button type="button" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-6 mt-4 rounded-xl transition-colors shadow-sm shadow-indigo-600/20 text-[16px]">
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
