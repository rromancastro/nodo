'use client';

import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PreserveScrollContext = createContext(null);

export const usePreserveScroll = () => useContext(PreserveScrollContext);

export const LenisProvider = ({ children }) => {
    const pathname = usePathname();
    const lenisRef = useRef(null);
    const preserveScrollPath = useRef(null);
    const preserveScroll = useCallback((href) => {
        preserveScrollPath.current = new URL(href, window.location.href).pathname;
    }, []);

    useLayoutEffect(() => {
        // Only the next navigation requested by the carousel keeps its position.
        const shouldPreserve = preserveScrollPath.current === pathname;
        preserveScrollPath.current = null;
        if (shouldPreserve) return;

        // Let hash links keep their destination within the new page.
        if (window.location.hash) return;

        const resetScroll = () => {
            if (lenisRef.current) {
                lenisRef.current.resize();
                lenisRef.current.scrollTo(0, { immediate: true, force: true });
            } else {
                window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            }
        };

        resetScroll();
        // Synchronize after Next has applied its own navigation scroll handling.
        const frame = window.requestAnimationFrame(resetScroll);
        return () => window.cancelAnimationFrame(frame);
    }, [pathname]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const media = gsap.matchMedia();

        media.add('(prefers-reduced-motion: no-preference)', () => {
            const lenis = new Lenis({
                autoRaf: false,
                lerp: 0.1,
                smoothWheel: true,
                anchors: true,
            });
            lenisRef.current = lenis;

            const update = (time) => lenis.raf(time * 1000);
            lenis.on('scroll', ScrollTrigger.update);
            gsap.ticker.add(update);
            gsap.ticker.lagSmoothing(0);

            return () => {
                lenisRef.current = null;
                gsap.ticker.remove(update);
                lenis.off('scroll', ScrollTrigger.update);
                lenis.destroy();
            };
        });

        return () => media.revert();
    }, []);

    return <PreserveScrollContext.Provider value={preserveScroll}>{children}</PreserveScrollContext.Provider>;
};
