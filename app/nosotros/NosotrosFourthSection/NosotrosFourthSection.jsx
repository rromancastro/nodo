import { SplitH2, SplitP } from '@/app/components';
import './nosotrosFourthSection.scss';
import Link from 'next/link';

export const NosotrosFourthSection = () => {
    return <section id='nosotrosFourthSection'>
        <article>
            <SplitH2 id='nosotrosFourthSectionTitle'>
                Proyectemos juntos.
            </SplitH2>
            <SplitP id='nosotrosFourthSectionP'>
                Ejecutamos grandes ideas a través de sistemas técnicos.
            </SplitP>
            <Link href='https://wa.me/5491126110033?text=Hola%21%20Estoy%20interesado%20en%20mas%20informaci%C3%B3n' target='_blank' className='buttonContacto'>
                Contacto
            </Link>
        </article>
    </section>
}
