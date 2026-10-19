import { SplitH3 } from '@/app/components';
import './homeSeventhSection.scss';
import Image from 'next/image';
import Link from 'next/link';

export const HomeSeventhSection = () => {
    return <section id='homeSeventhSection'>
        <div id='homeSeventhSectionContent'>
            <SplitH3 id='homeSeventhSectionTitle'>
                Somos un equipo de ingenieros y técnicos con un propósito claro: desarrollar entornos más sostenibles y productivos.
            </SplitH3>
            <div id='homeSeventhSectionImageContainer'>
                <Image src={'/home/homeSeventhSection.avif'} alt='Trabajadores' height={500} width={500} />
            </div>
            <div id='homeSeventhSectionCard'>
                <h3>Trabajemos juntos.</h3>
                <Link href={'/empleo'} className='buttonContacto' >Postulaciones</Link>
            </div>
        </div>
    </section>
}
