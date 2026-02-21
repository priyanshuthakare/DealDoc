import { FileCheck2, Github, Linkedin, Twitter } from 'lucide-react';

const LINKS = {
    Product: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Integrations', href: '#integrations' },
        { label: 'FAQ', href: '#faq' },
    ],
    Company: [
        { label: 'About Us', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Security', href: '#' },
    ],
    Support: [
        { label: 'Help Center', href: '#' },
        { label: 'Contact Us', href: 'mailto:priyanshuthakare14@gmail.com' },
        { label: 'Status', href: '#' },
    ],
};

/**
 * @intent Simple 4-column footer with brand, links, and copyright
 */
export default function Footer() {
    return (
        <footer className="bg-bg-dark text-white pt-20 pb-10 px-5 sm:px-8 lg:px-12">
            <div className="container-max">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 text-2xl font-black mb-6">
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                                <FileCheck2 size={24} fill="currentColor" />
                            </div>
                            <span>DealDoc<span className="text-primary italic">.ai</span></span>
                        </div>
                        <p className="text-white/50 max-w-sm mb-8 leading-relaxed">
                            The AI-powered coordinator that gives agents their nights back. <br />
                            Processing transactions in 48 states.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Linkedin, Github].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-all border border-white/10">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {Object.entries(LINKS).map(([title, items]) => (
                        <div key={title}>
                            <h4 className="font-bold mb-6 uppercase tracking-widest text-[11px] text-white/30">{title}</h4>
                            <ul className="space-y-4">
                                {items.map(link => (
                                    <li key={link.label}>
                                        <a href={link.href} className="text-white/60 hover:text-primary transition-colors font-medium">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-white/20 uppercase tracking-widest">
                    <div>© 2026 DealDoc AI. All rights reserved.</div>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                        <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                        <a href="#" className="hover:text-white transition-colors">Accessibility</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
