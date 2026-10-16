'use client';

import { useRef, useState } from 'react';
import { SplitH2, SplitP } from '@/app/components';
import './nosotrosThirdSection.scss';
import Image from 'next/image';

const Card = ({ title, country, imageSrc, p1, p2, title2 }) => {
    return <article className='nosotrosCard'>
        <div className='nosotrosCardHead'>
            <h3>{title}
                {
                    title2 && <><br /> {title2} </>
                }
            </h3>
            <p>{country}</p>
        </div>
        <div className='nosotrosCardContainer'>
            <Image src={imageSrc} alt='Imagen Card' width={300} height={300} />
            <p>{p1}</p>
            {
                p2 && <p>{p2}</p>
            }
        </div>
    </article>
}

const cardData = [
    {
        title: 'Sumetzberger',
        country: 'Austria',
        imageSrc: '/nosotros/card1.png',
        p1: 'Compañía líder en sistemas de correo neumático con más de 100 años de vigencia.',
        p2: 'En nuestro portfolio hemos incluido transporte neumático, robots autónomos y soluciones de automatización pensadas para edificios industriales, comerciales y sanitarios.'
    },
    {
        title: 'Master Ingenieros',
        country: 'España',
        imageSrc: '/nosotros/card2.png',
        p1: 'Introducimos en el país sus soluciones automatizadas para puertas. Los accesos peatonales y herméticos fueron diseñados para favorecer la asepsia de los espacios y su adecuado aislamiento acústico.',
    },
    {
        title: 'Grupo',
        title2: 'Legrand - Neat',
        country: 'España',
        imageSrc: '/nosotros/card3.png',
        p1: 'Especialista mundial en infraestructuras eléctricas y digitales desde 1988.',
        p2: 'Nuestra alianza con Neat y Grupo Legrand radica en los llamados de enfermería, dispositivos que garantizan el bienestar del paciente a través de la gestión inteligente de alarmas.'
    },
    {
        title: 'Sensio - ISECO',
        country: 'España, Portugal, Reino unido',
        imageSrc: '/nosotros/card4.png',
        p1: 'Nuestra unión se forja en el mutuo interés por optimizar la comunicación asistencial. Los sistemas paciente-enfermera de ISECO permiten gestionar y automatizar grupos de llamadas y alarmas, agilizando los tiempos de respuesta para una atención más coordinada y eficiente.'
    },
    {
        title: 'Oxair',
        country: 'Estados Unidos',
        imageSrc: '/nosotros/card5.png',
        p1: 'Los gases medicinales son un recurso esencial para el funcionamiento hospitalario. Por ello, ofrecemos generadores de oxígeno de alta pureza que aseguran un suministro continuo y fiable, de la mano de OXAIR, fabricante y proveedor a escala mundial.'
    },
    {
        title: 'ASP Lab Automation',
        country: 'Alemania',
        imageSrc: '/nosotros/card6.png',
        p1: 'Nuestra cartera de productos incorpora robots de automatización para mejorar la recepción, clasificación, distribución y procesamiento de muestras. Trabajamos junto a una compañía con más de 10 años de experiencia en el desarrollo de estaciones inteligentes para laboratorios.'
    },
]

export const NosotrosThirdSection = () => {
    const dragRef = useRef(null);
    const carouselRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const getNearestIndex = () => {
        const container = carouselRef.current;
        if (!container) return 0;
        const left = container.getBoundingClientRect().left;
        const cards = Array.from(container.children);
        return cards.reduce((nearest, card, index) => {
            const distance = (element) => Math.abs(element.getBoundingClientRect().left - left);
            return distance(card) < distance(cards[nearest]) ? index : nearest;
        }, 0);
    };

    const move = (direction) => {
        const container = carouselRef.current;
        if (!container) return;
        const index = (getNearestIndex() + direction + cardData.length) % cardData.length;
        const card = container.children[index];
        container.scrollTo({
            left: card.offsetLeft,
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
        });
    };

    const startDrag = (event) => {
        if (event.pointerType !== 'mouse' || event.button !== 0) return;

        const container = event.currentTarget;
        dragRef.current = {
            pointerId: event.pointerId,
            startX: event.clientX,
            scrollLeft: container.scrollLeft,
        };
        container.setPointerCapture(event.pointerId);
        container.classList.add('isDragging');
        event.preventDefault();
    };

    const moveDrag = (event) => {
        const drag = dragRef.current;
        if (!drag || drag.pointerId !== event.pointerId) return;

        event.currentTarget.scrollLeft = drag.scrollLeft - (event.clientX - drag.startX);
    };

    const endDrag = (event) => {
        if (dragRef.current?.pointerId !== event.pointerId) return;

        dragRef.current = null;
        event.currentTarget.classList.remove('isDragging');
        if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
        }
    };

    return <section id='nosotrosThirdSection'>
        <div className='nosotrosThirdSectionContentContainer'>
            <div className='nosotrosThirdSectionContentHead'>
                <SplitH2 id='nosotrosThirdSectionContentHeadTitle'>Referentes internacionales nos eligen.</SplitH2>
                <SplitP id='nosotrosThirdSectionContentHeadP'>Tenemos el agrado de representarlos de forma exclusiva en Argentina.</SplitP>
                <div className='nnosotrosThirdSectionContentHeadMobileButtons'>
                    <button type='button' aria-label='Representante anterior' onClick={() => move(-1)}>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.9927 6.41309L0.351915 6.41308" stroke="#1C1C1C" />
                            <path d="M6.46838 12.3555L0.351888 6.41372L6.46838 0.355469" stroke="#1C1C1C" strokeLinejoin="bevel" />
                        </svg>
                    </button>
                    <button type='button' aria-label='Representante siguiente' onClick={() => move(1)}>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.67635e-07 6.30078L12.6408 6.30078" stroke="#1C1C1C" />
                            <path d="M6.52429 0.358398L12.6408 6.30015L6.52429 12.3584" stroke="#1C1C1C" strokeLinejoin="bevel" />
                        </svg>
                    </button>
                </div>
            </div>

            <div
                className='nosotrosThirdSectionCardsContainer'
                ref={carouselRef}
                onScroll={() => setSelectedIndex(getNearestIndex())}
                role='region'
                aria-roledescription='carrusel'
                aria-label='Representantes internacionales'
                onPointerDown={startDrag}
                onPointerMove={moveDrag}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
                onLostPointerCapture={endDrag}
                onDragStart={(event) => event.preventDefault()}
            >
                {
                    cardData.map((card, index) => (
                        <Card
                            key={index}
                            title={card.title}
                            country={card.country}
                            imageSrc={card.imageSrc}
                            p1={card.p1}
                            p2={card.p2}
                            title2={card.title2}
                        />
                    ))
                }
            </div>
            <div className='nosotrosThirdSectionCarouselIndex' aria-label='Índice de representantes'>
                {cardData.map((card, index) => (
                    <div
                        key={card.title}
                        className={index === selectedIndex ? 'isSelected' : ''}
                        aria-current={index === selectedIndex ? 'true' : undefined}
                    />
                ))}
            </div>
        </div>
    </section>
}
