import Link from "next/link"

export const getTarjetas = () => {
    return fetch("https://my-json-server.typicode.com/emaPesci06/api_tarjetas1/db").then(res => res.json())
}


export default async function TarjetasPage() {
    const data = await getTarjetas()
    const { tarjetas } = data

    return (
        <section style={{ display: "flex", justifyContent: "center", flexDirection: "column", margin: "0 auto" }}>
            <h2 style={{ textAlign: 'center' }}>Resumen de todas las facturas:</h2>
            {tarjetas.map(tarjeta => (
                <article key={tarjeta.id} style={{ border: "2px solid black", margin: "20px 0px" }}>
                    <Link href={`/cuentas/tarjetas/${tarjeta.id}`}>
                        <p style={{ color: "black" }}><b>Vencimiento de la tarjeta </b>{tarjeta.vencimiento}</p>
                        <p style={{ color: "black" }}><b>Nª Tarjeta: </b>{tarjeta.numero_tarjeta} $</p>
                        <p style={{ color: "black" }}><b>Marca de la tarjeta:</b>{tarjeta.marca}</p>
                    </Link>
                </article>
            ))}
        </section>)
}
