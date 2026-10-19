import { SplitH2, SplitP } from '@/app/components';
import './homeFifthSection.scss';
import Link from 'next/link';
import Image from 'next/image';

export const HomeFifthSection = () => {
    return <section id='homeFifthSection'>
        <article>
            <div>
                <SplitH2 id={'homeFifthSectionTitle'}>
                    Guardias Técnicas
                </SplitH2>
                <SplitP id={'homeFifthSectionTitle'}>
                    Mantenimiento preventivo y correctivo de sistemas de transporte neumático, gases medicinales y salas de máquinas.
                </SplitP>
                <SplitP id={'homeFifthSectionTitle2'}>
                    Nuestro compromiso es permanente. Disponemos de una línea específica ante urgencias.
                </SplitP>
                <Link href='https://wa.me/5491133966679?text=Hola%2C%20me%20gustaria%20solicitar%20mantenimiento' target='_blank' className='buttonContacto'>
                    Solicitar mantenimiento
                </Link>
            </div>
            <Image className='homeFifthSectionImg' src={'/home/HomeFifthSection.avif'} alt='Trabajador' height={500} width={500} />
            <Image className='homeFifthSectionImgMobile' src={'/home/HomeFifthSectionMobile.avif'} alt='Trabajador' height={500} width={500} />
        </article>
    </section>
}
