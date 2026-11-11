import { SplitH1 } from '@/app/components';
import './productosHeader.scss';
import { ParallaxImage } from '@/app/components/ParallaxImage/ParallaxImage';

export const ProductosHeader = () => {
    return <section id='productosHeader'>
        <SplitH1 id='productosHeaderTitle'>
            Calidad certificada.
        </SplitH1>
        <ParallaxImage className="headerImage" src={'/productos/header.avif'} alt='Imagen de tecnologia' />
    </section>
}
