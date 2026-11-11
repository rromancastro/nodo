import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Footer, Navbar, ProductosCategoriaComponent } from '@/app/components';
import { ProductoDetalle } from '@/app/components/ProductoDetalle/ProductoDetalle';
import { HomeFifthSection } from '@/app/home';
import { createPageMetadata } from '@/app/seo';
import { categorias, categoriaHref, productoHref, agruparProductos, subcategoriaNombre } from '../catalogo';
import '../productoPages.scss';

export function generateStaticParams() { return categorias.map(({ slug }) => ({ categoria: slug })); }
export async function generateMetadata({ params }) {
    const { categoria: slug } = await params;
    const categoria = categorias.find((item) => item.slug === slug);
    return categoria ? createPageMetadata(categoriaHref(categoria), `${categoria.name} | NODO`) : {};
}
export default async function CategoriaPage({ params }) {
    const { categoria: slug } = await params;
    const categoria = categorias.find((item) => item.slug === slug);
    if (!categoria) notFound();
    const medicinal = slug === 'gases-medicinales';
    const groupOrder = ['Reguladores', 'Caudal', 'Frascos', 'Plug', 'equipamiento'];
    const grupos = medicinal ? agruparProductos(categoria).sort((a, b) =>
        groupOrder.findIndex((name) => a.name.startsWith(name)) - groupOrder.findIndex((name) => b.name.startsWith(name))) : [];
    return <>
        <Navbar />
        <main className={`productoPage categoriaPage${medicinal ? ' categoriaPageMedicinal' : ''}`}>
            <header className='productoPageHeader'>
                <div className='productoPageBack'>
                    <Link href='/productos' aria-label='Volver a Productos'><span aria-hidden='true'><Image src='/productos/flecha-figma.svg' alt='' width={21.5959} height={21.0708} unoptimized /></span></Link>
                    <span className='productoPageBackLabel'>Productos</span>
                    <span className='productoPageBackSeparator'> - </span>
                    {medicinal ? <h1 className='productoPageBackCategory'>{categoria.name}</h1> : <span className='productoPageBackCategory'>{categoria.name}</span>}
                </div>
                <div className='productoPageHero'><Image src={categoria.imgSrc} alt={categoria.name} fill sizes='100vw' priority /></div>
                {!medicinal && <h1>{categoria.name}</h1>}
            </header>
            {medicinal ? <div className='medicinalCatalogue'>{grupos.map((grupo, index) => <section key={grupo.name} className='productoPageGroup' aria-label={subcategoriaNombre(grupo.name)}>
                <ProductosCategoriaComponent catalogueOnly title={subcategoriaNombre(grupo.name)} number={index + 1}
                    imgSrc={grupo.products[0].imgSrc} href={productoHref(categoria, grupo.products[0])}
                    prodList={grupo.products.map((producto) => ({ ...producto, desc: undefined, href: productoHref(categoria, producto) }))}
                />
            </section>)}</div> : <section className='productoPageList' aria-label={`Productos de ${categoria.name}`}>
                {categoria.products.map((producto, index) => <ProductoDetalle key={producto.slug} producto={producto} inverted={index % 2 === 1} />)}
            </section>}
            <HomeFifthSection />
        </main>
        <Footer />
    </>;
}
