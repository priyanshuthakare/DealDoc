import { Quote } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { cn } from '../lib/utils';

/**
 * @intent Simple, trustworthy founder quote section
 */
export default function FounderNote() {
    const { ref, isVisible } = useScrollReveal(0.1);

    return (
        <section ref={ref} className="py-24 bg-bg-dark text-white text-center relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.1)_0%,transparent_70%)]" />

            <div className={cn(
                "container-max relative z-10 transition-all duration-1000",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}>
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-10 translate-y-4">
                    <Quote size={40} className="text-primary" />
                </div>

                <h2 className="text-3xl sm:text-5xl font-serif italic mb-10 max-w-4xl mx-auto leading-tight">
                    "Real estate isn't about paperwork. It's about relationships. <br className="hidden sm:block" />
                    We built DealDoc to give agents their nights back."
                </h2>

                <div className="flex flex-col items-center">
                    <div className="font-bold text-xl mb-1"> ~ Priyanshu Thakare</div>
                    <div className="text-primary font-bold text-sm uppercase tracking-widest">Founder, DealDoc</div>
                </div>
            </div>
        </section>
    );
}
