'use client';

import { useEffect, useRef, useState } from 'react';
import { Carousel, SplitH2, SplitP } from '@/app/components';
import './homeThirdSection.scss';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
    { image: '/home/proyecto1.avif', name: 'Hospital Universitario Austral', period: '2022-2026', href: '/' },
    { image: '/home/proyecto2.avif', name: 'Hospital Fernández', period: '2025', href: '/' },
    { image: '/home/proyecto3.avif', name: 'Hospital Municipal Dr. Bernardo Houssay', period: '2025', href: '/' },
    { image: '/home/proyecto4.avif', name: 'Sanatorio Itoiz', period: '2024', href: '/' },
    { image: '/home/proyecto5.avif', name: 'Sanatorio Güemes', period: '2021', href: '/' },
    { image: '/home/proyecto6.avif', name: 'Hospital Municipal Santa Marina ', period: '2019', href: '/' },
];

export const HomeThirdSection = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [autoplayReset, setAutoplayReset] = useState(0);
    const mobileCarouselRef = useRef(null);

    useEffect(() => {
        const timeout = window.setTimeout(() => {
            const nextIndex = (selectedIndex + 1) % projects.length;
            const carousel = mobileCarouselRef.current;
            const nextCard = carousel?.querySelectorAll('.homeThirdSectionCard')[nextIndex];

            if (carousel?.clientWidth && nextCard) {
                carousel.scrollTo({
                    left: carousel.scrollLeft + nextCard.getBoundingClientRect().left
                        + nextCard.offsetWidth / 2 - carousel.getBoundingClientRect().left
                        - carousel.clientWidth / 2,
                    behavior: 'smooth',
                });
            }

            setSelectedIndex(nextIndex);
        }, 3000);

        return () => window.clearTimeout(timeout);
    }, [selectedIndex, autoplayReset]);

    const move = (direction) => {
        setSelectedIndex((index) => (index + direction + projects.length) % projects.length);
    };
    const updateMobileIndex = () => {
        const carousel = mobileCarouselRef.current;
        if (!carousel) return;

        const cards = carousel.querySelectorAll('.homeThirdSectionCard');
        if (!cards.length) return;

        const nearestIndex = Array.from(cards).reduce((nearest, card, index) => {
            const currentDistance = Math.abs(card.getBoundingClientRect().left + card.offsetWidth / 2 - carousel.getBoundingClientRect().left - carousel.clientWidth / 2);
            const nearestDistance = Math.abs(cards[nearest].getBoundingClientRect().left + cards[nearest].offsetWidth / 2 - carousel.getBoundingClientRect().left - carousel.clientWidth / 2);
            return currentDistance < nearestDistance ? index : nearest;
        }, 0);

        setSelectedIndex(nearestIndex);
    };
    return <section id='homeThirdSection'>
        <section>
            <div>
                <SplitH2 id="homeThirdSectionH2">
                    Proyectos
                </SplitH2>
                <SplitP id='homeThirdSectionP'>
                    Hemos trabajado para más de 20 instituciones, siendo parte de ellas, los principales referentes hospitalarios de Argentina.
                </SplitP>
                <Link href='/' className='buttonContacto'>Ver más</Link>
            </div>

            <div className='homeThirdSectionCarouselDesktop' role='region' aria-roledescription='carrusel' aria-label='Proyectos'>
                {projects.map((project, index) => {
                    const position = (index - selectedIndex + projects.length) % projects.length;
                    const isSelected = position === 0;
                    const cardClass = isSelected
                        ? ' homeThirdSectionCardSelected'
                        : position === 1 ? ' homeThirdSectionCardNext' : '';

                    return <article
                        key={index}
                        className={`homeThirdSectionCard${cardClass}`}
                        aria-hidden={!isSelected}
                        inert={!isSelected}
                        role='group'
                        aria-roledescription='diapositiva'
                        aria-label={`${index + 1} de ${projects.length}`}
                    >
                        <Image unoptimized src={project.image} alt={`Proyecto ${index + 1} — ${project.name}`} width={417} height={417} />
                        <div>
                            <p>
                                <span>{project.name}</span>
                                {project.period}
                            </p>
                            <Link href={project.href} className='buttonContacto'>Ver más</Link>
                        </div>
                    </article>;
                })}
                <div className='homeThirdSectionButtons'>
                    <button type='button' aria-label='Proyecto anterior' onClick={() => move(-1)}>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.5958 10.6299L0.527848 10.6299" stroke="#1C1C1C" strokeWidth="1.5" />
                            <path d="M10.7219 20.533L0.527743 10.63L10.7219 0.53296" stroke="#1C1C1C" strokeWidth="1.5" strokeLinejoin="bevel" />
                        </svg>
                    </button>
                    <button type='button' aria-label='Proyecto siguiente' onClick={() => move(1)}>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 10.4409L21.068 10.4409" stroke="#1C1C1C" strokeWidth="1.5" />
                            <path d="M10.8739 0.537842L21.0681 10.4408L10.8739 20.5378" stroke="#1C1C1C" strokeWidth="1.5" strokeLinejoin="bevel" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className='homeThirdSectionCarouselMobile'>
                <div
                    className='homeThirdSectionCarouselMobileImages'
                    ref={mobileCarouselRef}
                    onScroll={updateMobileIndex}
                    onPointerDown={() => setAutoplayReset((reset) => reset + 1)}
                    onWheel={() => setAutoplayReset((reset) => reset + 1)}
                    role='region'
                    aria-roledescription='carrusel'
                    aria-label='Proyectos'
                >
                    {projects.map((project, index) => {
                        return <article
                            key={index}
                            className={`homeThirdSectionCard${index === selectedIndex ? ' homeThirdSectionCardMobileSelected' : ''}`}
                        >
                            <Image src={project.image} alt={`Proyecto ${index + 1} — ${project.name}`} width={417} height={417} />
                            <div>
                                <p>
                                    <span>{project.name}</span>
                                    {project.period}
                                </p>
                                <Link href={project.href} className='buttonContacto'>Ver más</Link>
                            </div>
                        </article>;
                    })}
                </div>
                <div className='homeThirdSectionCarouselMobileIndex' aria-label='Índice de proyectos'>
                    {projects.map((project, index) => (
                        <div
                            key={project.name}
                            className={index === selectedIndex ? 'homeThirdSectionCarouselMobileIndexSelected' : ''}
                            aria-current={index === selectedIndex ? 'true' : undefined}
                        />
                    ))}
                </div>
            </div>
        </section>
        <Carousel />
    </section>
}

