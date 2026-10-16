import Image from 'next/image';
import { ParallaxImage } from '../ParallaxImage/ParallaxImage';
import { Footer, Navbar, SplitH1, SplitH2, SplitP } from '..';
import './proyectoPage.scss';
import Link from 'next/link';
import { ProyectoPageFourthSection } from './ProyectoPageFourthSection';

export const ProyectoPage = () => {
    return <>
        <Navbar />
        <section className='proyectoPageHeader'>
            <SplitH1 id='proyectoPageHeaderH1'>
                Hospital 1
            </SplitH1>

            <div className='proyectoPageHero'>
                <div className='proyectoPageHeroCards'>
                    <div className='proyectoPageHeroCard'>
                        <SplitP id='proyectoPageHeroCardP1'>
                            Cliente
                        </SplitP>
                        <SplitP id='proyectoPageHeroCardP2'>
                            Hospital Italiano
                        </SplitP>
                    </div>

                    <div className='proyectoPageHeroCard'>
                        <SplitP id='proyectoPageHeroCardP3'>
                            Tipo de proyecto
                        </SplitP>
                        <SplitP id='proyectoPageHeroCardP4'>
                            Hospital Italiano
                        </SplitP>
                    </div>

                    <div className='proyectoPageHeroCard'>
                        <SplitP id='proyectoPageHeroCardP5'>
                            Ubicación
                        </SplitP>
                        <SplitP id='proyectoPageHeroCardP6'>
                            Ciudad Autónoma de  Buenos Aires, Argentina
                        </SplitP>
                    </div>

                    <div className='proyectoPageHeroCard'>
                        <SplitP id='proyectoPageHeroCardP7'>
                            Año
                        </SplitP>
                        <SplitP id='proyectoPageHeroCardP8'>
                            2025- 2026
                        </SplitP>
                    </div>

                </div>
                <ParallaxImage className='proyectoPageHeroImageContainer' src='/proyectos/1.png' alt='Hospital 1' />
            </div>
        </section>

        <main>
            <section className='proyectoPageSecondSection'>
                <SplitH2 id='proyectoPageSecondSectionH2'>DETALLES DEL PROYECTO</SplitH2>
                <div className='proyectoPageSecondSectionContent'>
                    <div className='proyectoPageSecondSectionCard'>
                        <SplitP id='proyectoPageSecondSectionCardP1' >Descripción General</SplitP>
                        <SplitP id='proyectoPageSecondSectionCardP2' >Lorem ipsum dolor sit amet consectetur. Amet luctus nunc facilisis sem mauris fames nunc. Aliquet eleifend nullam id pellentesque facilisis augue. Fusce mauris sollicitudin elementum ut eget. Sed augue feugiat ipsum morbi sed.</SplitP>
                    </div>

                    <div className='proyectoPageSecondSectionCard'>
                        <SplitP id='proyectoPageSecondSectionCardP3' >Colaboradores</SplitP>
                        <SplitP id='proyectoPageSecondSectionCardP4' >Lorem ipsum dolor sit amet consectetur. Amet luctus nunc facilisis sem mauris fames nunc. Aliquet eleifend nullam id pellentesque facilisis augue. Fusce mauris sollicitudin elementum ut eget. Sed augue feugiat ipsum morbi sed.</SplitP>
                    </div>

                    <div className='proyectoPageSecondSectionCard'>
                        <SplitP id='proyectoPageSecondSectionCardP5' >Escala</SplitP>
                        <SplitP id='proyectoPageSecondSectionCardP6' >8000m2</SplitP>
                    </div>

                    <div className='proyectoPageSecondSectionCard'>
                        <SplitP id='proyectoPageSecondSectionCardP7' >Resultado</SplitP>
                        <SplitP id='proyectoPageSecondSectionCardP8' >Lorem ipsum dolor sit amet consectetur. Amet luctus nunc facilisis sem mauris fames nunc. Aliquet eleifend nullam id pellentesque facilisis augue. Fusce mauris sollicitudin elementum ut eget. Sed augue feugiat ipsum morbi sed.</SplitP>
                    </div>
                </div>
            </section>

            <section className='proyectoPageThirdSection'>
                <div>
                    <div>
                        <Image src='/proyectos/2.png' alt='Hospital 1' width={500} height={500} />
                        <p> 2025- 2026 Buenos Aires, Argentina</p>
                    </div>

                    <SplitP id='proyectoPageThirdSectionP1' >Lorem ipsum dolor sit amet consectetur. Amet luctus nunc facilisis sem mauris fames nunc. Aliquet eleifend nullam id pellentesque facilisis augue. Fusce mauris sollicitudin elementum ut eget. Sed augue feugiat ipsum morbi sed.</SplitP>
                </div>

                <Image src='/proyectos/1.png' alt='Hospital 1' width={500} height={500} />
            </section>

            <ProyectoPageFourthSection />

            <section className='proyectoPageFifthSection'>
                <article>
                    <Image src='/proyectos/1.png' alt='Hospital 1' fill />
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
