import { BadgeCheck, Copy, Sparkles, UsersRound } from 'lucide-react';
import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { cn } from '../lib/utils';
import { useWaitlistStore } from '../store/useWaitlistStore';

const DEAL_OPTIONS = ['1–3', '4–7', '8–15', '15+'];
const PAIN_OPTIONS = ['Paperwork', 'Deadlines', 'Compliance', 'TC costs', 'All of the above'];

/**
 * @intent Final CTA with full waitlist form and referral referral system
 */
export default function FinalCta() {
    const { ref, isVisible } = useScrollReveal(0.15);
    const [form, setForm] = useState({ name: '', email: '', deals: '', state: '', pain: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const count = useWaitlistStore((state) => state.count);
    const increment = useWaitlistStore((state) => state.increment);

    const update = (key, val) => setForm(f => ({ ...f, [key]: val }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // Formspree submission
        try {
            await fetch('https://formspree.io/f/xkovveba', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });
            increment();
            setSubmitted(true);
        } catch (err) {
            increment(); // Fallback success for demo
            setSubmitted(true);
        }
        setLoading(false);
    };

    return (
        <section id="waitlist" ref={ref} className="section-padding bg-bg-dark text-white relative overflow-hidden">
            <div className="absolute inset-0 -z-0 opacity-10">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent rounded-full blur-[120px]" />
            </div>

            <div className={cn(
                "container-max relative z-10 transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}>
                {!submitted ? (
                    <div className="max-w-3xl mx-auto rounded-[40px] bg-white/5 border border-white/10 p-8 sm:p-12 backdrop-blur-xl">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl sm:text-5xl mb-4 font-extrabold tracking-tight">
                                Claim Your Spot on the <span className="text-primary italic">Priority Waitlist</span>
                            </h2>
                            <p className="text-white/60 text-lg max-w-xl mx-auto">
                                Secure early access and a 30% lifetime discount. We're onboarding agents based on their deal volume and state.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-white/50 mb-2 px-1 uppercase tracking-wider">Your Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Jane Cooper"
                                        className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 outline-none focus:border-primary transition-all"
                                        value={form.name}
                                        onChange={e => update('name', e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-white/50 mb-2 px-1 uppercase tracking-wider">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="jane@DealDoc.ai"
                                        className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 outline-none focus:border-primary transition-all"
                                        value={form.email}
                                        onChange={e => update('email', e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-white/50 mb-2 px-1 uppercase tracking-wider">State(s) You Work In</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="e.g. CA, TX"
                                        className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 outline-none focus:border-primary transition-all"
                                        value={form.state}
                                        onChange={e => update('state', e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-white/50 mb-2 px-1 uppercase tracking-wider">Average Deals / Month</label>
                                    <div className="flex flex-wrap gap-2">
                                        {DEAL_OPTIONS.map(opt => (
                                            <button
                                                key={opt}
                                                type="button"
                                                onClick={() => update('deals', opt)}
                                                className={cn(
                                                    "px-4 py-2 rounded-xl text-sm font-bold transition-all border",
                                                    form.deals === opt ? "bg-primary border-primary text-white" : "bg-white/5 border-white/10 text-white/60 hover:border-white/20"
                                                )}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-white/50 mb-2 px-1 uppercase tracking-wider">Biggest Pain Point</label>
                                <div className="flex flex-wrap gap-3">
                                    {PAIN_OPTIONS.map(opt => (
                                        <button
                                            key={opt}
                                            type="button"
                                            onClick={() => update('pain', opt)}
                                            className={cn(
                                                "px-5 py-2.5 rounded-xl text-sm font-bold transition-all border",
                                                form.pain === opt ? "bg-primary border-primary text-white" : "bg-white/5 border-white/10 text-white/60 hover:border-white/20"
                                            )}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full h-16 bg-white text-bg-dark rounded-2xl font-bold text-lg hover:bg-white/90 transition-all flex items-center justify-center gap-2 group"
                            >
                                <Sparkles className="group-hover:rotate-12 transition-transform" />
                                {loading ? 'Submitting...' : 'Join Waitlist (30% Off Lifetime)'}
                            </button>

                            <p className="text-center text-xs text-white/30 font-medium">
                                Joining the waitlist does not require a credit card. No spam, ever.
                            </p>
                        </form>
                    </div>
                ) : (
                    <div className="max-w-2xl mx-auto text-center py-10">
                        <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6 text-success animate-scale-in">
                            <BadgeCheck size={40} />
                        </div>
                        <h2 className="text-4xl font-extrabold mb-4">Welcome to the Future, {form.name}!</h2>
                        <p className="text-white/60 text-lg mb-10">
                            We've received your submission. 🚀 Want to skip the line? <br />
                            Refer 3 other agents and get instant early access plus 50% off.
                        </p>

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 max-w-lg mx-auto">
                            <h4 className="flex items-center justify-center gap-2 font-bold mb-4">
                                <UsersRound size={18} /> Referral Link
                            </h4>
                            <div className="flex items-center gap-2 bg-white/5 rounded-2xl p-2 border border-white/10">
                                <code className="flex-1 text-sm font-mono text-primary truncate pl-4">DealDoc.ai/ref/abc123</code>
                                <button
                                    onClick={() => navigator.clipboard.writeText('DealDoc.ai/ref/abc123')}
                                    className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all"
                                >
                                    <Copy size={18} />
                                </button>
                            </div>
                            <div className="mt-6 flex items-center justify-between text-sm font-bold text-white/40 px-2">
                                <span>Refers: 0/3</span>
                                <span>Rank: #{count.toLocaleString()}</span>
                            </div>
                            <div className="mt-3 h-2 bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-primary w-[10%] rounded-full" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
