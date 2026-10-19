import { SplitH1 } from '@/app/components';
import '../../nosotros/NosotrosHeader/nosotrosHeader.scss';
import { ParallaxImage } from '@/app/components/ParallaxImage/ParallaxImage';

export const EmpleoHeader = () => {
    return <section id='nosotrosHeader'>
        <SplitH1 id={'empleoHeaderTitle'}>
            Empleo
        </SplitH1>
        <ParallaxImage className="headerImage" src={'/empleo/header.avif'} alt='Imagen de tecnologia' />
    </section>
}
