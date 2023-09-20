import Link from "next/link";

export default function Menu() {
    return (
        <>
            <h3 className="navbarP">Menú</h3>
            <ul className="menuP">
                <li><Link href="/home" className="li">Inicio</Link></li>
                <li><Link href="/cuentas" className="li">Cuentas</Link></li>
                <li><Link href="/transferencias" className="li">Transferencias</Link></li>
                <li><Link href="/pagos" className="li">Pagos</Link></li>
            </ul>
        </>
    )
}