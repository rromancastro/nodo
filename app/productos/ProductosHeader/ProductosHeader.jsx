import { SplitH1 } from '@/app/components';
import '@/app/nosotros/NosotrosHeader/nosotrosHeader.scss';
import { ParallaxImage } from '@/app/components/ParallaxImage/ParallaxImage';

export const ProductosHeader = () => {
    return <section id='nosotrosHeader'>
        <SplitH1 id='nosotrosHeaderTitle'>
            Calidad certificada.
        </SplitH1>
        <ParallaxImage className="headerImage" src={'/productos/header.png'} alt='Imagen de tecnologia' />
    </section>
}
