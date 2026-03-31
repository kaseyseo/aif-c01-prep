import Link from 'next/link';

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-white pt-24 pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

                {/* Hero */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                        Privacy Policy
                    </h1>
                    <p className="text-slate-500 text-[18px] max-w-2xl mx-auto leading-relaxed">
                        Last updated: March 2026
                    </p>
                </div>

                <div className="bg-white p-8 sm:p-12 space-y-10">
                    <div className="text-indigo-800 font-medium bg-indigo-50 inline-block px-4 py-2 rounded-lg border border-indigo-200 text-[14px]">
                        Effective date: June 1, 2025
                    </div>

                    <div className="space-y-3">
                        <h2 className="tracking-tight text-[24px] font-bold text-slate-900 mb-2">1. Introduction</h2>
                        <p className="text-slate-500 leading-relaxed text-[16px]">Welcome to aif-c01.com ("we", "our", or "us"). We are committed to protecting your privacy. This Privacy Policy explains what information we collect when you visit our website, how we use it, and your rights in relation to it.</p>
                        <p className="text-slate-500 leading-relaxed text-[16px]">By using this website, you agree to the collection and use of information in accordance with this policy.</p>
                    </div>

                    <div className="space-y-3">
                        <h2 className="tracking-tight text-[24px] font-bold text-slate-900 mb-2">2. Information We Collect</h2>
                        <p className="text-slate-500 leading-relaxed text-[16px]"><strong>Usage Data:</strong> We automatically collect certain information when you visit our site, including your IP address, browser type, browser version, the pages you visit, the time and date of your visit, and the time spent on each page. This data is collected through cookies and third-party analytics tools.</p>
                        <p className="text-slate-500 leading-relaxed text-[16px]"><strong>Cookies:</strong> We use cookies — small text files stored on your device — to understand how visitors use our site and to serve relevant advertisements. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some parts of the site may not function properly if you decline cookies.</p>
                        <p className="text-slate-500 leading-relaxed text-[16px]"><strong>Information You Provide:</strong> If you contact us directly (for example, by email), we may receive your name, email address, and the content of your message.</p>
                        <p className="text-slate-500 leading-relaxed text-[16px]">We do not require you to create an account to use this site, and we do not knowingly collect personal data from children under the age of 13.</p>
                    </div>

                    <div className="space-y-3">
                        <h2 className="tracking-tight text-[24px] font-bold text-slate-900 mb-2">3. How We Use Your Information</h2>
                        <p className="text-slate-500 leading-relaxed text-[16px]">We use the information we collect to operate and improve the website, to understand how visitors interact with our content, and to serve relevant advertisements through Google AdSense.</p>
                        <p className="text-slate-500 leading-relaxed text-[16px]">We do not sell your personal data to third parties.</p>
                    </div>

                    <div className="space-y-3 text-slate-500 leading-relaxed">
                        <h2 className="tracking-tight text-[24px] font-bold text-slate-900 mb-2">4. Google AdSense and Advertising</h2>
                        <p className="text-[16px]">This website uses Google AdSense, an advertising service provided by Google LLC. AdSense uses cookies to serve ads based on your prior visits to this website and other sites on the internet. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and other sites on the internet.</p>
                        <p className="text-[16px]">You may opt out of personalised advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500 font-medium underline">Google's Ads Settings</a>. Alternatively, you can opt out of third-party vendor use of cookies for personalised advertising by visiting <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500 font-medium underline">www.aboutads.info/choices</a>.</p>
                        <p className="text-[16px]">For more information on how Google collects and processes data, please see Google's Privacy Policy at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500 font-medium underline">policies.google.com/privacy</a>.</p>
                    </div>

                    <div className="space-y-3 text-slate-500 leading-relaxed">
                        <h2 className="tracking-tight text-[24px] font-bold text-slate-900 mb-2">5. Google Analytics</h2>
                        <p className="text-[16px]">We may use Google Analytics to analyse the use of our website. Google Analytics gathers information about website use by means of cookies. The information gathered is used to create reports about the use of our website. Google's privacy policy is available at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500 font-medium underline">policies.google.com/privacy</a>.</p>
                        <p className="text-[16px]">You can opt out of Google Analytics tracking by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500 font-medium underline">Google Analytics Opt-out Browser Add-on</a>.</p>
                    </div>

                    <div className="space-y-3">
                        <h2 className="tracking-tight text-[24px] font-bold text-slate-900 mb-2">6. Third-Party Links</h2>
                        <p className="text-slate-500 leading-relaxed text-[16px]">Our website may contain links to external websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policy of any third-party site you visit.</p>
                    </div>

                    <div className="space-y-3">
                        <h2 className="tracking-tight text-[24px] font-bold text-slate-900 mb-2">7. Data Retention</h2>
                        <p className="text-slate-500 leading-relaxed text-[16px]">We retain usage data collected through analytics tools for as long as necessary to fulfil the purposes described in this policy, or as required by applicable law. You may request deletion of any personal data we hold about you at any time by contacting us.</p>
                    </div>

                    <div className="space-y-3">
                        <h2 className="tracking-tight text-[24px] font-bold text-slate-900 mb-2">8. Your Rights</h2>
                        <p className="text-slate-500 leading-relaxed text-[16px]">Depending on your location, you may have rights under applicable privacy laws including the right to access, correct, or delete personal data we hold about you, and the right to object to or restrict certain processing of your data. To exercise any of these rights, please contact us using the details below.</p>
                        <p className="text-slate-500 leading-relaxed text-[16px]">If you are located in the European Economic Area (EEA) or the United Kingdom, you have additional rights under the General Data Protection Regulation (GDPR) or UK GDPR, including the right to lodge a complaint with a supervisory authority.</p>
                    </div>

                    <div className="space-y-3">
                        <h2 className="tracking-tight text-[24px] font-bold text-slate-900 mb-2">9. Cookies Policy</h2>
                        <p className="text-slate-500 leading-relaxed text-[16px]">Cookies are used on this site for the following purposes: to enable core site functionality, to analyse site traffic via Google Analytics, and to serve personalised advertisements via Google AdSense.</p>
                        <p className="text-slate-500 leading-relaxed text-[16px]">You can control and manage cookies through your browser settings. Most browsers allow you to refuse cookies or delete existing cookies. Please note that disabling cookies may affect the functionality of this and other websites.</p>
                    </div>

                    <div className="space-y-3">
                        <h2 className="tracking-tight text-[24px] font-bold text-slate-900 mb-2">10. Children's Privacy</h2>
                        <p className="text-slate-500 leading-relaxed text-[16px]">This website is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us and we will promptly delete it.</p>
                    </div>

                    <div className="space-y-3">
                        <h2 className="tracking-tight text-[24px] font-bold text-slate-900 mb-2">11. Changes to This Privacy Policy</h2>
                        <p className="text-slate-500 leading-relaxed text-[16px]">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.</p>
                    </div>

                    <div className="space-y-3">
                        <h2 className="tracking-tight text-[24px] font-bold text-slate-900 mb-2">12. Contact Us</h2>
                        <p className="text-slate-500 leading-relaxed text-[16px]">If you have any questions about this Privacy Policy or your personal data, please contact us.</p>
                    </div>

                    <div className="pt-8 border-t border-slate-200 text-[14px] text-slate-400 text-center">
                        <p>This is an unofficial, independent study resource and is not affiliated with or endorsed by Amazon Web Services (AWS).</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
