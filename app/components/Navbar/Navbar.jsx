"use client";
import { usePathname } from 'next/navigation';
import { ButtonContacto } from '..';
import './navbar.scss';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export const Navbar = () => {

    const [navClass, setNavClass] = useState('navInverted')
    const path = usePathname();

    const [menuDrop, setMenuDrop] = useState(false);
    const [menuMobileDrop, setMenuMobileDrop] = useState(false);
    const [isMobileMenuClosing, setIsMobileMenuClosing] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuClosing(menuMobileDrop);
        setMenuMobileDrop(!menuMobileDrop);
    };

    useEffect(() => {
        if (path !== '/') return;

        const updateNavClass = () => {
            setNavClass(window.scrollY >= window.innerHeight ? 'navNormal' : 'navInverted');
        };

        const frame = window.requestAnimationFrame(updateNavClass);
        window.addEventListener('scroll', updateNavClass, { passive: true });
        window.addEventListener('resize', updateNavClass);

        return () => {
            window.cancelAnimationFrame(frame);
            window.removeEventListener('scroll', updateNavClass);
            window.removeEventListener('resize', updateNavClass);
        };
    }, [path]);

    return <nav id='navbar' className={path === '/' ? navClass : 'navNormal'}>
        <div className={`menuContainer ${menuDrop ? 'menuDropVisible' : 'menuDropHidden'}`} onClick={() => setMenuDrop(!menuDrop)}>
            <button className='menubutton'>
                Menu
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 4H14M2 8H14M2 12H14" stroke="#1C1C1C" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <div className='menuDrop'>
                <Link href='/proyectos'>Proyectos <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.499972 7.94545L7.6292 0.816215C7.42672 0.613814 7.15216 0.500074 6.86587 0.499982L1.07082 0.499982M7.94543 7.3746L7.94544 1.57955C7.94507 1.29336 7.83116 1.019 7.62869 0.816724" stroke="#2B2A26" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                </Link>
                <Link href='/nosotros'>Nosotros <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.499972 7.94545L7.6292 0.816215C7.42672 0.613814 7.15216 0.500074 6.86587 0.499982L1.07082 0.499982M7.94543 7.3746L7.94544 1.57955C7.94507 1.29336 7.83116 1.019 7.62869 0.816724" stroke="#2B2A26" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                </Link>
                <Link href='/productos'>Productos <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.499972 7.94545L7.6292 0.816215C7.42672 0.613814 7.15216 0.500074 6.86587 0.499982L1.07082 0.499982M7.94543 7.3746L7.94544 1.57955C7.94507 1.29336 7.83116 1.019 7.62869 0.816724" stroke="#2B2A26" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                </Link>
                <Link href='/empleo'>Empleo <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.499972 7.94545L7.6292 0.816215C7.42672 0.613814 7.15216 0.500074 6.86587 0.499982L1.07082 0.499982M7.94543 7.3746L7.94544 1.57955C7.94507 1.29336 7.83116 1.019 7.62869 0.816724" stroke="#2B2A26" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                </Link>
            </div>
        </div>

        <Link href='/'><img src={path === '/' && navClass === 'navInverted' ? '/isologo-blanco.png' : '/isologo.png'} alt="nodo isologo" /></Link>

        <ButtonContacto>
            Contacto
        </ButtonContacto>

        <button style={{backgroundColor: menuMobileDrop ? '#1C1C1C' : '#DDDDDD'}} onClick={toggleMobileMenu} id='menuButtonMobile' aria-expanded={menuMobileDrop} aria-controls='menuDropMobile'>
            {
                menuMobileDrop ? <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 12.5L6.5 6.5M6.5 6.5L0.5 0.5M6.5 6.5L12.5 0.5M6.5 6.5L0.5 12.5" strokeLinecap="round" strokeLinejoin="round" stroke="white" />
                </svg>
                    :
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 4H14M2 8H14M2 12H14" strokeLinecap="round" strokeLinejoin="round" stroke="#1C1C1C" />
                    </svg>
            }
        </button>
        {
            (menuMobileDrop || isMobileMenuClosing) &&
            <div
                id='menuDropMobile'
                className={isMobileMenuClosing ? 'menuMobileClosing' : undefined}
                inert={isMobileMenuClosing}
                onAnimationEnd={(event) => {
                    if (event.target === event.currentTarget && event.animationName === 'menuMobileFadeOut') {
                        setIsMobileMenuClosing(false);
                    }
                }}
            >
                <div id='menuDropMobileContent'>
                    <h3>Menu</h3>
                    <div>
                        <Link className='navLinkMobile' href='/proyectos'>Proyectos <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.499972 7.94545L7.6292 0.816215C7.42672 0.613814 7.15216 0.500074 6.86587 0.499982L1.07082 0.499982M7.94543 7.3746L7.94544 1.57955C7.94507 1.29336 7.83116 1.019 7.62869 0.816724" stroke="#2B2A26" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </Link>
                        <Link className='navLinkMobile' href='/nosotros'>Nosotros <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.499972 7.94545L7.6292 0.816215C7.42672 0.613814 7.15216 0.500074 6.86587 0.499982L1.07082 0.499982M7.94543 7.3746L7.94544 1.57955C7.94507 1.29336 7.83116 1.019 7.62869 0.816724" stroke="#2B2A26" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </Link>
                        <Link className='navLinkMobile' href='/productos'>Productos <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.499972 7.94545L7.6292 0.816215C7.42672 0.613814 7.15216 0.500074 6.86587 0.499982L1.07082 0.499982M7.94543 7.3746L7.94544 1.57955C7.94507 1.29336 7.83116 1.019 7.62869 0.816724" stroke="#2B2A26" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </Link>
                        <Link className='navLinkMobile' href='/empleo'>Empleo <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.499972 7.94545L7.6292 0.816215C7.42672 0.613814 7.15216 0.500074 6.86587 0.499982L1.07082 0.499982M7.94543 7.3746L7.94544 1.57955C7.94507 1.29336 7.83116 1.019 7.62869 0.816724" stroke="#2B2A26" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </Link>
                    </div>
                    <h3>Contacto</h3>
                    <div>
                        <Link target='_blank' href='https://wa.me/5491126110033?text=Hola%21' className='buttonContacto'>Cotizar un proyecto</Link>
                        <Link target='_blank' href='https://wa.me/5491133966679?text=Hola%21' className='buttonContacto'>Guardias técnicas</Link>
                        <Link target='_blank' href='https://wa.me/5491159208916?text=Hola%21' className='buttonContacto'>Empleo</Link>
                    </div>
                </div>
            </div>
        }
    </nav>
}
