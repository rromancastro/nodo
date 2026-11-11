"use client";
import Link from 'next/link';
import { useId, useRef, useState } from 'react';
import { SplitH2, SplitP } from '..';
import './productosCategoriaComponent.scss';
import Image from 'next/image';

export const ProductoCard = ({
    imgSrc = '/productos/prod.png',
    name = 'Reguladores',
    desc,
    href,
    scroll,
    imageFit = 'contain',
    isMobileSelected = false
}) => {
    const maskId = useId();
    const Card = href ? Link : 'article';
    return <Card href={href} {...(href ? { scroll } : {})} className={`productoCard${imageFit === 'cover' ? ' productoCardPhoto' : ''}${isMobileSelected ? ' productoCardMobileSelected' : ''}`}>
        <div className='productoCardImageContainer'>
            <Image src={imgSrc} alt={name} fill sizes='(max-width: 768px) 80vw, 400px' unoptimized={imageFit === 'cover'} />
        </div>
        <div className='productoCardTextContainer'>
            <p>{name}</p>
            {
                desc && <p>{desc}</p>
            }
        </div>
    </Card>
}

const produtsListDefault = [
    {
        imgSrc: '/productos/prod.png',
        name: 'Reguladores'
    },
    {
        imgSrc: '/productos/prod.png',
        name: 'Caudalímetros'
    },
    {
        imgSrc: '/productos/prod.png',
        name: 'Frascos',
    },
    {
        imgSrc: '/productos/prod.png',
        name: 'Plugs',
    },
    {
        imgSrc: '/productos/prod.png',
        name: 'Equipamiento 1.0',
    },
]

export const ProductosCategoriaComponent = ({
    number = 1,
    title = 'Gases Medicinales',
    desc,
    imgSrc = '/home/GasesMedicinales.avif',
    prodList = produtsListDefault,
    href = '/',
    catalogueOnly = false,
    inverted = false}) => {
    const drag = useRef(null);
    const suppressClick = useRef(false);
    const carouselRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const hasMobileCarousel = prodList.length > 1;

    const startDrag = (event) => {
        if (event.pointerType !== 'mouse' || event.button !== 0) return;
        const carousel = event.currentTarget;
        suppressClick.current = false;
        drag.current = { pointerId: event.pointerId, startX: event.clientX, scrollLeft: carousel.scrollLeft };
        carousel.classList.add('isDragging');
    };

    const moveDrag = (event) => {
        if (!drag.current || drag.current.pointerId !== event.pointerId) return;
        if (Math.abs(event.clientX - drag.current.startX) > 5) {
            drag.current.moved = true;
            suppressClick.current = true;
            if (!event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.setPointerCapture(event.pointerId);
        }
        event.currentTarget.scrollLeft = drag.current.scrollLeft - (event.clientX - drag.current.startX);
    };

    const endDrag = (event) => {
        if (!drag.current || drag.current.pointerId !== event.pointerId) return;
        drag.current = null;
        event.currentTarget.classList.remove('isDragging');
        if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
        }
    };

    const updateSelectedIndex = () => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const cards = carousel.querySelectorAll('.productoCard');
        if (!cards.length) return;

        const carouselCenter = carousel.getBoundingClientRect().left + carousel.clientWidth / 2;
        const nearestIndex = Array.from(cards).reduce((nearest, card, index) => {
            const cardCenter = card.getBoundingClientRect().left + card.offsetWidth / 2;
            const nearestCardCenter = cards[nearest].getBoundingClientRect().left + cards[nearest].offsetWidth / 2;
            return Math.abs(cardCenter - carouselCenter) < Math.abs(nearestCardCenter - carouselCenter) ? index : nearest;
        }, 0);

        setSelectedIndex(nearestIndex);
    };

    return <section className='productosCategoriaComponent'>
        {catalogueOnly ? <h2 className='productosCategoryComponentHeading'>{title}</h2> : <div className={`productosCategoryComponentInfo ${inverted ? 'inverted' : ''}`}>
            <div>
                <SplitH2 id={`productosCategoriaComponentTitle${number}`}>
                    {title}
                </SplitH2>
                {desc && <SplitP id={`productosCategoriaComponentP${number}`} >
                    {desc}
                </SplitP>}
                <Link href={href} className='buttonContacto'>
                    Ver más
                </Link>
            </div>
            <Image unoptimized src={imgSrc} alt='Imagen Producto' height={500} width={500} />
        </div>}

        <div
            ref={carouselRef}
            className={`productosCategoryComponentCarousel${hasMobileCarousel ? ' hasMobileCarousel' : ''}${prodList.length === 1 ? ' singleProduct' : ''}`}
            onScroll={hasMobileCarousel ? updateSelectedIndex : undefined}
            onPointerDown={startDrag}
            onPointerMove={moveDrag}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onLostPointerCapture={endDrag}
            onDragStart={(event) => event.preventDefault()}
            onClickCapture={(event) => {
                if (suppressClick.current) {
                    event.preventDefault();
                    event.stopPropagation();
                    suppressClick.current = false;
                }
            }}
            tabIndex={0}
            role='region'
            aria-label='Productos de la categoría'
        >
            {
                prodList.map((prod, index) => (
                    <ProductoCard
                        key={index}
                        isMobileSelected={index === selectedIndex}
                        imgSrc={prod.imgSrc}
                        name={prod.name}
                        desc={prod.desc}
                        href={prod.href}
                        imageFit={prod.imageFit}
                    />
                ))
            }
        </div>
        {hasMobileCarousel && <div className='productosCategoryComponentCarouselIndex' aria-label='Índice de productos'>
            {prodList.map((prod, index) => (
                <div
                    key={`${prod.name}-${index}`}
                    className={index === selectedIndex ? 'productosCategoryComponentCarouselIndexSelected' : ''}
                    aria-current={index === selectedIndex ? 'true' : undefined}
                />
            ))}
        </div>}
    </section>
}
