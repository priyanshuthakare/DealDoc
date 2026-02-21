import { ArrowUpRight, BadgeCheck } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { cn } from '../lib/utils';

const PLANS = [
    {
        name: 'Individual Agent',
        price: 'Future Launch',
        description: 'Perfect for the independent agent looking to scale their volume.',
        features: [
            'Unlimited AI Contract Audits',
            'Automated Deadline Tracking',
            'Unlimited Email Drafting',
            'CA, TX, FL Templates',
            'Cloud Library Storage',
        ],
        cta: 'Join Waitlist',
        highlight: false,
    },
    {
        name: 'Early Bird Pro',
        price: '$49',
        priceDetail: '/mo per agent (billed annually)',
        description: 'Our most popular plan for high-volume agents and small teams.',
        features: [
            'Everything in Individual',
            'Priority AI Processing',
            'Team Collaboration Tools',
            'CRMs & MLS Integrations',
            'VIP Launch Access',
        ],
        cta: 'Join Beta Waitlist',
        highlight: true,
        tag: '30% Lifetime Discount',
    },
    {
        name: 'Brokerage',
        price: 'Custom',
        description: 'Custom solutions for teams and boutique brokerages.',
        features: [
            'Everything in Pro',
            'Unified Billing',
            'Admin Dashboard',
            'Custom Legal Templates',
            'Dedicated Account Manager',
        ],
        cta: 'Contact for Enterprise',
        highlight: false,
    },
];

/**
 * @intent 3-card pricing section with clear tiered features
 */
export default function Pricing() {
    const { ref, isVisible } = useScrollReveal(0.1);

    return (
        <section id="pricing" ref={ref} className="section-padding bg-bg-light">
            <div className="container-max">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight">
                        Power Your Business for <br />
                        <span className="gradient-text">The Cost of One Cup of Coffee</span>
                    </h2>
                    <p className="text-lg text-text-secondary">
                        Secure your 30% lifetime discount by joining the waitlist today. Prices will increase after public launch.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {PLANS.map((plan, i) => (
                        <div
                            key={plan.name}
                            className={cn(
                                "flex flex-col p-10 rounded-[40px] transition-all duration-700 h-full",
                                plan.highlight
                                    ? "bg-bg-dark text-white ring-8 ring-primary/5 shadow-2xl relative z-10 scale-105"
                                    : "bg-white border border-primary/10",
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                            )}
                            style={{ transitionDelay: `${i * 150}ms` }}
                        >
                            {plan.tag && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[11px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                                    {plan.tag}
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-4xl font-extrabold">{plan.price}</span>
                                    {plan.priceDetail && (
                                        <span className={cn("text-sm", plan.highlight ? "text-white/40" : "text-text-secondary")}>
                                            {plan.priceDetail}
                                        </span>
                                    )}
                                </div>
                                <p className={cn("text-sm leading-relaxed", plan.highlight ? "text-white/60" : "text-text-secondary")}>
                                    {plan.description}
                                </p>
                            </div>

                            <div className="flex-1 mb-10">
                                <ul className="space-y-4">
                                    {plan.features.map(f => (
                                        <li key={f} className="flex items-start gap-3">
                                            <div className={cn(
                                                "w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                                                plan.highlight ? "bg-primary/20 text-primary" : "bg-primary/10 text-primary"
                                            )}>
                                                <BadgeCheck size={12} strokeWidth={3} />
                                            </div>
                                            <span className={cn("text-[15px] font-medium", plan.highlight ? "text-white/80" : "text-text-primary")}>
                                                {f}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a
                                href="#waitlist"
                                className={cn(
                                    "flex items-center justify-center gap-2 h-14 rounded-full font-bold text-lg transition-all",
                                    plan.highlight
                                        ? "bg-primary text-white hover:bg-primary/90 shadow-[0_0_30px_-5px_var(--color-primary)] shadow-primary/30"
                                        : "bg-primary text-white hover:bg-primary/90"
                                )}
                            >
                                {plan.cta}
                                <ArrowUpRight size={18} />
                            </a>
                        </div>
                    ))}
                </div>

                <p className="text-center mt-12 text-sm font-medium text-text-secondary">
                    *Early Bird discount applies for the life of your subscription.
                </p>
            </div>
        </section>
    );
}
