import { fetchFacturas } from "@/components/Facturas/Facturas"
import styles from '@/components/Facturas/Facturas.module.css'

export default async function PageFacturaId({ params }) {

    const data = await fetchFacturas()

    const { facturas } = data

    const { id } = params

    const factura = facturas.find(factura => factura.id == id)

    console.log(factura);

    return <div className={styles.contenedor}>
        <h2 className={styles.title}>Resumen de la factura</h2>
        <div className={styles.factura}>
            <h2>Monto de la factura: {factura.monto}$</h2>
            <h2>Fecha de la factura: {factura.fecha}</h2>
            <h2>Descripcion de la factura {factura.descripcion}</h2>
        </div>
    </div>
}