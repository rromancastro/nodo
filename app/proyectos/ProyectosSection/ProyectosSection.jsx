"use client";
import { SplitH1 } from '@/app/components';
import './proyectosSection.scss';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';

const proyectos = [
    {
        "imgUrl": "/proyectos/1.png",
        "text1": "Hospital Italiano",
        "text2": " 2025- 2026 Buenos Aires, Argentina",
        "href": "/"
    },
    {
        "imgUrl": "/proyectos/2.png",
        "text1": "Hospital Italiano",
        "text2": " 2025- 2026 Buenos Aires, Argentina",
        "href": "/"
    },
    {
        "imgUrl": "/proyectos/1.png",
        "text1": "Hospital Italiano",
        "text2": " 2025- 2026 Buenos Aires, Argentina",
        "href": "/"
    },
    {
        "imgUrl": "/proyectos/2.png",
        "text1": "Hospital Italiano",
        "text2": " 2025- 2026 Buenos Aires, Argentina",
        "href": "/"
    },
    {
        "imgUrl": "/proyectos/1.png",
        "text1": "Hospital Italiano",
        "text2": " 2025- 2026 Buenos Aires, Argentina",
        "href": "/"
    },
    {
        "imgUrl": "/proyectos/2.png",
        "text1": "Hospital Italiano",
        "text2": " 2025- 2026 Buenos Aires, Argentina",
        "href": "/"
    },
]

export const ProyectosSection = () => {
    const carouselRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const updateCarouselIndex = () => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const left = carousel.getBoundingClientRect().left + parseFloat(getComputedStyle(carousel).paddingLeft);
        const cards = Array.from(carousel.querySelectorAll('.proyectoCard'));
        const nearestIndex = cards.reduce((nearest, card, index) => {
            const distance = Math.abs(card.getBoundingClientRect().left - left);
            const nearestDistance = Math.abs(cards[nearest].getBoundingClientRect().left - left);
            return distance < nearestDistance ? index : nearest;
        }, 0);

        setSelectedIndex(nearestIndex);
    };
    return <section id='proyectosSection'>
        <SplitH1 id={'proyectosTitle'}>
            Proyectos Destacados
        </SplitH1>
        <div id='proyectosPrincipalesContainer'>
            {
                proyectos.slice(0, 2).map((proyecto, index) => (
                    <Link className='proyectoCard' href={proyecto.href} key={index}>
                        <div>
                            <Image src={proyecto.imgUrl} alt='Imagen Proyecto' width={400} height={400} />
                            <GoArrowUpRight />
                        </div>
                        <p>
                            <span>{proyecto.text1}</span>
                            {proyecto.text2}
                        </p>
                    </Link>
                ))
            }
        </div>
        <div id='proyectosContainer' ref={carouselRef} onScroll={updateCarouselIndex}>
            {
                proyectos.slice(2).map((proyecto, index) => (
                    <Link className='proyectoCard' href={proyecto.href} key={index}>
                        <div>
                            <Image src={proyecto.imgUrl} alt='Imagen Proyecto' width={400} height={400} />
                            <GoArrowUpRight />
                        </div>
                        <p>
                            <span>{proyecto.text1}</span>
                            {proyecto.text2}
                        </p>
                    </Link>
                ))
            }
        </div>
        <div className='proyectosCarouselIndex' aria-label='Índice de proyectos'>
            {proyectos.slice(2).map((proyecto, index) => (
                <div
                    key={index}
                    className={index === selectedIndex ? 'proyectosCarouselIndexSelected' : ''}
                    aria-current={index === selectedIndex ? 'true' : undefined}
                />
            ))}
        </div>
    </section>
}
