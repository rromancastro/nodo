export async function GET() {
    try {
        const response = await fetch(
            'https://countries.dev/countries?fields=name,alpha2Code,flag,flags,callingCodes',
            { next: { revalidate: 86400 } }
        );

        if (!response.ok) {
            return Response.json({ error: 'No se pudo cargar la lista de países' }, { status: response.status });
        }

        const countries = await response.json();
        return Response.json(countries);
    } catch (error) {
        console.error('Error al consultar Rest Countries:', error);
        return Response.json({ error: 'No se pudo conectar con Rest Countries' }, { status: 502 });
    }
}
