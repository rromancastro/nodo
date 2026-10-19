import { ProductosHeader } from ".";
import { Footer, Navbar, ProductosCategoriaComponent } from "../components";
import { HomeFifthSection } from "../home";
import { createPageMetadata } from '../seo';

export const metadata = createPageMetadata('/productos', 'Productos y sistemas técnicos | NODO');

const puertasAutomaticasProdList = [
    {
        name: 'Semiherméticas',
        desc: 'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        name: 'Herméticas',
        desc: 'Lorem ipsum dolor sit amet consectetur.'
    },
]
const CorreoNeumaticoProdList = [
    {
        name: 'Sistema de correo',
        desc: 'Adaptable a cada infraestructura.'
    },
]
const PolicanalesProdList = [
    {
        name: 'Administrativos',
        desc: 'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        name: 'Comerciales',
        desc: 'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        name: 'Industriales',
        desc: 'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        name: 'Sanitarios',
        desc: 'Lorem ipsum dolor sit amet consectetur.'
    },
]
const RoboticaProdList = [
    {
        name: 'Athena System - Sinteco',
        desc: 'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        name: 'Go Cart - Sumetzberger',
        desc: 'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        name: 'SortPro - ASP Lab Automation',
        desc: 'Lorem ipsum dolor sit amet consectetur.'
    },
]

export default function Productos() {
    return <>
        <Navbar />
        <ProductosHeader />
        <main>
            <ProductosCategoriaComponent
                number={1}
            />
            <ProductosCategoriaComponent
                title="Puertas Automáticas"
                prodList={puertasAutomaticasProdList}
                inverted={true}
                imgSrc="/home/PuertasAutomaticas.png"
                number={2}
            />
            <ProductosCategoriaComponent
                title="Correo Neumático"
                prodList={CorreoNeumaticoProdList}
                imgSrc="/home/CorreoNeumatico.png"
                number={3}
            />
            <ProductosCategoriaComponent
                title="Policanales"
                prodList={PolicanalesProdList}
                inverted={true}
                imgSrc="/home/Policanales.png"
                number={4}
            />
            <ProductosCategoriaComponent
                title="Robótica"
                prodList={RoboticaProdList}
                imgSrc="/home/Robotica.png"
                number={5}
            />
            <HomeFifthSection />
        </main>
        <Footer />
    </>
}
