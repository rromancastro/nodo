'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitH2, SplitH3, SplitP } from '@/app/components';
import './homeSecondSection.scss';

export const HomeSecondSection = () => {
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

    return <section id='homeSecondSection'>
        <div>
            <div>
                <SplitH2 id='homeSecondSectionTitle'>
                    La integración justa. Nodo es un punto de unión estratégico.
                </SplitH2>
                <SplitH3 id='homeSecondSectionSubtitle'>
                    Equipamiento y aparatología médica de industria nacional. Tecnologías de automatización.
                </SplitH3>
            </div>

            <div>
                <SplitP id='homeSecondSectionP1'>
                    Un nodo vincula distintos elementos para hacer posible el funcionamiento de un sistema. Tomando esta perspectiva como emblema, formamos un equipo de ingenieros y técnicos con el propósito de desarrollar entornos más eficientes y seguros.
                </SplitP>
                <SplitP id='homeSecondSectionP2'>
                    Nodo es para nosotros, y para las instituciones con las que trabajamos, un nexo necesario entre espacios, sistemas e instalaciones. Integramos planificación, equipamiento y servicio técnico en un mismo proyecto que abarca redes de gases medicinales, llamados de enfermería, puertas automáticas y correo neumático.
                </SplitP>
                <SplitP id='homeSecondSectionP3'>
                    El resultado: infraestructuras inteligentes, preparadas para responder a las exigencias de cada entorno.
                </SplitP>
            </div>
        </div>

        <div ref={cardsRef}>
            <article>
                <p>001</p>
                <svg width="129" height="104" viewBox="0 0 129 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.791748 98.5931L63.5403 66.7332V0.918823" stroke="#6A6868" strokeWidth="1.2" strokeMiterlimit="10" />
                    <path d="M127.538 98.593L63.5404 66.7332" stroke="#6A6868" strokeWidth="1.2" strokeMiterlimit="10" />
                    <path d="M90.2656 89.3065L54.7835 71.1323" stroke="#6A6868" strokeWidth="1.2" strokeMiterlimit="10" />
                    <path d="M81.3621 93.8055L45.8852 75.6313" stroke="#6A6868" strokeWidth="1.2" strokeMiterlimit="10" />
                    <path d="M72.4385 98.3569L36.9617 80.1827" stroke="#6A6868" strokeWidth="1.2" strokeMiterlimit="10" />
                    <path d="M36.9617 89.3065L72.4385 71.1323" stroke="#6A6868" strokeWidth="1.2" strokeMiterlimit="10" />
                    <path d="M45.8599 93.8055L81.342 75.6313" stroke="#6A6868" strokeWidth="1.2" strokeMiterlimit="10" />
                    <path d="M54.7835 98.3569L90.2656 80.1827" stroke="#6A6868" strokeWidth="1.2" strokeMiterlimit="10" />
                    <path d="M99.5683 84.5398L63.6873 102.919H63.5403L28.0634 84.7445" stroke="#6A6868" strokeWidth="1.2" strokeMiterlimit="10" />
                    <path d="M66.6793 4.5568L63.54 0.918823L60.406 4.5568" stroke="#6A6868" strokeWidth="1.2" strokeMiterlimit="10" />
                    <path d="M2.33513 94.047L0.791748 98.5984L5.52165 99.4541" stroke="#6A6868" strokeWidth="1.2" strokeMiterlimit="10" />
                    <path d="M125.995 94.0416L127.539 98.593L122.809 99.4435" stroke="#6A6868" strokeWidth="1.2" strokeMiterlimit="10" />
                </svg>
                <SplitH3 id='secondSectionCardTitle1'>Diseñamos y fabricamos</SplitH3>
                <SplitP id='secondSectionCardP1'>Equipamiento técnico para el correcto funcionamiento de las grandes estructuras del país.</SplitP>
            </article>
            <article>
                <p>002</p>
                <svg width="89" height="104" viewBox="0 0 89 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.600098 78.0333L44.0746 102.6L87.549 78.0333L44.0746 53.0743L0.600098 78.0333ZM0.600098 78.0333L44.0746 53.0743" stroke="#6A6868" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M0.600098 25.5588V78.0333" stroke="#6A6868" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M87.5494 25.5588V78.0333" stroke="#6A6868" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M44.0746 0.599976L0.600098 25.5589L44.0746 50.1255L87.549 25.5589L44.0746 0.599976ZM44.0746 0.599976L0.600098 25.5589" stroke="#6A6868" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M0.600098 36.0539L44.0746 11.095L87.549 36.0539L44.0746 60.6204L0.600098 36.0539ZM0.600098 36.0539L44.0746 11.095" stroke="#6A6868" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M0.600098 46.5488L44.0746 21.5898L87.549 46.5488L44.0746 71.1153L0.600098 46.5488ZM0.600098 46.5488L44.0746 21.5898" stroke="#6A6868" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M0.600098 57.0438L44.0746 32.0848L87.549 57.0438L44.0746 81.6103L0.600098 57.0438ZM0.600098 57.0438L44.0746 32.0848" stroke="#6A6868" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M0.600098 67.5388L44.0746 42.5798L87.549 67.5388L44.0746 92.1053L0.600098 67.5388ZM0.600098 67.5388L44.0746 42.5798" stroke="#6A6868" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M44.0748 0.599976L43.9466 60.525" stroke="#6A6868" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M44.0748 60.6204V102.6" stroke="#6A6868" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <SplitH3 id='secondSectionCardTitle2'>Proyectamos</SplitH3>
                <SplitP id='secondSectionCardP2'>Asesoramiento y planificación de la obra, redacción de pliegos y memorias de cálculo para su ejecución.</SplitP>
            </article>
            <article>
                <p>003</p>
                <svg width="100" height="97" viewBox="0 0 100 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.59998 57.6C8.3614 57.6 10.6 55.3614 10.6 52.6C10.6 49.8386 8.3614 47.6 5.59998 47.6C2.83855 47.6 0.599976 49.8386 0.599976 52.6C0.599976 55.3614 2.83855 57.6 5.59998 57.6Z" stroke="#6A6868" strokeWidth="1.2" strokeMiterlimit="10" />
                    <path d="M23.1 57.6C26.1375 57.6 28.6 55.3614 28.6 52.6C28.6 49.8386 26.1375 47.6 23.1 47.6C20.0624 47.6 17.6 49.8386 17.6 52.6C17.6 55.3614 20.0624 57.6 23.1 57.6Z" stroke="#6A6868" strokeWidth="1.2" strokeMiterlimit="10" />
                    <path d="M40.6 57.6C43.3614 57.6 45.6 55.3614 45.6 52.6C45.6 49.8386 43.3614 47.6 40.6 47.6C37.8386 47.6 35.6 49.8386 35.6 52.6C35.6 55.3614 37.8386 57.6 40.6 57.6Z" stroke="#6A6868" strokeWidth="1.2" strokeMiterlimit="10" />
                    <path d="M58.1 57.6C61.1375 57.6 63.6 55.3614 63.6 52.6C63.6 49.8386 61.1375 47.6 58.1 47.6C55.0624 47.6 52.6 49.8386 52.6 52.6C52.6 55.3614 55.0624 57.6 58.1 57.6Z" stroke="#6A6868" strokeWidth="1.2" strokeMiterlimit="10" />
                    <path d="M75.6 57.6C78.3614 57.6 80.6 55.3614 80.6 52.6C80.6 49.8386 78.3614 47.6 75.6 47.6C72.8386 47.6 70.6 49.8386 70.6 52.6C70.6 55.3614 72.8386 57.6 75.6 57.6Z" stroke="#6A6868" strokeWidth="1.2" strokeMiterlimit="10" />
                    <path d="M93.1 57.6C96.1375 57.6 98.6 55.3614 98.6 52.6C98.6 49.8386 96.1375 47.6 93.1 47.6C90.0624 47.6 87.6 49.8386 87.6 52.6C87.6 55.3614 90.0624 57.6 93.1 57.6Z" stroke="#6A6868" strokeWidth="1.2" strokeMiterlimit="10" />
                    <path d="M40.6 47.6C40.6 47.6 39.9468 16.6 23.1 16.6C6.25318 16.6 5.59998 47.6 5.59998 47.6C5.59998 47.6 6.12746 31.7009 13.9742 31.7009C21.8209 31.7009 23.1 47.6 23.1 47.6" stroke="#6A6868" strokeWidth="1.2" strokeMiterlimit="10" />
                    <path d="M75.6 47.6C75.6 47.6 76.1425 31.6 84.2134 31.6C92.2843 31.6 93.6 47.6 93.6 47.6" stroke="#6A6868" strokeWidth="1.2" strokeMiterlimit="10" />
                    <path d="M57.6 57.6C57.6 57.6 57.0876 73.6 49.465 73.6C41.8425 73.6 40.6 57.6 40.6 57.6" stroke="#6A6868" strokeWidth="1.2" strokeMiterlimit="10" />
                    <path d="M58.6 47.6C58.6 47.6 57.0741 0.599976 31.126 0.599976C8.3151 0.599976 5.59998 47.6 5.59998 47.6" stroke="#6A6868" strokeWidth="1.2" strokeMiterlimit="10" />
                    <path d="M22.6 57.6C22.6 57.6 24.1258 95.6 50.0753 95.6C72.8822 95.6 75.6 57.6 75.6 57.6" stroke="#6A6868" strokeWidth="1.2" strokeMiterlimit="10" />
                </svg>

                <SplitH3 id='secondSectionCardTitle3'>Instalamos</SplitH3>
                <SplitP id='secondSectionCardP3'>Además, ofrecemos productos estándar y adaptables a cada establecimiento en caso de requerir provisión de equipos.</SplitP>
            </article>
            <article>
                <p>004</p>
                <svg width="104" height="94" viewBox="0 0 104 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.4116 46.8957C24.4116 32.8428 21.1223 21.4507 17.0647 21.4507C13.0071 21.4507 9.71777 32.8428 9.71777 46.8957C9.71777 60.9486 13.0071 72.3407 17.0647 72.3407C21.1223 72.3407 24.4116 60.9486 24.4116 46.8957Z" stroke="#6A6868" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M29.4853 46.8957C29.4853 35.5114 26.8208 26.2826 23.5341 26.2826C20.2473 26.2826 17.5829 35.5114 17.5829 46.8957C17.5829 58.2801 20.2473 67.5089 23.5341 67.5089C26.8208 67.5089 29.4853 58.2801 29.4853 46.8957Z" stroke="#6A6868" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M34.9127 46.8959C34.9127 38.3131 32.9032 31.3554 30.4245 31.3554C27.9457 31.3554 25.9363 38.3131 25.9363 46.8959C25.9363 55.4787 27.9457 62.4364 30.4245 62.4364C32.9032 62.4364 34.9127 55.4787 34.9127 46.8959Z" stroke="#6A6868" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M41.0179 46.7754C41.0179 41.3718 39.7523 36.9913 38.1911 36.9913C36.6299 36.9913 35.3643 41.3718 35.3643 46.7754C35.3643 52.179 36.6299 56.5594 38.1911 56.5594C39.7523 56.5594 41.0179 52.179 41.0179 46.7754Z" stroke="#6A6868" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M44.7804 46.8001C44.7804 43.3001 43.9604 40.4628 42.949 40.4628C41.9375 40.4628 41.1176 43.3001 41.1176 46.8001C41.1176 50.3001 41.9375 53.1375 42.949 53.1375C43.9604 53.1375 44.7804 50.3001 44.7804 46.8001Z" stroke="#6A6868" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M0.599976 46.8497L102.599 46.8497" stroke="#6A6868" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.2426 48.3165L0.599976 46.85L3.2426 45.4791" stroke="#6A6868" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M0.599976 46.8497L102.599 46.8497" stroke="#6A6868" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.2426 48.3165L0.599976 46.85L3.2426 45.4791" stroke="#6A6868" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M99.9574 45.4791L102.6 46.9456L99.9574 48.3165" stroke="#6A6868" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M39.2968 93.0992L63.9907 0.625062" stroke="#6A6868" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M39.2968 93.0992L63.9907 0.625062" stroke="#6A6868" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M38.5637 90.1661L39.297 93.0992L41.3055 90.8994" stroke="#6A6868" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M64.6322 3.53381L63.8989 0.600723L61.8939 2.80054" stroke="#6A6868" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M39.2967 0.600198L63.9907 93.0743" stroke="#6A6868" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M39.2967 0.600198L63.9907 93.0743" stroke="#6A6868" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M38.5637 3.53381L39.297 0.600723L41.3055 2.80054" stroke="#6A6868" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M64.6322 90.1661L63.8989 93.0992L61.8939 90.8994" stroke="#6A6868" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18.369 71.9476L51.6532 46.8391L17.8447 21.4508" stroke="#6A6868" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M93.5313 46.8957C93.5313 32.8428 90.242 21.4507 86.1844 21.4507C82.1268 21.4507 78.8375 32.8428 78.8375 46.8957C78.8375 60.9486 82.1268 72.3407 86.1844 72.3407C90.242 72.3407 93.5313 60.9486 93.5313 46.8957Z" stroke="#6A6868" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M85.6674 46.8957C85.6674 35.5114 83.003 26.2826 79.7162 26.2826C76.4295 26.2826 73.765 35.5114 73.765 46.8957C73.765 58.2801 76.4295 67.5089 79.7162 67.5089C83.003 67.5089 85.6674 58.2801 85.6674 46.8957Z" stroke="#6A6868" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M77.3134 46.8959C77.3134 38.3131 75.304 31.3554 72.8252 31.3554C70.3465 31.3554 68.337 38.3131 68.337 46.8959C68.337 55.4787 70.3465 62.4364 72.8252 62.4364C75.304 62.4364 77.3134 55.4787 77.3134 46.8959Z" stroke="#6A6868" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M67.884 47.0161C67.884 41.6125 66.6184 37.232 65.0572 37.232C63.496 37.232 62.2303 41.6125 62.2303 47.0161C62.2303 52.4197 63.496 56.8002 65.0572 56.8002C66.6184 56.8002 67.884 52.4197 67.884 47.0161Z" stroke="#6A6868" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M62.1349 46.9953C62.1349 43.4953 61.3149 40.658 60.3035 40.658C59.292 40.658 58.472 43.4953 58.472 46.9953C58.472 50.4953 59.292 53.3326 60.3035 53.3326C61.3149 53.3326 62.1349 50.4953 62.1349 46.9953Z" stroke="#6A6868" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M84.8842 21.8474L51.6 46.9559L85.4049 72.3442" stroke="#6A6868" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <SplitH3 id='secondSectionCardTitle4'>Mantenemos</SplitH3>
                <SplitP id='secondSectionCardP4'>Guardias técnicas 24hs y soporte posventa para que cada instalación opere al 100%.</SplitP>
            </article>
        </div>
    </section>
}
