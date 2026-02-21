import { create } from 'zustand';

/**
 * @intent Global store for waitlist count to share live updates across components
 */
export const useWaitlistStore = create((set) => ({
    count: 10,
    increment: () => set((state) => ({ count: state.count + 1 })),
}));
