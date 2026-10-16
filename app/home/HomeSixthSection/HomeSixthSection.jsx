'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import './homeSixthSection.scss';
import { SplitH2, SplitP } from '@/app/components';
import Link from 'next/link';

export const HomeSixthSection = () => {
    const contentRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const media = gsap.matchMedia();

        media.add('(prefers-reduced-motion: no-preference)', () => {
            gsap.fromTo(imageRef.current, { yPercent: -8 }, {
                yPercent: 8,
                ease: 'none',
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            });
        });

        return () => media.revert();
    }, []);

    return <section id='homeSixthSection'>
        <div id='homeSixthSectionContent' ref={contentRef}>
            <div className='homeSixthSectionImage'>
                <Image ref={imageRef} src={'/home/homeSixthSection.png'} alt='Grupo Planificando' height={500} width={500} />
            </div>

            <div className='homeSixthSectionText'>
                <SplitH2 id={'homeSixthSectionTitle'}>
                    Más de 30 años comprometidos con el desarrollo y la seguridad.
                </SplitH2>

                <SplitP id={'homeSixthSectionText'}>
                    Perseguimos la evolución de los cuidados críticos junto a la vía más rápida y confiable para llevarlos a cabo.
                </SplitP>
                <SplitP id={'homeSixthSectionText'}>
                    Pertenecemos al comité de normas IRAM.
                </SplitP>
                <SplitP id={'homeSixthSectionText'}>
                    Nuestro conocimiento colabora con el sistema de salud del país.
                </SplitP>

                <Link href={'/'} className='buttonContacto'>Quiénes somos</Link>
            </div>
        </div>
    </section>
}
