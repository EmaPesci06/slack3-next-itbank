import Link from "next/link";

export default function Funciones() {
    return (
        <div className="contenedorf">
            <h3>Funciones</h3>
            <ul className="menu">
                <li><Link href="/moneda" className="li">Conversion de Moneda</Link></li>
                <li><Link href="/prestamo" className="li">Calculadora de Prestamos</Link></li>
            </ul>
        </div>
    );
};