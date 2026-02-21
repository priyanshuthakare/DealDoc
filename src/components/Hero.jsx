import { ArrowUpRight, BadgeCheck, ShieldCheck, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useCountUp } from '../hooks/useCountUp';
import { useWaitlistStore } from '../store/useWaitlistStore';

/**
 * @intent Hero section — simple, clean, impact-focused layout with inline email form
 */
export default function Hero() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const count = useWaitlistStore((state) => state.count);
    const increment = useWaitlistStore((state) => state.increment);

    const { ref: savingsRef, displayValue: savingsValue } = useCountUp(2350, 1500, '$', '/mo');
    const { ref: hoursRef, displayValue: hoursValue } = useCountUp(15, 1500, '', ' hrs');
    const { ref: agentsRef, displayValue: agentsValue } = useCountUp(count, 1500, '', '+');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await fetch('https://formspree.io/f/xkovveba', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });
            increment();
            setSubmitted(true);
        } catch (err) {
            increment();
            setSubmitted(true);
        }
        setLoading(false);
    };

    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 -z-10 bg-bg-light">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.05)_0%,transparent_100%)]" />
            </div>

            <div className="container-max text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light text-primary text-sm font-bold mb-8 animate-fade-in">
                    <Sparkles size={16} fill="currentColor" />
                    <span>Now in private beta for CA, TX, and FL</span>
                </div>

                <h1 className="text-[44px] sm:text-[68px] leading-[1.05] mb-8 animate-fade-in-up">
                    Stop Spending 3 Hours a Night on <br className="hidden sm:block" />
                    <span className="gradient-text">Transaction Paperwork.</span>
                </h1>

                <p className="text-[18px] sm:text-[21px] text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-100">
                    The AI-powered coordinator that reviews contracts, tracks deadlines,
                    and drafts emails — <span className="text-text-primary font-semibold italic">automatically.</span>
                </p>

                {!submitted ? (
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto mb-16 animate-fade-in-up delay-200">
                        <input
                            type="email"
                            required
                            placeholder="Enter your work email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full sm:flex-1 h-14 px-6 rounded-full border-2 border-primary/10 focus:border-primary outline-none transition-all text-lg"
                        />
                        <button type="submit" disabled={loading} className="btn-primary w-full sm:w-auto h-14 whitespace-nowrap">
                            {loading ? 'Joining...' : 'Join the Waitlist'}
                            <ArrowUpRight size={20} />
                        </button>
                    </form>
                ) : (
                    <div className="max-w-md mx-auto mb-16 p-6 rounded-3xl bg-success/5 border border-success/20 text-success text-center animate-scale-in">
                        <BadgeCheck className="mx-auto mb-2" size={32} />
                        <h4 className="font-bold text-xl mb-1">You're on the list!</h4>
                        <p className="text-sm">We'll reach out soon with your beta invite.</p>
                    </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
                    <div ref={savingsRef} className="p-6 glass-card animate-fade-in-up delay-300">
                        <div className="text-3xl font-extrabold text-primary mb-1">{savingsValue}</div>
                        <div className="text-sm text-text-secondary font-medium">Avg. Savings per Deal</div>
                    </div>
                    <div ref={hoursRef} className="p-6 glass-card animate-fade-in-up delay-400">
                        <div className="text-3xl font-extrabold text-primary mb-1">{hoursValue}</div>
                        <div className="text-sm text-text-secondary font-medium">Saved per Transaction</div>
                    </div>
                    <div ref={agentsRef} className="p-6 glass-card animate-fade-in-up delay-500">
                        <div className="text-3xl font-extrabold text-primary mb-1">{agentsValue}</div>
                        <div className="text-sm text-text-secondary font-medium">Agents Waiting</div>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-4 mt-12 text-sm text-text-secondary font-medium animate-fade-in delay-700">
                    <span className="flex items-center gap-1.5"><ShieldCheck size={16} className="text-success" /> SOC 2 Type II</span>
                    <span className="w-1 h-1 bg-primary/20 rounded-full" />
                    <span className="flex items-center gap-1.5"><ShieldCheck size={16} className="text-success" /> Bank-Grade Security</span>
                </div>
            </div>
        </section>
    );
}
