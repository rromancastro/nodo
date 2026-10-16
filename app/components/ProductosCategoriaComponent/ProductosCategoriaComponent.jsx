"use client";
import Link from 'next/link';
import { useRef, useState } from 'react';
import { SplitH2, SplitP } from '..';
import './productosCategoriaComponent.scss';
import Image from 'next/image';

const ProductoCard = ({
    imgSrc = '/productos/prod.png',
    name = 'Reguladores',
    desc,
    isMobileSelected = false
}) => {
    return <article className={`productoCard${isMobileSelected ? ' productoCardMobileSelected' : ''}`}>
        <div className='productoCardImageContainer'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="stroke0_565_7504" fill="white">
                    <path d="M16 8.4V21.6C16 22.2365 15.7893 22.847 15.4142 23.2971C15.0391 23.7471 14.5304 24 14 24H10C9.46957 24 8.96086 23.7471 8.58579 23.2971C8.21071 22.847 8 22.2365 8 21.6V8.4C8 6.168 9.27 4.284 11 3.756V2.4H9V0H15V2.4H13V3.756C14.73 4.284 16 6.168 16 8.4Z" />
                </mask>
                <path d="M16 8.4V21.6C16 22.2365 15.7893 22.847 15.4142 23.2971C15.0391 23.7471 14.5304 24 14 24H10C9.46957 24 8.96086 23.7471 8.58579 23.2971C8.21071 22.847 8 22.2365 8 21.6V8.4C8 6.168 9.27 4.284 11 3.756V2.4H9V0H15V2.4H13V3.756C14.73 4.284 16 6.168 16 8.4Z" strokeWidth="2" stroke="#1C1C1C" mask="url(#stroke0_565_7504)" />
            </svg>
            <Image src={imgSrc} alt='Producto imagen' fill />
        </div>
        <div className='productoCardTextContainer'>
            <p>{name}</p>
            {
                desc && <p>{desc}</p>
            }
        </div>
    </article>
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
    desc = 'Lorem ipsum dolor sit amet consectetur. Nisi pellentesque in viverra ultricies nisi morbi mi. Ac pulvinar morbi ante quam.',
    imgSrc = '/home/GasesMedicinales.png',
    prodList = produtsListDefault,
    href = '/',
    inverted = false}) => {
    const drag = useRef(null);
    const carouselRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const hasMobileCarousel = prodList.length > 1;

    const startDrag = (event) => {
        if (event.pointerType !== 'mouse' || event.button !== 0) return;
        const carousel = event.currentTarget;
        drag.current = { pointerId: event.pointerId, startX: event.clientX, scrollLeft: carousel.scrollLeft };
        carousel.setPointerCapture(event.pointerId);
        carousel.classList.add('isDragging');
        event.preventDefault();
    };

    const moveDrag = (event) => {
        if (!drag.current || drag.current.pointerId !== event.pointerId) return;
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
        <div className={`productosCategoryComponentInfo ${inverted ? 'inverted' : ''}`}>
            <div>
                <SplitH2 id={`productosCategoriaComponentTitle${number}`}>
                    {title}
                </SplitH2>
                <SplitP id={`productosCategoriaComponentP${number}`} >
                    {desc}
                </SplitP>
                <Link href={href} className='buttonContacto'>
                    Ver más
                </Link>
            </div>
            <Image src={imgSrc} alt='Imagen Producto' height={500} width={500} />
        </div>

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
