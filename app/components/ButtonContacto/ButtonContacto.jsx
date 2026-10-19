"use client";
import Link from 'next/link';
import './buttonContacto.scss';
import { useState } from 'react';

export const ButtonContacto = ({ children }) => {

    const [showModal, setShowModal] = useState(false);

    return <><button onClick={()=>setShowModal(true)} className='buttonContacto'>
        {children}
    </button>
            <section id='contactoModal' className={showModal ? 'is-open' : ''} aria-hidden={!showModal}>
                <article>
                    <div>
                        <h3>Contacto</h3>
                        <button onClick={()=>setShowModal(false)}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.75 14.75L7.75 7.75M7.75 7.75L0.75 0.75M7.75 7.75L14.75 0.75M7.75 7.75L0.75 14.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="white" />
                        </svg>
                        </button>
                    </div>
                    <div>
                        <Link target='_blank' href='https://wa.me/5491126110033?text=Hola%21' className='buttonContacto'>Cotizar un proyecto</Link>
                        <Link target='_blank' href='https://wa.me/5491133966679?text=Hola%21' className='buttonContacto'>Guardias técnicas</Link>
                        <Link target='_blank' href='https://wa.me/5491159208916?text=Hola%21' className='buttonContacto'>Empleo</Link>
                    </div>
                </article>
            </section>

    </>
}
""
