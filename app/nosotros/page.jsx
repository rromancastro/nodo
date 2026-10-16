import { NosotrosFourthSection, NosotrosHeader, NosotrosSecondSection, NosotrosThirdSection } from ".";
import { Footer, Navbar } from "../components";

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