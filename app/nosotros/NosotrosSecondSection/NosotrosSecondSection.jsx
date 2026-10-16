
'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitH2, SplitH3, SplitP } from '@/app/components';
import './nosotrosSecondSection.scss';

export const NosotrosSecondSection = () => {
    const cardsRef = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const media = gsap.matchMedia();

        media.add('(prefers-reduced-motion: no-preference)', () => {
            const cards = cardsRef.current.querySelectorAll(':scope > article');

            // Inicializa todas las cards antes de aplicar los retrasos del stagger.
            gsap.set(cards, {
                y: (index) => 72 + index * 24,
                scale: 0.9,
                autoAlpha: 0,
            });

            gsap.to(cards, {
                y: 0,
                scale: 1,
                autoAlpha: 1,
                ease: 'none',
                duration: 1,
                stagger: 0.18,
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: 'top 85%',
                    end: 'bottom 85%',
                    scrub: 0.8,
                },
            });
        });

        return () => media.revert();
    }, []);

    return <section id='nosotrosSecondSection'>
        <div>
            <div>
                <SplitH2 id='nosotrosSecondSectionTitle'>
                    Tecnología para entornos de alto impacto.
                </SplitH2>
            </div>

            <div>
                <SplitP id='nosotrosSecondSectionP1'>
                    Como en toda red, NODO es un punto de unión. Implementamos sistemas de gases medicinales, llamados de enfermería, puertas automáticas y correo neumático.
                </SplitP>
                <SplitP id='nosotrosSecondSectionP2'>
                    Nuestro trabajo abarca diseño, planificación, fabricación, provisión y servicio técnico como prestaciones independientes o integradas a un mismo proyecto, según las necesidades de cada institución.
                </SplitP>
                <SplitP id='nosotrosSecondSectionP3'>
                    Desde 2014 estamos al servicio de infraestructuras civiles, industriales y hospitalarias.
                </SplitP>
                <SplitP id='nosotrosSecondSectionP4'>
                    Desarrollamos nuestro equipamiento bajo criterios de calidad y seguridad, con aprobación de ANMAT y certificaciones del INTI.
                </SplitP>
            </div>
        </div>

        <div ref={cardsRef}>
            <article>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 2.5H18C18.8239 2.5 19.5 3.17614 19.5 4V21C19.5 21.1594 19.4271 21.3058 19.3047 21.4004L19.2432 21.4414C19.1833 21.4774 19.105 21.5 19 21.5C18.895 21.5 18.8167 21.4774 18.7568 21.4414L18.748 21.4365L12.248 17.7158L12 17.5742L11.752 17.7158L5.25195 21.4365L5.24902 21.4375C5.09427 21.5274 4.90573 21.5274 4.75098 21.4375C4.5955 21.3472 4.5 21.1822 4.5 21V4C4.5 3.17614 5.17614 2.5 6 2.5Z" stroke="black" />
                    <path d="M13.08 8.4L12 6L10.92 8.4L8.4 8.6L10.4 10.4L9.6 13.2L12 11.6L14.4 13.2L13.6 10.4L15.6 8.6L13.08 8.4Z" stroke="black" />
                </svg>

                <SplitH3 id='nosotrosSecondSectionCardTitle1'>+30</SplitH3>
                <SplitP id='nosotrosSecondSectionCardP1'>Años de experiencia profesional</SplitP>
            </article>
            <article>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.87878 17.5406L11.5396 22.9998L21.2004 17.5406L11.5396 11.9941L1.87878 17.5406ZM1.87878 17.5406L11.5396 11.9941" stroke="#1C1C1C" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1.87878 6.55566V17.5408" stroke="#1C1C1C" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21.2122 6.55566L21.2122 17.4446" stroke="#1C1C1C" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.5396 1L1.87878 6.54643L11.5396 12.0057L21.2004 6.54643L11.5396 1ZM11.5396 1L1.87878 6.54643" stroke="#1C1C1C" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.4349 1L11.4349 23" stroke="#1C1C1C" strokeLinecap="round" strokeLinejoin="round" />
                </svg>


                <SplitH3 id='nosotrosSecondSectionCardTitle2'>+400</SplitH3>
                <SplitP id='nosotrosSecondSectionCardP2'>Proyectos ejecutados</SplitP>
            </article>
            <article>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_527_3078)">
                        <path d="M11.124 0.5H12.877C13.4419 0.5 13.9002 0.957559 13.9004 1.52246C13.9004 2.45396 14.5344 3.21346 15.3379 3.53125C15.4341 3.56964 15.5292 3.61069 15.624 3.65234L15.626 3.65332C16.4189 3.99762 17.403 3.91004 18.0645 3.24902L18.0654 3.25C18.2573 3.05854 18.517 2.95028 18.7881 2.9502C19.0593 2.9502 19.3198 3.05847 19.5117 3.25V3.24902L20.752 4.48926C20.9435 4.68123 21.0508 4.94172 21.0508 5.21289C21.0508 5.48403 20.9435 5.74457 20.752 5.93652C20.0924 6.59774 20.0049 7.58237 20.3477 8.37402L20.3486 8.375C20.3901 8.47024 20.4296 8.56648 20.4678 8.66309C20.7854 9.46662 21.5444 10.1016 22.4775 10.1016C23.0424 10.1017 23.5 10.5591 23.5 11.124V12.877C23.5 13.4419 23.0424 13.9002 22.4775 13.9004C21.5453 13.9004 20.7866 14.5336 20.4697 15.3369C20.4311 15.4338 20.3912 15.5296 20.3496 15.624L20.3486 15.626C20.0258 16.3695 20.0816 17.2814 20.6348 17.9375L20.752 18.0654C20.9432 18.2573 21.0507 18.5172 21.0508 18.7881C21.0508 19.0254 20.9683 19.2544 20.8193 19.4365L20.752 19.5117L19.5117 20.752C19.3198 20.9437 19.0594 21.0517 18.7881 21.0518C18.5506 21.0518 18.3218 20.9684 18.1396 20.8193L18.0645 20.752C17.405 20.0925 16.4197 20.003 15.627 20.3486C15.5325 20.3894 15.4367 20.4289 15.3398 20.4668L15.3379 20.4678C14.5344 20.7854 13.9004 21.5445 13.9004 22.4775C13.9002 23.0424 13.4419 23.5 12.877 23.5H11.123C10.5581 23.5 10.0998 23.0424 10.0996 22.4775C10.0996 21.6028 9.54212 20.8807 8.80957 20.5332L8.66113 20.4688C8.56493 20.4304 8.46979 20.3909 8.37598 20.3496L8.37402 20.3486L8.22266 20.2891C7.50955 20.0354 6.67485 20.1185 6.0625 20.6348L5.93457 20.752C5.7427 20.9432 5.48284 21.0507 5.21191 21.0508C4.97462 21.0508 4.74558 20.9683 4.56348 20.8193L4.48828 20.752L3.24805 19.5117C3.05659 19.3198 2.94922 19.0592 2.94922 18.7881C2.9493 18.5172 3.05677 18.2573 3.24805 18.0654C3.90779 17.4041 3.995 16.4181 3.65039 15.626L3.5293 15.334C3.21175 14.532 2.45358 13.9004 1.52246 13.9004C0.957559 13.9002 0.5 13.4419 0.5 12.877V11.123C0.5 10.5581 0.957559 10.0998 1.52246 10.0996C2.45515 10.0996 3.21465 9.46601 3.53125 8.66211L3.65039 8.37402C3.97468 7.63018 3.91837 6.71857 3.36523 6.0625L3.24805 5.93457C3.05677 5.7427 2.9493 5.48284 2.94922 5.21191C2.94922 4.97462 3.03174 4.74558 3.18066 4.56348L3.24805 4.48828L4.48828 3.24805C4.68024 3.05659 4.94079 2.94922 5.21191 2.94922C5.48284 2.9493 5.7427 3.05677 5.93457 3.24805C6.55461 3.86658 7.45958 3.98164 8.22266 3.71094L8.37305 3.65234C8.46951 3.61067 8.56709 3.56949 8.66602 3.5293L8.66504 3.52832C9.46727 3.21089 10.0996 2.45378 10.0996 1.52246C10.0998 0.957816 10.5576 0.5 11.124 0.5Z" stroke="#1C1C1C" />
                        <path d="M11.9998 7.7002C13.1402 7.7002 14.2344 8.15355 15.0408 8.95996C15.847 9.76629 16.2996 10.8598 16.2996 12C16.2996 13.1404 15.8472 14.2346 15.0408 15.041C14.2344 15.8474 13.1402 16.2998 11.9998 16.2998C10.8596 16.2998 9.76611 15.8472 8.95978 15.041C8.15337 14.2346 7.70001 13.1404 7.70001 12C7.70006 10.8596 8.15342 9.76632 8.95978 8.95996C9.76614 8.1536 10.8595 7.70025 11.9998 7.7002Z" stroke="#1C1C1C" />
                    </g>
                    <defs>
                        <clipPath id="clip0_527_3078">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>


                <SplitH3 id='nosotrosSecondSectionCardTitle3'>+150K</SplitH3>
                <SplitP id='nosotrosSecondSectionCardP3'>Productos fabricados</SplitP>
            </article>
            <article>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.3421 23C20.7818 23 21.2035 22.8253 21.5144 22.5144C21.8253 22.2035 22 21.7818 22 21.3421V17.4737C22 17.034 21.8253 16.6123 21.5144 16.3014C21.2035 15.9905 20.7818 15.8158 20.3421 15.8158C19.0489 15.8158 17.7779 15.6168 16.5621 15.2079C16.2714 15.1161 15.9612 15.1058 15.665 15.1778C15.3689 15.2499 15.0981 15.4018 14.8821 15.6168L13.2905 17.2084C10.5409 15.7079 8.28101 13.4481 6.78053 10.6984L8.36105 9.11789C8.81421 8.68684 8.98 8.04579 8.78105 7.42684C8.38316 6.22211 8.18421 4.95105 8.18421 3.65789C8.18421 3.21819 8.00954 2.7965 7.69862 2.48559C7.38771 2.17467 6.96602 2 6.52632 2H2.65789C2.21819 2 1.7965 2.17467 1.48559 2.48559C1.17467 2.7965 1 3.21819 1 3.65789C1 14.3237 9.67632 23 20.3421 23ZM2.65789 3.10526H6.52632C6.67288 3.10526 6.81345 3.16349 6.91709 3.26713C7.02072 3.37076 7.07895 3.51133 7.07895 3.65789C7.07895 5.07263 7.3 6.45421 7.73105 7.76947C7.78632 7.92421 7.77526 8.14526 7.59842 8.32211L5.42105 10.4884C7.24474 14.0584 9.91947 16.7332 13.5005 18.5789L15.6558 16.4016C15.8105 16.2468 16.0205 16.2026 16.2195 16.2579C17.5458 16.7 18.9274 16.9211 20.3421 16.9211C20.4887 16.9211 20.6292 16.9793 20.7329 17.0829C20.8365 17.1866 20.8947 17.3271 20.8947 17.4737V21.3421C20.8947 21.4887 20.8365 21.6292 20.7329 21.7329C20.6292 21.8365 20.4887 21.8947 20.3421 21.8947C10.2842 21.8947 2.10526 13.7158 2.10526 3.65789C2.10526 3.51133 2.16349 3.37076 2.26713 3.26713C2.37076 3.16349 2.51133 3.10526 2.65789 3.10526Z" fill="#1C1C1C" />
                </svg>


                <SplitH3 id='nosotrosSecondSectionCardTitle4'>+25</SplitH3>
                <SplitP id='nosotrosSecondSectionCardP4'>Hospitales en mantenimiento</SplitP>
            </article>
        </div>
    </section>
}
