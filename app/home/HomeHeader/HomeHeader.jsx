'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ButtonContacto } from '@/app/components';
import './homeHeader.scss';

export const HomeHeader = () => {
    const sectionRef = useRef(null);
    const panelRef = useRef(null);
    const articleRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const media = gsap.matchMedia();

        media.add('(prefers-reduced-motion: no-preference)', () => {
            const topGap = 72; // Margen superior final en px: ajustalo aca.
            const bottomGap = 16;
            const articleOffset = 30; // Desplazamiento inicial hacia abajo en px.

            const timeline = gsap.timeline({
                defaults: { ease: 'none', duration: 1 },
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: true,
                    invalidateOnRefresh: true,
                },
            });

            timeline.fromTo(panelRef.current, {
                width: '100%',
                height: '100%',
                y: 0,
            }, {
                width: () => `calc(100% - 32px)`,
                height: `calc(100% - ${topGap + bottomGap}px)`,
                y: topGap,
            }, 0);

            timeline.fromTo(articleRef.current, {
                autoAlpha: 0,
                y: articleOffset,
            }, {
                autoAlpha: 1,
                y: 0,
            }, 0);
        });

        return () => media.revert();
    }, []);

    return <header id='homeHeader' ref={sectionRef}>
        <div className='homeHeaderSticky'>
        <div className='homeHeaderPanel' ref={panelRef}>
            <video src='/home/homeHeader.mp4' className='homeHeaderVideo' muted autoPlay playsInline loop />
            <h1>Equipamiento médico y sistemas técnicos.</h1>
            <article ref={articleRef}>
                <div>
                    <p className='color-black'>Somos el único proveedor en implementar redes de gases medicinales, llamados de enfermería, puertas automáticas y correo neumático de manera conjunta.</p>
                    <ButtonContacto>
                        Contacto
                    </ButtonContacto>
                </div>
            </article>
        </div>
        </div>
    </header>
}
