import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { cn } from '../lib/utils';

const FAQS = [
    { q: 'Is my data secure?', a: 'Yes. We use SOC 2 compliant servers and bank-grade 256-bit encryption. Your data is yours alone.' },
    { q: 'Which states are supported?', a: 'Currently California, Texas, and Florida. More states are being added monthly based on waitlist demand.' },
    { q: 'Does it work with SkySlope or Dotloop?', a: 'Absolutely. DealDoc integrates seamlessly with major transaction management platforms.' },
    { q: 'How accurate is the AI?', a: 'Our models are trained specifically on real estate contracts. Accuracy exceeds 98% for standard purchase agreements.' },
    { q: 'Can I cancel anytime?', a: 'Yes, we are a month-to-month service. No long-term contracts or sneaky fees.' },
    { q: 'What types of documents can it read?', a: 'Purchase agreements, agency disclosures, tax reports, addendums, and most standard PDF/DOCX contracts.' },
    { q: 'How much does it cost?', a: 'Individual plans start at $69/mo. Early bird waitlist joiners get a 30% lifetime discount.' },
    { q: 'How long does setup take?', a: 'Zero setup. Upload your first contract and you are ready to go in under 60 seconds.' },
    { q: 'Do you offer team billing?', a: 'Yes, our brokerage plan offers consolidated billing and admin controls for teams of 5 or more.' },
];

/**
 * @intent Clean accordion section for frequently asked questions
 */
export default function Faq() {
    const { ref, isVisible } = useScrollReveal(0.1);
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" ref={ref} className="section-padding bg-white">
            <div className="container-max">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div>
                        <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight">
                            Got <span className="gradient-text">Questions?</span>
                        </h2>
                        <p className="text-lg text-text-secondary leading-relaxed mb-8">
                            Everything you need to know about the future of transaction coordination.
                        </p>
                        <div className="p-8 glass-card bg-primary-light/30 border-primary/10">
                            <h4 className="font-bold text-lg mb-2">Need more help?</h4>
                            <p className="text-sm text-text-secondary mb-6">Our support team is active 24/7 for waitlist members.</p>
                            <a href="mailto:priyanshuthakare14@gmail.com" className="font-bold text-primary hover:underline transition-all">Support Center &rarr;</a>
                        </div>
                    </div>

                    <div className={cn(
                        "lg:col-span-2 space-y-4 transition-all duration-700",
                        isVisible ? "opacity-100" : "opacity-0"
                    )}>
                        {FAQS.map((faq, i) => (
                            <div
                                key={faq.q}
                                className={cn(
                                    "border rounded-[32px] overflow-hidden transition-all",
                                    openIndex === i ? "border-primary bg-primary-light/20" : "border-primary/10 bg-white"
                                )}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                                    className="w-full px-8 py-6 flex items-center justify-between text-left font-bold text-lg"
                                >
                                    <span>{faq.q}</span>
                                    {openIndex === i ? <Minus className="text-primary" /> : <Plus className="text-text-secondary" />}
                                </button>
                                <div className={cn(
                                    "transition-all duration-300",
                                    openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                )}>
                                    <p className="px-8 pb-8 text-text-secondary leading-relaxed">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
