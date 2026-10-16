import { EmpleoHeader, EmpleoSecondSection, EmpleoThirdSection } from ".";
import { Footer, Navbar } from "../components";

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