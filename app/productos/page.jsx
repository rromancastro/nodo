import { ProductosHeader } from '.';
import { Footer, Navbar, ProductosCategoriaComponent } from '../components';
import { HomeFifthSection } from '../home';
import { createPageMetadata } from '../seo';
import { categorias, categoriaHref, productosCarousel } from './catalogo';
import './productoPages.scss';

export const metadata = createPageMetadata('/productos', 'Productos y sistemas técnicos | NODO');
export default function Productos() {
    return <>
        <Navbar />
        <ProductosHeader />
        <main className='productosPage'>
            {categorias.map((categoria, index) => <ProductosCategoriaComponent
                key={categoria.slug} number={index + 1} title={categoria.name}
                imgSrc={categoria.imgSrc} href={categoriaHref(categoria)}
                prodList={productosCarousel(categoria)} inverted={index % 2 === 1}
            />)}
            <HomeFifthSection />
        </main>
        <Footer />
    </>;
}
