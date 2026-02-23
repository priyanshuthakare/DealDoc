import { BadgeCheck, CalendarClock, FileSignature, Send, Waypoints } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { cn } from '../lib/utils';

const FEATURES = [
    {
        Icon: FileSignature,
        title: 'Instant Contract Audits',
        description: 'Upload a purchase agreement and get a full review in seconds. DealDoc identifies missing signatures, mismatched dates, and compliance gaps before they become problems.',
        bullets: ['Flags missing initials', 'Checks state compliance', 'Extracts key dates'],
        image: '/Instant Contract Audits.png'
    },
    {
        Icon: CalendarClock,
        title: 'Deadline Tracking',
        description: 'Every critical date — inspection periods, contingency removals, loan milestones — is automatically tracked with smart reminders.',
        bullets: ['Auto-generates checklists', 'Syncs with your calendar', 'Multi-channel alerts'],
        image: '/Deadline Tracking.png'
    },
    {
        Icon: Send,
        title: 'Draft Emails Automatically',
        description: 'DealDoc drafts polished, professional emails for you — from status updates to missing documentation requests. Just review and send.',
        bullets: ['Maintains your tone', 'Handles follow-ups', 'One-click send'],
        image: '/Draft Emails Automatically.png'
    },
    {
        Icon: Waypoints,
        title: 'Seamless Workflow',
        description: 'Choose from pre-built state templates or customize your own. DealDoc builds your entire transaction roadmap instantly.',
        bullets: ['15+ transaction templates', 'Team collaboration', 'Full audit trail'],
        image: '/Seamless Workflow.png'
    },
];

/**
 * @intent 4 feature pillar sections with alternating layout and simple bullet points
 */
export default function Features() {
    const { ref, isVisible } = useScrollReveal(0.1);

    return (
        <section id="features" ref={ref} className="section-padding bg-bg-light">
            <div className="container-max">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight">
                        Everything a $500/deal TC Does, <br />
                        <span className="gradient-text">At a Fraction of the Cost</span>
                    </h2>
                </div>

                <div className="space-y-32">
                    {FEATURES.map((feature, i) => (
                        <div
                            key={feature.title}
                            className={cn(
                                "flex flex-col gap-12 items-center transition-all duration-1000",
                                i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row",
                                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                            )}
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            <div className="flex-1">
                                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                                    <feature.Icon size={28} />
                                </div>
                                <h3 className="text-3xl font-bold mb-6">{feature.title}</h3>
                                <p className="text-lg text-text-secondary leading-relaxed mb-8">
                                    {feature.description}
                                </p>
                                <ul className="space-y-4">
                                    {feature.bullets.map(bullet => (
                                        <li key={bullet} className="flex items-center gap-3 text-text-primary font-medium">
                                            <BadgeCheck size={18} className="text-primary" />
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex-1 w-full">
                                <div className="aspect-video rounded-[32px] overflow-hidden card-shadow border border-primary/10 relative group">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
