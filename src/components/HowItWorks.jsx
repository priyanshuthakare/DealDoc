import { CloudUpload, FileSearch, MailCheck } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { cn } from '../lib/utils';

const STEPS = [
    {
        Icon: CloudUpload,
        title: 'Upload Contract',
        description: 'Simply drag and drop your executed purchase agreement. Our AI immediately begins parsing every page.',
    },
    {
        Icon: FileSearch,
        title: 'AI Audit & Deadlines',
        description: 'DealDoc flags missing signatures, extracts all critical dates, and generates a custom transaction checklist.',
    },
    {
        Icon: MailCheck,
        title: 'Automate Communication',
        description: 'One click to send status updates to clients and lenders, track disclosures, and stay ahead of every deadline.',
    },
];

/**
 * @intent 3-step horizontal workflow section with connection line
 */
export default function HowItWorks() {
    const { ref, isVisible } = useScrollReveal(0.1);

    return (
        <section id="how-it-works" ref={ref} className="section-padding bg-bg-dark text-white relative">
            <div className="container-max text-center relative z-10">
                <div className="max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight">
                        From Executed to Closed <br />
                        <span className="text-primary italic">Without the Stress</span>
                    </h2>
                    <p className="text-white/50 text-lg">
                        DealDoc takes over the manual coordination so you can focus on the next deal.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-px border-t border-dashed border-white/10" />

                    {STEPS.map((step, i) => (
                        <div
                            key={step.title}
                            className={cn(
                                "flex flex-col items-center transition-all duration-700",
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                            )}
                            style={{ transitionDelay: `${i * 200}ms` }}
                        >
                            <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-8 relative">
                                <span className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold border-4 border-bg-dark">
                                    {i + 1}
                                </span>
                                <step.Icon size={40} className="text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                            <p className="text-white/50 max-w-xs mx-auto leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
