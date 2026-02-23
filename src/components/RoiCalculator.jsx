import { CheckCircle2, XCircle } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { cn } from '../lib/utils';

const ROWS = [
    { feature: 'Instant Contract Review', human: false, pilot: true },
    { feature: '24/7 Deadline Tracking', human: 'Slow', pilot: true },
    { feature: 'Automated Email Drafting', human: false, pilot: true },
    { feature: 'Client Status Portal', human: 'Manual', pilot: true },
    { feature: 'State Compliance Checks', human: 'Hit/Miss', pilot: true },
    { feature: 'Unlimited File Storage', human: 'Extra Cost', pilot: true },
    { feature: 'Flat Monthly Fee', human: false, pilot: true },
];

/**
 * @intent Comparison table (Human TC vs DealDoc) + savings highlight box with count-up
 */
export default function RoiCalculator() {
    const { ref, isVisible } = useScrollReveal(0.1);
    const { ref: countRef, displayValue: countValue } = useCountUp(5400, 2000, '$', '/year');

    return (
        <section ref={ref} className="section-padding bg-bg-light">
            <div className="container-max">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight">
                        Stop Paying for <br />
                        <span className="gradient-text">Human Errors</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                    {/* Table */}
                    <div className={cn(
                        "lg:col-span-3 glass-card overflow-hidden transition-all duration-700",
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                    )}>
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-primary/5">
                                    <th className="px-6 py-5 text-sm font-bold uppercase tracking-wider text-text-secondary">Capability</th>
                                    <th className="px-6 py-5 text-sm font-bold uppercase tracking-wider text-text-secondary text-center">Human TC</th>
                                    <th className="px-6 py-5 text-sm font-bold uppercase tracking-wider text-primary text-center">DealDoc</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-primary/5">
                                {ROWS.map((row) => (
                                    <tr key={row.feature} className="hover:bg-primary/[0.02] transition-colors">
                                        <td className="px-6 py-4 text-[15px] font-medium text-text-primary">{row.feature}</td>
                                        <td className="px-6 py-4 text-center">
                                            {row.human === true ? <CheckCircle2 className="text-success mx-auto" /> :
                                                row.human === false ? <XCircle className="text-bg-dark/10 mx-auto" /> :
                                                    <span className="text-xs font-bold text-text-secondary uppercase">{row.human}</span>}
                                        </td>
                                        <td className="px-6 py-4 text-center bg-primary/[0.03]">
                                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                                                <CheckCircle2 className="text-primary" size={14} />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Savings Box */}
                    <div className={cn(
                        "lg:col-span-2 p-10 rounded-[40px] bg-gradient-to-br from-[#0A0A2E] to-[#0033FF] text-white card-shadow text-center flex flex-col justify-center transition-all duration-700",
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                    )}>
                        <h3 className="text-2xl font-bold mb-8">Potential Cost Savings</h3>
                        <div ref={countRef} className="text-6xl font-black mb-4 tracking-tight animate-pulse-gentle">{countValue}</div>
                        <p className="text-white/70 font-medium mb-12">
                            Based on an average agent closing 12 transactions per year vs. paying a human TC $450/deal.
                        </p>
                        <a href="#waitlist" className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all self-center">
                            Secure Your Discount
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
