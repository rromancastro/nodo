import Image from 'next/image';
import { ParallaxImage } from '../ParallaxImage/ParallaxImage';
import { Footer, Navbar, SplitH1, SplitH2 } from '..';
import './proyectoPage.scss';
import Link from 'next/link';
import { ProyectoPageFourthSection } from './ProyectoPageFourthSection';

export const ProyectoPage = ({ proyecto }) => {
    return <>
        <Navbar />
        <section className='proyectoPageHeader'>
            <SplitH1 id='proyectoPageHeaderH1'>
                {proyecto.institucion}
            </SplitH1>

            <div className='proyectoPageHero'>
                <div className='proyectoPageHeroCards'>
                    <div className='proyectoPageHeroCard'>
                        <p id='proyectoPageHeroCardP1'>
                            Institución / obra
                        </p>
                        <p id='proyectoPageHeroCardP2'>
                            {proyecto.institucion}
                        </p>
                    </div>

                    <div className='proyectoPageHeroCard'>
                        <p id='proyectoPageHeroCardP3'>
                            Escala
                        </p>
                        <p id='proyectoPageHeroCardP4'>
                            {proyecto.escala}
                        </p>
                    </div>

                    <div className='proyectoPageHeroCard'>
                        <p id='proyectoPageHeroCardP5'>
                            Ubicación
                        </p>
                        <p id='proyectoPageHeroCardP6'>
                            {proyecto.ubicacion}
                        </p>
                    </div>

                    <div className='proyectoPageHeroCard'>
                        <p id='proyectoPageHeroCardP7'>
                            Año
                        </p>
                        <p id='proyectoPageHeroCardP8'>
                            {proyecto.anio}
                        </p>
                    </div>

                </div>
                <ParallaxImage className='proyectoPageHeroImageContainer' src={proyecto.imgUrl} alt={proyecto.institucion} />
            </div>
        </section>

        <main>
            <section className='proyectoPageSecondSection'>
                <SplitH2 id='proyectoPageSecondSectionH2'>DETALLES DEL PROYECTO</SplitH2>
                <div className='proyectoPageSecondSectionContent'>
                    <div className='proyectoPageSecondSectionCard'>
                        <p id='proyectoPageSecondSectionCardP1' >Sistema / producto</p>
                        <p id='proyectoPageSecondSectionCardP2' >{proyecto.sistema}</p>
                    </div>

                    <div className='proyectoPageSecondSectionCard'>
                        <p id='proyectoPageSecondSectionCardP3'>Descripción General</p>
                        <p id='proyectoPageSecondSectionCardP4'>{proyecto.descripcion}</p>
                    </div>

                    <div className='proyectoPageSecondSectionCard'>
                        <p id='proyectoPageSecondSectionCardP7' >Resultados</p>
                        <p id='proyectoPageSecondSectionCardP8' >{proyecto.beneficios}</p>
                    </div>
                </div>
            </section>

            <section className='proyectoPageThirdSection'>
                <div>
                    <div>
                        <Image unoptimized src={proyecto.thirdSectionFirstImage} alt={proyecto.institucion} width={500} height={500} />
                        <p> {proyecto.anio} · {proyecto.ubicacion}</p>
                    </div>

                    {proyecto.textoDestacado && <p id='proyectoPageThirdSectionP1'>{proyecto.textoDestacado}</p>}
                </div>

                <Image unoptimized src={proyecto.thirdSectionImage} alt={proyecto.institucion} width={500} height={500} />
            </section>

            {proyecto.imagenes.length === 3 && <ProyectoPageFourthSection proyecto={proyecto} />}

            <section className='proyectoPageFifthSection'>
                <article>
                    <Image unoptimized src='/proyectos/1.avif' alt='Ver otros proyectos' fill />
                    <SplitH2 id='proyectoPageFifthSectionH2'>Ver otros proyectos</SplitH2>
                    <Link href='/proyectos' className='buttonContacto'>
                        Ver más
                    </Link>
                </article>
            </section>
        </main>

        <Footer />
    </>
}
