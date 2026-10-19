'use client';

import { useEffect, useRef, useState } from 'react';
import { SplitH2, SplitP } from '@/app/components';
import './empleoSecondSection.scss';
import Link from 'next/link';

const fallbackCountry = {
    alpha2Code: 'AR',
    name: 'Argentina',
    flag: 'https://countries.dev/flags/ar.svg',
    callingCodes: ['54'],
};

const getCountryName = (country) => typeof country.name === 'string' ? country.name : country.name?.common;
const getCountryFlag = (country) => country.flags?.svg || country.flags?.png || (country.flag?.startsWith('http') ? country.flag : '');
const getCallingCode = (country) => {
    const code = country.callingCodes?.[0];
    if (!code) return '';
    return code.startsWith('+') ? code : `+${code}`;
};

const jobOptions = [
    { value: 'puesto-1', label: 'Servicio técnico' },
    { value: 'puesto-2', label: 'Instalaciones' },
    { value: 'puesto-3', label: 'Ventas' },
    { value: 'puesto-4', label: 'Producción' },
    { value: 'puesto-5', label: 'Logística' },
    { value: 'puesto-6', label: 'Oficina técnica' },
    { value: 'puesto-7', label: 'Diseño' },
];

export const EmpleoSecondSection = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(fallbackCountry);
    const [isCountryListOpen, setIsCountryListOpen] = useState(false);
    const [isLoadingCountries, setIsLoadingCountries] = useState(true);
    const [countryLoadFailed, setCountryLoadFailed] = useState(false);
    const [selectedJob, setSelectedJob] = useState('');
    const [isJobListOpen, setIsJobListOpen] = useState(false);
    const countrySelectorRef = useRef(null);
    const jobSelectorRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!countrySelectorRef.current?.contains(event.target)) {
                setIsCountryListOpen(false);
            }
            if (!jobSelectorRef.current?.contains(event.target)) {
                setIsJobListOpen(false);
            }
        };

        document.addEventListener('pointerdown', handleOutsideClick, true);
        return () => document.removeEventListener('pointerdown', handleOutsideClick, true);
    }, []);

    useEffect(() => {
        let isMounted = true;

        fetch('/api/countries')
            .then((response) => {
                if (!response.ok) throw new Error('No se pudo cargar la lista de países');
                return response.json();
            })
            .then((countryList) => {
                const availableCountries = countryList
                    .filter((country) => country.alpha2Code && getCountryFlag(country))
                    .sort((a, b) => getCountryName(a).localeCompare(getCountryName(b), 'es'));

                if (!isMounted) return;
                setCountries(availableCountries);
                setSelectedCountry(availableCountries.find((country) => country.alpha2Code === 'AR') ?? fallbackCountry);
                setIsLoadingCountries(false);
            })
            .catch(() => {
                if (isMounted) {
                    setCountries([fallbackCountry]);
                    setCountryLoadFailed(true);
                    setIsLoadingCountries(false);
                }
            });

        return () => {
            isMounted = false;
        };
    }, []);

    return <section id='empleoSecondSection'>
        <div>
            <SplitH2 id='empleoSecondSectionTitle'>
                Trabajemos juntos
            </SplitH2>
            <SplitP id='empleoSecondSectionText1'>
                Trabajamos para que las infraestructuras de mayor exigencia funcionen con seguridad, precisión y continuidad.
            </SplitP>
            <SplitP id='empleoSecondSectionText2'>
                Buscamos personas comprometidas con la ingeniería, la innovación y el trabajo en equipo, que quieran desarrollar su carrera participando en proyectos para entornos de alto impacto junto a profesionales especializados.
            </SplitP>
            <SplitP id='empleoSecondSectionText3'>
                Disponemos de una línea de Whastaspp especifica para contactarnos en caso de tener dudas o necesitar hablar con un representante.
            </SplitP>
            <Link href='https://wa.me/5491126110033?text=Hola%21%20Estoy%20interesado%20en%20mas%20informaci%C3%B3n' target='_blank' className='buttonContacto'>
                Contacto
            </Link>
        </div>

        <div>
            <p>Enviános tu perfil</p>

            <form>
                <input type="text" placeholder="Nombre" />
                <input type="email" placeholder="E-mail" />
                <div className='contactoNumero'>
                    <div className='contactoCountrySelector' ref={countrySelectorRef}>
                        <button
                            type='button'
                            aria-label={`País seleccionado: ${getCountryName(selectedCountry)}, ${getCallingCode(selectedCountry)}. Elegir país`}
                            aria-expanded={isCountryListOpen}
                            aria-haspopup='listbox'
                            onClick={() => setIsCountryListOpen((isOpen) => !isOpen)}
                        >
                            <img src={getCountryFlag(selectedCountry)} alt={`Bandera de ${getCountryName(selectedCountry)}`} />
                            <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.283203 0.282715L5.2832 5.28271L10.2832 0.282715" strokeWidth="0.8" stroke="#A2A5A4" />
                            </svg>
                        </button>
                        {isCountryListOpen && <div className='contactoCountryList' role='listbox' aria-label='Seleccionar país'>
                            {isLoadingCountries && <p role='status'>Cargando países…</p>}
                            {countryLoadFailed && <p role='status'>No se pudo cargar la lista. Podés seleccionar Argentina.</p>}
                            {countries.map((country) => (
                                <button
                                    key={country.alpha2Code}
                                    type='button'
                                    role='option'
                                    aria-selected={country.alpha2Code === selectedCountry.alpha2Code}
                                    onClick={() => {
                                        setSelectedCountry(country);
                                        setIsCountryListOpen(false);
                                    }}
                                >
                                    <img src={getCountryFlag(country)} alt='' loading='lazy' />
                                    <span>{getCountryName(country)}</span>
                                    <span>{getCallingCode(country)}</span>
                                </button>
                            ))}
                        </div>}
                    </div>
                    <p>{getCallingCode(selectedCountry)}</p>

                    <input type="text" placeholder='Whatsapp' />
                </div>
                <div className='contactoPuestoSelector' ref={jobSelectorRef}>
                    <input type='hidden' name='puestolaboral' value={selectedJob} />
                    <button
                        id='puestolaboral'
                        type='button'
                        role='combobox'
                        aria-label='Puesto laboral'
                        aria-expanded={isJobListOpen}
                        aria-haspopup='listbox'
                        onClick={() => setIsJobListOpen((isOpen) => !isOpen)}
                    >
                        <span>{jobOptions.find((option) => option.value === selectedJob)?.label || 'Puesto laboral'}</span>
                        <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.283203 0.282715L5.2832 5.28271L10.2832 0.282715" strokeWidth="0.8" stroke="#A2A5A4" />
                        </svg>
                    </button>
                    {isJobListOpen && <div className='contactoPuestoList' role='listbox' aria-label='Seleccionar puesto laboral'>
                        {jobOptions.map((option) => (
                            <button
                                key={option.value}
                                type='button'
                                role='option'
                                aria-selected={selectedJob === option.value}
                                onClick={() => {
                                    setSelectedJob(option.value);
                                    setIsJobListOpen(false);
                                }}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>}
                </div>
                <div className='contactoButtons'>
                    <button>Adjuntar CV <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 13H13.5C13.6326 13 13.7598 13.0527 13.8536 13.1464C13.9473 13.2402 14 13.3674 14 13.5C14 13.6326 13.9473 13.7598 13.8536 13.8536C13.7598 13.9473 13.6326 14 13.5 14H2.5C2.36739 14 2.24021 13.9473 2.14645 13.8536C2.05268 13.7598 2 13.6326 2 13.5C2 13.3674 2.05268 13.2402 2.14645 13.1464C2.24021 13.0527 2.36739 13 2.5 13ZM8.5 3.96406V11H7.5V3.86406L3.70625 7.65625L3 6.95L7.95 2L12.9 6.95L12.1922 7.65625L8.5 3.96406Z" fill="black" />
                    </svg>
                    </button>
                    <button className='buttonContacto' type="submit">Enviar</button>
                </div>
            </form>
        </div>
        <div className='contactoExtraMobile'>
            <SplitP id='empleoSecondSectionText3'>
                Disponemos de una línea de Whastaspp especifica para contactarnos en caso de tener dudas o necesitar hablar con un representante.
            </SplitP>
            <Link href='https://wa.me/5491126110033?text=Hola%21%20Estoy%20interesado%20en%20mas%20informaci%C3%B3n' target='_blank' className='buttonContacto'>
                Contacto
            </Link>
        </div>
    </section>
}
