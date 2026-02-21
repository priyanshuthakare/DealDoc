import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { cn } from '../lib/utils';

const SLIDES = [
    {
        title: 'Review Purchase Agreements',
        description: 'Upload any contract and DealDoc flags missing initials, mismatched dates, and compliance gaps in seconds.',
        image: '/review-purchase-agreement.jpeg'
    },
    {
        title: 'Automated Deadlines',
        description: 'Every critical date — inspection, loan approval, closing — is extracted and tracked automatically with reminders.',
        image: '/automated-deadlines.jpeg'
    },
    {
        title: 'Professional Email Drafts',
        description: 'No more robotic copy. DealDoc drafts polished updates for your clients, the lender, and the title company.',
        image: '/proffessional_email_draft.jpeg'
    },
];

/**
 * @intent Simple image carousel with navigation dots
 */
export default function AiDemo() {
    const { ref, isVisible } = useScrollReveal(0.1);
    const [active, setActive] = useState(0);

    return (
        <section ref={ref} className="section-padding bg-white relative overflow-hidden">
            <div className="container-max">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight">
                        See DealDoc <br />
                        <span className="gradient-text">In Action</span>
                    </h2>
                </div>

                <div className={cn(
                    "max-w-5xl mx-auto relative transition-all duration-1000",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                )}>
                    {/* Carousel */}
                    <div className="aspect-[16/9] rounded-[40px] overflow-hidden shadow-2xl relative border-8 border-bg-light">
                        {SLIDES.map((slide, i) => (
                            <div
                                key={slide.title}
                                className={cn(
                                    "absolute inset-0 transition-all duration-700",
                                    i === active ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                                )}
                            >
                                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent" />
                                <div className="absolute bottom-10 left-10 right-10">
                                    <h3 className="text-2xl font-bold text-white mb-2">{slide.title}</h3>
                                    <p className="text-white/60 max-w-lg">{slide.description}</p>
                                </div>
                            </div>
                        ))}

                        {/* Arrows */}
                        <button
                            onClick={() => setActive(a => (a - 1 + SLIDES.length) % SLIDES.length)}
                            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all text-white"
                        >
                            <ArrowLeft size={24} />
                        </button>
                        <button
                            onClick={() => setActive(a => (a + 1) % SLIDES.length)}
                            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all text-white"
                        >
                            <ArrowRight size={24} />
                        </button>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-3 mt-8">
                        {SLIDES.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className={cn(
                                    "w-3 h-3 rounded-full transition-all",
                                    i === active ? "bg-primary w-8" : "bg-primary/20 hover:bg-primary/40"
                                )}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
