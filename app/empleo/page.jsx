import { EmpleoHeader, EmpleoSecondSection, EmpleoThirdSection } from ".";
import { Footer, Navbar } from "../components";
import { createPageMetadata } from '../seo';

export const metadata = createPageMetadata('/empleo', 'Trabajá con nosotros | NODO', 'Sumate al equipo de NODO. Conocé las oportunidades laborales y envianos tu perfil para trabajar en sistemas técnicos y tecnologías de automatización.');

export default function Empleo() {
    return <>
        <Navbar />
        <EmpleoHeader />
        <main>
            <EmpleoSecondSection />
            <EmpleoThirdSection />
        </main>
        <Footer />
    </>
}
