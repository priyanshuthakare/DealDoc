import { Flame } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';
import { useWaitlistStore } from '../store/useWaitlistStore';

/**
 * @intent Sticky top gradient banner for urgency
 */
export default function AnnouncementBar() {
    const count = useWaitlistStore((state) => state.count);
    const { ref: agentsRef, displayValue: agentsValue } = useCountUp(count, 1500, '', '+');
    return (
        <div className="w-full bg-bg-dark text-white overflow-hidden relative border-b border-white/10 z-[60]">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-subtle-shimmer" />
            <div className="container-max py-2.5 relative z-10">
                <div className="flex items-center justify-center gap-2.5 text-xs font-bold tracking-wider uppercase">
                    <Flame size={14} className="text-primary animate-bounce-gentle" />
                    <span ref={agentsRef}>🚀 {agentsValue} agents joined the waitlist this week. <span className="text-primary">Secure your spot now!</span></span>
                    <a href="#waitlist" className="ml-4 px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full transition-all border border-white/20 capitalize tracking-normal">
                        Join Waitlist
                    </a>
                </div>
            </div>
        </div>
    );
}
