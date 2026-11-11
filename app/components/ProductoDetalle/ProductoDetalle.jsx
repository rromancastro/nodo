import Image from 'next/image';
import Link from 'next/link';
import './productoDetalle.scss';

export const ProductoDetalle = ({ producto, href, inverted = false, medicinal = false }) => <article className={`productoDetalle${inverted ? ' productoDetalleInverted' : ''}${medicinal ? ' productoDetalleMedicinal' : ''}`}>
    <div className='productoDetalleImage'><Image src={producto.imgSrc} alt={producto.name} fill sizes='(max-width: 768px) 90vw, 560px' unoptimized={producto.imageFit === 'cover'} /></div>
    <div className='productoDetalleText'>
        <h3>{href ? <Link href={href}>{producto.name}</Link> : producto.name}</h3>
        {[[ 'Descripción', producto.desc ], [ 'Uso', producto.use ], [ 'Observaciones', producto.notes ]].map(([label, value]) => value && <div key={label}><p className='productoDetalleLabel'>{label}</p><p>{value}</p></div>)}
    </div>
</article>;
