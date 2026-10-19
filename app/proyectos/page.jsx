import { ProyectosSection } from ".";
import { Footer, Navbar } from "../components";
import { createPageMetadata } from '../seo';

export const metadata = createPageMetadata('/proyectos', 'Proyectos | NODO');

export default function Proyectos() {
    return <>
        <Navbar />
        <main>
            <ProyectosSection />
        </main>
        <Footer />
    </>
}
