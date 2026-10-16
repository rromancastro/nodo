import { SplitH1 } from '@/app/components';
import './nosotrosHeader.scss';
import { ParallaxImage } from '@/app/components/ParallaxImage/ParallaxImage';

export const NosotrosHeader = () => {
    return <section id='nosotrosHeader'>
        <SplitH1 id={'nosotrosHeaderTitle'}>
            Diseño. Excelencia. Seguridad.
        </SplitH1>
        <ParallaxImage className="headerImage" src={'/nosotros/header.png'} alt='Imagen de tecnologia' />
    </section>
}
