import { FileWarning, TimerReset, Wallet } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { cn } from '../lib/utils';

const PAIN_POINTS = [
    {
        Icon: TimerReset,
        title: 'Missed Deadlines & TC Errors',
        description: 'One missed inspection date or double-booked closing can kill a deal. DealDoc tracks every critical milestone automatically, so you never miss a beat.',
    },
    {
        Icon: FileWarning,
        title: 'Hidden Document Gaps',
        description: 'Hours spent chasing signatures and disclosures? Our AI scans every upload to flag missing initials, expired dates, and incomplete fields in seconds.',
    },
    {
        Icon: Wallet,
        title: 'High Overhead Costs',
        description: 'Spending $500 per deal on transaction coordinators? DealDoc gives you the power of a pro TC for a fraction of the cost, scaling with your volume.',
    },
];

/**
 * @intent Simple 3-card pain point section with glassmorphism cards
 */
export default function PainPoints() {
    const { ref, isVisible } = useScrollReveal(0.15);

    return (
        <section id="problems" ref={ref} className="section-padding bg-bg-light">
            <div className="container-max">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight">
                        Real Estate is Hard. <br />
                        <span className="gradient-text">Paperwork Shouldn't Be.</span>
                    </h2>
                    <p className="text-lg text-text-secondary">
                        Agents spend 12+ hours per transaction on coordination. We believe your time is better spent building relationships, not chasing signatures.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {PAIN_POINTS.map((point, i) => (
                        <div
                            key={point.title}
                            className={cn(
                                "glass-card p-10 transition-all duration-700",
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                            )}
                            style={{ transitionDelay: `${i * 150}ms` }}
                        >
                            <div className="w-14 h-14 bg-primary-light text-primary rounded-2xl flex items-center justify-center mb-6">
                                <point.Icon size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{point.title}</h3>
                            <p className="text-text-secondary leading-relaxed">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
