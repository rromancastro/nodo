'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

export const ProyectoPageFourthSection = ({ proyecto } = {}) => {
    const projectImages = Array.isArray(proyecto?.imagenes) ? proyecto.imagenes : [];
    const carouselRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const updateSelectedIndex = () => {
        const carousel = carouselRef.current;
        if (!carousel || projectImages.length === 0) return;

        const cards = carousel.querySelectorAll('.proyectoPageFourthSectionCard');
        const carouselCenter = carousel.getBoundingClientRect().left + carousel.clientWidth / 2;
        const nearestIndex = Array.from(cards).reduce((nearest, card, index) => {
            const cardCenter = card.getBoundingClientRect().left + card.offsetWidth / 2;
            const nearestCardCenter = cards[nearest].getBoundingClientRect().left + cards[nearest].offsetWidth / 2;
            return Math.abs(cardCenter - carouselCenter) < Math.abs(nearestCardCenter - carouselCenter) ? index : nearest;
        }, 0);

        setSelectedIndex(nearestIndex);
    };

    if (projectImages.length === 0) return null;

    return <>
        <section
            className='proyectoPageFourthSection'
            ref={carouselRef}
            onScroll={updateSelectedIndex}
            role='region'
            aria-roledescription='carrusel'
            aria-label='Imágenes del proyecto'
        >
            {projectImages.map((src, index) => (
                <article
                    className='proyectoPageFourthSectionCard'
                    key={`${src}-${index}`}
                    role='group'
                    aria-roledescription='diapositiva'
                    aria-label={`${index + 1} de ${projectImages.length}`}
                >
                    <Image unoptimized src={src} alt={proyecto.institucion} width={500} height={500} />
                    <p>{proyecto.anio} · {proyecto.ubicacion}</p>
                </article>
            ))}
        </section>
        <div className='proyectoPageFourthSectionIndex' aria-label='Índice de imágenes del proyecto'>
            {projectImages.map((src, index) => (
                <div
                    key={`${src}-index-${index}`}
                    className={index === selectedIndex ? 'proyectoPageFourthSectionIndexSelected' : ''}
                    aria-current={index === selectedIndex ? 'true' : undefined}
                />
            ))}
        </div>
    </>;
};
