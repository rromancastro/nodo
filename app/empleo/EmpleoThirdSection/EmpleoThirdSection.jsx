import { SplitH2, SplitP } from '@/app/components';
import './empleoThirdSection.scss';
import Link from 'next/link';

export const EmpleoThirdSection = () => {
    return <section id='empleoThirdSection'>
        <article>
            <video src="/empleo/thirdSection.webm" muted loop playsInline autoPlay></video>
            <SplitH2 id={'empleoThirdSectionTitle'}>
                Conocé nuestros proyectos.
            </SplitH2>
            <SplitP id={'empleoThirdSectionText'}>
                Participamos en el desarrollo de más de 20 hospitales argentinos y trabajamos con empresas de referencia como Sodimac y Falabella.
            </SplitP>
            <Link href='/proyectos' className='buttonContacto disabled'>
                Ver proyectos
            </Link>
        </article>
    </section>
}
