import Link from 'next/link'
import styles from './Facturas.module.css'

export const fetchFacturas = () => {
    return fetch("https://my-json-server.typicode.com/EmaPesci06/api_facturas/db", { cache: "no-store" }).then(res => res.json())
}


export default async function Facturas() {
    const posts = await fetchFacturas()

    const { facturas } = posts

    return (
        <section className={styles.section}>
            <h2 style={{ textAlign: 'center' }}>Resumen de todas las facturas</h2>
            {facturas.map(facturas => (
                <article className={styles.article} key={facturas.id}>
                    <Link href={`/pagos/factura/${facturas.id}`}>
                        <p className={styles.monto}><b>Monto: </b>{facturas.monto} $</p>
                        <p className={styles.descripcion}><b>Descripcion: </b>{facturas.descripcion}</p>
                        <p className={styles.fecha}><b>Fecha: </b>{facturas.fecha}</p>
                    </Link>
                </article>
            ))}
        </section>)
}
