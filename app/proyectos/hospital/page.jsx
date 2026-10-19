import { ProyectoPage } from "@/app/components";
import { createPageMetadata } from '../../seo';

export const metadata = createPageMetadata('/proyectos/hospital', 'Proyecto hospitalario | NODO');

export default function Hospital1() {
    return <ProyectoPage />
}
