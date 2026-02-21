import { CheckCircle2, XCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { cn } from '../lib/utils';

const FEATURES = [
    'AI Contract Review',
    'Deadline Extraction',
    'Automated Emails',
    'State Templates (CA/TX/FL)',
    'Mobile Access',
    'Unlimited Transactions',
    'Flat Monthly Fee',
];

const COMPETITORS = [
    { name: 'Human TC', values: [true, 'Slow', 'Manual', true, false, false, false] },
    { name: 'SkySlope', values: [false, false, false, true, true, true, false] },
    { name: 'Dotloop', values: [false, false, false, true, true, true, false] },
    { name: 'Cloze', values: [false, 'Partial', 'Templates', false, true, true, true] },
];

/**
 * @intent Comparison table (DealDoc vs 4 competitors)
 */
export default function ComparisonTable() {
    const { ref, isVisible } = useScrollReveal(0.1);

    return (
        <section ref={ref} className="section-padding bg-white">
            <div className="container-max">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-extrabold mb-4">How We Stack Up</h2>
                    <p className="text-text-secondary">DealDoc is built specifically for speed and accuracy in transaction coordination.</p>
                </div>

                <div className={cn(
                    "overflow-x-auto transition-all duration-700",
                    isVisible ? "opacity-100" : "opacity-0"
                )}>
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="border-b-2 border-primary/10">
                                <th className="py-6 pr-6 text-sm font-bold uppercase tracking-wider text-text-secondary">Feature</th>
                                {COMPETITORS.map(c => (
                                    <th key={c.name} className="py-6 px-4 text-sm font-bold uppercase tracking-wider text-text-secondary text-center">
                                        {c.name}
                                    </th>
                                ))}
                                <th className="py-6 px-6 text-sm font-bold uppercase tracking-wider text-primary text-center bg-primary/5 rounded-t-2xl">
                                    DealDoc
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-primary/5">
                            {FEATURES.map((feat, i) => (
                                <tr key={feat} className="hover:bg-primary/[0.02] transition-colors">
                                    <td className="py-4 pr-6 font-semibold text-text-primary">{feat}</td>
                                    {COMPETITORS.map(c => (
                                        <td key={`${c.name}-${feat}`} className="py-4 px-4 text-center">
                                            {c.values[i] === true ? <CheckCircle2 className="text-success/50 mx-auto" size={18} /> :
                                                c.values[i] === false ? <XCircle className="text-bg-dark/5 mx-auto" size={18} /> :
                                                    <span className="text-[10px] font-bold text-text-secondary uppercase">{c.values[i]}</span>}
                                        </td>
                                    ))}
                                    <td className="py-4 px-6 text-center bg-primary/5">
                                        <CheckCircle2 className="text-primary mx-auto" size={24} strokeWidth={3} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
