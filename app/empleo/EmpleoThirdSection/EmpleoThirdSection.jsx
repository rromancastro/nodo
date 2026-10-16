import { SplitH2, SplitP } from '@/app/components';
import './empleoThirdSection.scss';
import Link from 'next/link';

export const EmpleoThirdSection = () => {
    return <section id='empleoThirdSection'>
        <article>
            <video src="/empleo/thirdSection.webm" muted loop playsInline autoPlay></video>
            <SplitH2 id={'empleoThirdSectionTitle'}>
                Conocé nuestro trabajo.
            </SplitH2>
            <SplitP id={'empleoThirdSectionText'}>
                Lorem ipsum dolor sit amet consectetur. Amet luctus nunc facilisis sem mauris fames nunc. Aliquet eleifend nullam id pellentesque facilisis augue. Fusce mauris sollicitudin elementum ut eget. Sed augue feugiat ipsum morbi sed.
            </SplitP>
            <Link href='/proyectos' className='buttonContacto'>
                Ver proyectos
            </Link>
        </article>
    </section>
}
