import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { cn } from '../lib/utils';

const LOGOS = [
    { name: 'SkySlope', url: 'https://cdn.brandfetch.io/id9jsObwph/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1765821292237' },
    { name: 'Dotloop', url: 'https://cdn.brandfetch.io/idAzvXcOww/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1765229149145' },
    { name: 'DocuSign', url: 'https://cdn.brandfetch.io/idZbuqxRqz/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1714487086449' },
    { name: 'Zillow', url: 'https://cdn.worldvectorlogo.com/logos/zillow.svg' },
    { name: 'Redfin', url: 'https://images.seeklogo.com/logo-png/33/1/redfin-logo-png_seeklogo-335748.png' },
    { name: 'Realtor.com', url: 'https://cdn.brandfetch.io/idgghVC7HM/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1768095967049' },
    { name: 'KW', url: 'https://cdn.brandfetch.io/idkqrL0Isy/w/180/h/180/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1667616833250' },
    { name: 'RE/MAX', url: 'https://cdn.brandfetch.io/id_eQqn4Xv/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1755772843288' },
];

/**
 * @intent Integrations logo grid (2×4) with staggered reveal
 */
export default function Integrations() {
    const { ref, isVisible } = useScrollReveal(0.1);

    return (
        <section ref={ref} className="section-padding bg-bg-light">
            <div className="container-max">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight">
                            Works With Your <br />
                            <span className="gradient-text">Existing Tools</span>
                        </h2>
                        <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                            DealDoc isn't another silo. We integrate with the platforms you already use to manage your deals, documents, and leads.
                        </p>
                        <div className="inline-flex items-center gap-4 font-bold text-primary">
                            <span className="flex items-center gap-1 cursor-pointer hover:underline">View all 50+ integrations <ArrowUpRight size={16} /></span>
                            <span className="flex items-center gap-1 text-text-secondary opacity-50 cursor-pointer hover:opacity-100 transition-opacity">API Documentation <ExternalLink size={14} /></span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {LOGOS.map((logo, i) => (
                            <div
                                key={logo.name}
                                className={cn(
                                    "aspect-square bg-white border border-primary/5 rounded-2xl p-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-700 card-shadow",
                                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                                )}
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                <img src={logo.url} alt={logo.name} className="w-full opacity-60 hover:opacity-100 transition-opacity" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
