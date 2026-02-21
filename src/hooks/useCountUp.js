import { useEffect, useRef, useState } from 'react';

/**
 * @intent Animated counter that counts up from 0 to target when visible
 * @param {number} target - The end number
 * @param {number} duration - Animation duration in ms
 * @param {string} prefix - Text before number (e.g. '$')
 * @param {string} suffix - Text after number (e.g. '/mo')
 * @returns {{ ref: React.RefObject, displayValue: string }}
 */
export function useCountUp(target, duration = 2000, prefix = '', suffix = '') {
    const ref = useRef(null);
    const [value, setValue] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                    observer.unobserve(node);
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        const startTime = Date.now();
        const startValue = value; // Capture the current value to animate from
        const step = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);

            // Calculate distance between new target and old value
            const delta = target - startValue;
            setValue(Math.floor(startValue + eased * delta));

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };
        requestAnimationFrame(step);
    }, [hasStarted, target, duration]);

    const formatted = typeof target === 'number' && target >= 1000
        ? value.toLocaleString()
        : value;

    return { ref, displayValue: `${prefix}${formatted}${suffix}` };
}
