"use client";
import { SplitH2, SplitP } from '@/app/components';
import './homeFourthSection.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const cards = [
    {
        "p": "Gases Medicinales",
        "imgSrc": "/home/GasesMedicinales.avif",
        "href": "/"
    },
    {
        "p": "Puertas Automáticas",
        "imgSrc": "/home/PuertasAutomaticas.avif",
        "href": "/"
    },
    {
        "p": "Sistemas neumáticos",
        "imgSrc": "/home/CorreoNeumatico.avif",
        "href": "/"
    },
    {
        "p": "Policanales",
        "imgSrc": "/home/Policanales.avif",
        "href": "/"
    },
    {
        "p": "Robótica",
        "imgSrc": "/home/Robotica.avif",
        "href": "/"
    },
]

export const HomeFourthSection = () => {

    const [cardSelected, setCardSelected] = useState(0);
    const sectionRef = useRef(null);
    const isCardAnimating = useRef(false);
    const pendingCard = useRef(null);

    const selectCard = (index) => {
        if (isCardAnimating.current) {
            pendingCard.current = index;
            return;
        }
        if (index === cardSelected) return;

        isCardAnimating.current = true;
        setCardSelected(index);
    };

    const finishCardTransition = (event, index) => {
        if (event.target !== event.currentTarget || event.propertyName !== 'flex-grow' || index !== cardSelected) return;

        isCardAnimating.current = false;
        const nextCard = pendingCard.current;
        pendingCard.current = null;
        if (nextCard !== null) selectCard(nextCard);
    };

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const media = gsap.matchMedia();
        const cardsContainer = sectionRef.current.querySelector('#homeFourthSectionCards');
        const resizeObserver = new ResizeObserver(([entry]) => {
            const styles = window.getComputedStyle(cardsContainer);
            const gap = parseFloat(styles.columnGap) || 0;
            const cardBasis = parseFloat(window.getComputedStyle(cardsContainer.firstElementChild).flexBasis) || 132;
            const expandedWidth = Math.max(cardBasis, entry.contentRect.width - (cards.length - 1) * (cardBasis + gap));
            cardsContainer.style.setProperty('--card-image-width', `${expandedWidth}px`);
        });
        resizeObserver.observe(cardsContainer);

        media.add('(max-width: 990px)', () => {
            const section = sectionRef.current;
            const articles = gsap.utils.toArray('#homeFourthSectionCards article', section);
            const updateCards = (progress) => {
                const step = progress * (articles.length - 1);
                const travel = section.querySelector('#homeFourthSectionSticky').offsetHeight;

                articles.forEach((article, index) => {
                    gsap.set(article, {
                        y: index * 24 + Math.max(0, index - step) * travel,
                        scale: Math.max(0.86, 1 - Math.max(0, step - index) * 0.045),
                    });
                });
            };

            updateCards(0);
            ScrollTrigger.create({
                trigger: section,
                start: 'top top',
                end: 'bottom bottom',
                onUpdate: (self) => updateCards(self.progress),
                onRefresh: (self) => updateCards(self.progress),
            });

            return () => gsap.set(articles, { clearProps: 'transform' });
        });

        return () => {
            resizeObserver.disconnect();
            media.revert();
        };
    }, []);

    return <section id='homeFourthSection' ref={sectionRef}>
        <div id='homeFourthSectionSticky'>
        <div id='homeFourthSectionNav'>
            <SplitH2 id='homeFourthSectionNavTitle'>
                Productos
            </SplitH2>
            <SplitP id='homeFourthSectionNavSubtitle'>
                Equipamiento y aparatología hospitalaria, sistemas de automatización estándar y personalizados.
            </SplitP>
            <Link href='/' className='buttonContacto  disabled'>Ver más</Link>
        </div>
        <div id='homeFourthSectionCards'>
            {
                cards.map((card, index) => (
                    <article
                        key={index}
                        style={{
                            '--card-grow': cardSelected === index ? 1 : 0,
                            '--card-filter': cardSelected === index ? 'none' : 'grayscale(1) brightness(.7)',
                            '--card-index': index,
                        }}
                        onMouseEnter={() => selectCard(index)}
                        onMouseLeave={() => {
                            if (pendingCard.current === index) pendingCard.current = null;
                        }}
                        onTransitionEnd={(event) => finishCardTransition(event, index)}
                    >
                        <Image unoptimized src={card.imgSrc} alt='Imagen Producto' height={1000} width={1000} />
                        <div style={{ '--card-opacity': cardSelected === index ? 1 : 0 }}>
                            <p>
                                {card.p}
                            </p>
                            <Link href={card.href} className='buttonContacto disabled'>Ver más</Link>
                        </div>
                    </article>
                ))
            }
        </div>
        </div>
    </section>
}
