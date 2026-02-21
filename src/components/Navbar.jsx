import { FileCheck2, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '../lib/utils';

const LINKS = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'FAQ', href: '#faq' },
];

/**
 * @intent Transparent-to-Solid navbar with mobile overlay
 */
export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-12 left-0 right-0 z-50 transition-all duration-300 px-5 sm:px-8",
                scrolled ? "top-4 scale-95" : "top-12"
            )}
        >
            <div
                className={cn(
                    "container-max h-20 rounded-full flex items-center justify-between px-8 border transition-all duration-300",
                    scrolled
                        ? "bg-white/90 backdrop-blur-md shadow-2xl border-primary/10"
                        : "bg-white/50 backdrop-blur-sm border-white/20"
                )}
            >
                {/* Logo */}
                <div className="flex items-center gap-2 text-xl font-black transition-transform hover:scale-105">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
                        <FileCheck2 size={18} fill="currentColor" className="text-white" />
                    </div>
                    <span>DealDoc<span className="text-primary italic">.ai</span></span>
                </div>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-10">
                    {LINKS.map(link => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm font-bold text-text-primary/70 hover:text-primary transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a href="#waitlist" className="btn-primary h-12 px-6 text-sm">
                        Join Waitlist
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={cn(
                "absolute top-24 left-5 right-5 bg-white shadow-2xl rounded-3xl p-8 border border-primary/10 transition-all duration-500 lg:hidden",
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
            )}>
                <div className="flex flex-col gap-6">
                    {LINKS.map(link => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-lg font-bold text-text-primary/70 hover:text-primary"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#waitlist"
                        onClick={() => setMenuOpen(false)}
                        className="btn-primary"
                    >
                        Join Waitlist
                    </a>
                </div>
            </div>
        </nav>
    );
}
