import { siteUrl } from './seo';
import proyectos from './proyectos/proyectos.json';
import { categorias, categoriaHref, productoHref, tieneFichaProducto } from './productos/catalogo';

export default function sitemap() {
    return ['/', '/nosotros', '/productos', '/proyectos', '/empleo', ...proyectos.map(({ slug }) => '/proyectos/' + slug), ...categorias.flatMap((categoria) => [categoriaHref(categoria), ...(tieneFichaProducto(categoria) ? categoria.products.map((producto) => productoHref(categoria, producto)) : [])])]
        .map((path) => ({ url: `${siteUrl}${path === '/' ? '' : path}` }));
}
