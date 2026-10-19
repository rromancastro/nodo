import { NosotrosFourthSection, NosotrosHeader, NosotrosSecondSection, NosotrosThirdSection } from ".";
import { Footer, Navbar } from "../components";
import { createPageMetadata } from '../seo';

export const metadata = createPageMetadata('/nosotros', 'Nosotros | NODO');

export default function NosotrosPage() {
    return <>
    <Navbar />
    <NosotrosHeader />
    <main>
        <NosotrosSecondSection />
        <NosotrosThirdSection />
        <NosotrosFourthSection />
    </main>
    <Footer />
    </>
}
