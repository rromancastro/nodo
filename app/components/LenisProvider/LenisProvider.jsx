'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const LenisProvider = ({ children }) => {
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

            const update = (time) => lenis.raf(time * 1000);
            lenis.on('scroll', ScrollTrigger.update);
            gsap.ticker.add(update);
            gsap.ticker.lagSmoothing(0);

            return () => {
                gsap.ticker.remove(update);
                lenis.off('scroll', ScrollTrigger.update);
                lenis.destroy();
            };
        });

        return () => media.revert();
    }, []);

    return children;
};
