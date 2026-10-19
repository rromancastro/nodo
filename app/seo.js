export const siteUrl = 'https://www.tecnonodo.com.ar';
export const siteTitle = 'NODO | Sistemas técnicos y tecnologías de automatización';
export const siteDescription = 'Proveedores de redes de gases medicinales, llamados de enfermería, puertas automáticas y correo neumático para infraestructuras hospitalarias, corporativas e industriales.';

export function createPageMetadata(path, title = siteTitle, description = siteDescription) {
    return {
        title,
        description,
        alternates: { canonical: path },
        openGraph: {
            type: 'website',
            locale: 'es_AR',
            siteName: 'NODO',
            url: path,
            title,
            description,
            images: [{ url: '/og-image.png', width: 1424, height: 768, alt: siteTitle }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ['/og-image.png'],
        },
    };
}
