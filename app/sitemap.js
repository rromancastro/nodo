import { siteUrl } from './seo';

export default function sitemap() {
    return ['/', '/nosotros', '/productos', '/proyectos', '/proyectos/hospital', '/empleo']
        .map((path) => ({ url: `${siteUrl}${path === '/' ? '' : path}` }));
}
