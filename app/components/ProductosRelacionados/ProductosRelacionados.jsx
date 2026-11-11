'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ProductoCard } from '../ProductosCategoriaComponent/ProductosCategoriaComponent';
import { usePreserveScroll } from '../LenisProvider/LenisProvider';
import './productosRelacionados.scss';

const Flecha = ({ direction }) => <Image
    src='/productos/flecha-figma.svg' alt='' width={21.5959} height={21.0708}
    className={`productosRelacionadosArrow productosRelacionadosArrow-${direction}`}
    aria-hidden='true' unoptimized
/>;

export const ProductosRelacionados = ({ productos, selectedSlug }) => {
    const router = useRouter();
    const preserveScroll = usePreserveScroll();
    const carousel = useRef(null);
    const track = useRef(null);
    const animation = useRef(null);
    const opacityAnimations = useRef([]);
    const navigating = useRef(false);
    const selectedIndex = productos.findIndex((producto) => producto.slug === selectedSlug);
    const previous = productos[selectedIndex - 1];
    const next = productos[selectedIndex + 1];

    useLayoutEffect(() => {
        animation.current?.cancel();
        opacityAnimations.current.forEach((item) => item.cancel());
        opacityAnimations.current = [];
        navigating.current = false;
        carousel.current?.scrollTo({ left: 0, behavior: 'instant' });
    }, [selectedSlug]);

    const selectProduct = async (event, producto) => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        if (navigating.current || producto.slug === selectedSlug) return;
        navigating.current = true;
        router.prefetch(producto.href);
        const element = track.current;
        const step = element.children[1].offsetLeft - element.children[0].offsetLeft;
        const index = productos.findIndex((item) => item.slug === producto.slug);
        const start = window.getComputedStyle(element).transform;
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        opacityAnimations.current = Array.from(element.children).map((card, cardIndex) => card.animate(
            [{ opacity: window.getComputedStyle(card).opacity }, { opacity: cardIndex === index || card.matches(':hover') ? 1 : .5 }],
            { duration: reducedMotion ? 0 : 500, easing: 'ease', fill: 'forwards' },
        ));
        animation.current = element.animate(
            [{ transform: start }, { transform: `translateX(${-step * index}px)` }],
            { duration: reducedMotion ? 0 : 500, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' },
        );
        try {
            await animation.current.finished;
            preserveScroll(producto.href);
            router.push(producto.href, { scroll: false });
        } catch {
            navigating.current = false;
        }
    };

    return <section className='productosRelacionados' aria-label='Productos de la misma subcategoría'>
        <div className='productosRelacionadosControls'>
            {[[previous, 'Producto anterior', 'previous'], [next, 'Producto siguiente', 'next']].map(([producto, label, direction]) =>
                producto ? <Link key={label} href={producto.href} scroll={false} aria-label={label} onClick={(event) => selectProduct(event, producto)}><Flecha direction={direction} /></Link>
                    : <button key={label} type='button' disabled aria-label={label}><Flecha direction={direction} /></button>)}
        </div>
        <div ref={carousel} className='productosCategoryComponentCarousel'>
            <div ref={track} className='productosRelacionadosTrack' style={{ '--selected-index': selectedIndex }}>
                {productos.map((producto) => {
                    return <div key={producto.slug} className={`productosRelacionadosItem${producto.slug === selectedSlug ? ' isSelected' : ''}`}
                        aria-current={producto.slug === selectedSlug ? 'true' : undefined}
                        onClickCapture={(event) => selectProduct(event, producto)}>
                        <ProductoCard imgSrc={producto.imgSrc} name={producto.name} href={producto.href} imageFit={producto.imageFit} scroll={false} />
                    </div>;
                })}
            </div>
        </div>
        <div className='productosRelacionadosIndex' aria-label='Índice de productos'>
            {productos.map((producto, index) => <button key={producto.slug} type='button'
                className={index === selectedIndex ? 'isSelected' : undefined}
                aria-label={`Ver ${producto.name}`} aria-current={index === selectedIndex ? 'true' : undefined}
                onClick={(event) => selectProduct(event, producto)} />)}
        </div>
    </section>;
};
