import Link from 'next/link';
import './footer.scss';

export const Footer = () => {
    return <footer id='footer'>
        <div>
            <img src="/isologo-blanco.png" alt="Logo Nodo" />
            <h3>Fabricamos, instalamos y mantenemos.</h3>
        </div>

        <div>
            <p>Atención al cliente: +54 9 11 2611-0033</p>
            <p>Ventas: +54 9 11 6576 7674</p>
            <p>ventas@tecnonodo.com</p>
            <p>Buenos Aires, Argentina</p>
        </div>

        <div>
            <p>
                2026 Nodo© by Duppla Studio©
            </p>
            <p>
                <Link href={'/'}>Cookies</Link>
                <Link href={'/'}>Políticas de privacidad</Link>
                <Link href={'/'}>Términos de uso</Link>
            </p>
        </div>
    </footer>
}
