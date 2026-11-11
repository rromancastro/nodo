import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Footer, Navbar } from '@/app/components';
import { ProductoDetalle } from '@/app/components/ProductoDetalle/ProductoDetalle';
import { ProductosRelacionados } from '@/app/components/ProductosRelacionados/ProductosRelacionados';
import { HomeFifthSection } from '@/app/home';
import { createPageMetadata } from '@/app/seo';
import { categorias, categoriaHref, productoHref, subcategoriaNombre, tieneFichaProducto } from '../../catalogo';
import '../../productoPages.scss';

export const dynamicParams = false;

export function generateStaticParams() {
    return categorias.filter(tieneFichaProducto).flatMap((categoria) => categoria.products.map((producto) => ({ categoria: categoria.slug, producto: producto.slug })));
}
export async function generateMetadata({ params }) {
    const route = await params;
    const categoria = categorias.find((item) => item.slug === route.categoria);
    if (!categoria || !tieneFichaProducto(categoria)) notFound();
    const producto = categoria?.products.find((item) => item.slug === route.producto);
    return producto ? createPageMetadata(productoHref(categoria, producto), `${producto.name} | NODO`, producto.desc || undefined) : {};
}
export default async function ProductoPage({ params }) {
    const route = await params;
    const categoria = categorias.find((item) => item.slug === route.categoria);
    if (!categoria || !tieneFichaProducto(categoria)) notFound();
    const producto = categoria?.products.find((item) => item.slug === route.producto);
    if (!producto) notFound();
    const relacionados = categoria.products
        .filter((item) => !producto.subcategory || item.subcategory === producto.subcategory)
        .map((item) => ({ ...item, href: productoHref(categoria, item) }));
    return <>
        <Navbar />
        <main className='productoPage productoFichaPage'>
            <header className='productoPageHeader'>
                <div className='productoPageBack'>
                    <Link href={categoriaHref(categoria)} aria-label={`Volver a ${categoria.name}`}><span aria-hidden='true'><Image src='/productos/flecha-figma.svg' alt='' width={21.5959} height={21.0708} unoptimized /></span></Link>
                    {categoria.name}
                </div>
            </header>
            <section className='productoPageList'>
                <h1>{subcategoriaNombre(producto.subcategory) || producto.name}</h1>
                <ProductoDetalle producto={producto} medicinal={categoria.slug === 'gases-medicinales'} />
            </section>
            {relacionados.length > 1 && <ProductosRelacionados productos={relacionados} selectedSlug={producto.slug} />}
            <HomeFifthSection />
        </main>
        <Footer />
    </>;
}
