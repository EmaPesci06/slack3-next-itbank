import { getTarjetas } from "../page"

export default async function IdTarjeta({ params }) {
    const { id } = params

    const data = await getTarjetas()
    const { tarjetas } = data

    const tarjeta = tarjetas.find(tarjeta => tarjeta.id == id)

    console.log(tarjetas);


    return <>{id}</>
}