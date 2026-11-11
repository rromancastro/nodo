import categorias from './productos.json';
export { categorias };
export const categoriaHref = (categoria) => `/productos/${categoria.slug}`;
export const tieneFichaProducto = (categoria) => categoria.slug === 'gases-medicinales';
export const productoHref = (categoria, producto) => tieneFichaProducto(categoria) ? `${categoriaHref(categoria)}/${producto.slug}` : categoriaHref(categoria);
export const subcategoriaNombre = (name) => ({ 'Caudalímetro (flowmetters)': 'Caudalímetros', equipamiento: 'Equipamiento', Plug: 'Plugs' }[name] || name);
export function agruparProductos(categoria) {
    return [...new Set(categoria.products.map((producto) => producto.subcategory))].map((name) => ({ name, products: categoria.products.filter((producto) => producto.subcategory === name) }));
}
export function productosCarousel(categoria) {
    return (categoria.slug === 'gases-medicinales' ? agruparProductos(categoria).map((grupo) => grupo.products[0]) : categoria.products).map((producto) => ({ ...producto, href: productoHref(categoria, producto) }));
}
