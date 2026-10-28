import { notFound } from 'next/navigation';
import { ProyectoPage } from '@/app/components';
import { createPageMetadata } from '../../seo';
import proyectos from '../proyectos.json';

export const dynamicParams = false;

export function generateStaticParams() {
    return proyectos.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const proyecto = proyectos.find((item) => item.slug === slug);
    if (!proyecto) notFound();
    return createPageMetadata('/proyectos/' + slug, proyecto.institucion + ' | NODO', proyecto.descripcion);
}

export default async function Proyecto({ params }) {
    const { slug } = await params;
    const proyecto = proyectos.find((item) => item.slug === slug);
    if (!proyecto) notFound();
    return <ProyectoPage proyecto={proyecto} />;
}
