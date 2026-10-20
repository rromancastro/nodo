'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import './parallaxImage.scss';

export const ParallaxImage = ({ src, alt, className = '' }) => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const media = gsap.matchMedia();

        media.add('(prefers-reduced-motion: no-preference)', () => {
            gsap.fromTo(imageRef.current, { yPercent: -8 }, {
                yPercent: 8,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            });
        });

        return () => media.revert();
    }, []);

    return <div ref={containerRef} className={`parallaxImage ${className}`}>
        <Image priority unoptimized ref={imageRef} src={src} alt={alt} width={1000} height={1000} />
    </div>;
};
