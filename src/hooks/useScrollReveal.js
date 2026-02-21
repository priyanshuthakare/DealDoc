import { useEffect, useRef, useState } from 'react';

/**
 * @intent Custom hook for scroll-triggered visibility via IntersectionObserver
 * @param {number} threshold - Visibility threshold (0–1), defaults to 0.15
 * @returns {{ ref: React.RefObject, isVisible: boolean }}
 */
export function useScrollReveal(threshold = 0.15) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(node);
                }
            },
            { threshold, rootMargin: '0px' }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [threshold]);

    return { ref, isVisible };
}
