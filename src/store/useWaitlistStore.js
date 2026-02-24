import { create } from 'zustand';

const API_URL = "https://script.google.com/macros/s/AKfycbx-bN2ZKf6gYfM5RO_iGExmOCn9bWuInoQ73Rzoi03gSLfVz_VLknKP6lgUpXCqJWfQ/exec";

/**
 * @intent Global store for waitlist count to share live updates across components
 */
export const useWaitlistStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    fetchCount: () => {
        const script = document.createElement("script");
        script.src = `${API_URL}?action=getCount&callback=__handleWaitlistCount&_t=${Date.now()}`;
        document.body.appendChild(script);
        document.body.removeChild(script); // cleanup
    }
}));

// Global callback for JSONP
window.__handleWaitlistCount = (data) => {
    console.log("JSONP count received:", data);
    if (data && typeof data.count === 'number') {
        useWaitlistStore.setState({ count: data.count });
    } else {
        console.error("JSONP Count data invalid or missing", data);
    }
};
