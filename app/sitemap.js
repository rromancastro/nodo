import { siteUrl } from './seo';
import proyectos from './proyectos/proyectos.json';

export default function sitemap() {
    return ['/', '/nosotros', '/productos', '/proyectos', '/empleo', ...proyectos.map(({ slug }) => '/proyectos/' + slug)]
        .map((path) => ({ url: `${siteUrl}${path === '/' ? '' : path}` }));
}
