import { useScrollReveal } from '../hooks/useScrollReveal';
import { cn } from '../lib/utils';

const BADGES = [
    { label: 'SOC 2 TYPE II', sub: 'Verified Compliance' },
    { label: '48 STATES', sub: 'Active Coverage' },
    { label: '256-BIT', sub: 'Bank-Grade Security' },
    { label: '99.9% UPTIME', sub: 'Enterprise Reliability' },
];

/**
 * @intent Simple trust badges strip for social proof
 */
export default function SocialProof() {
    const { ref, isVisible } = useScrollReveal(0.1);

    return (
        <section ref={ref} className="py-12 bg-white border-y border-primary/5">
            <div className="container-max">
                <div className={cn(
                    "flex flex-wrap items-center justify-around gap-8 transition-all duration-700",
                    isVisible ? "opacity-100" : "opacity-0"
                )}>
                    {BADGES.map((badge) => (
                        <div key={badge.label} className="text-center group">
                            <div className="text-sm font-black text-bg-dark/20 group-hover:text-primary transition-colors tracking-[0.2em] mb-1">
                                {badge.label}
                            </div>
                            <div className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">
                                {badge.sub}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
