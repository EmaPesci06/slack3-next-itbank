import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
export default function Header() {
    return (
        <>
            <header className="header">
                <div className="contenedor">
                    <Link href="/home">
                        <Image src="/assets/logo.png" width={100} height={100} alt="logo" className="img" />
                    </Link>
                    <h1 className="encabezado">Banco Innovación Financiera</h1>
                    <Link href="/" className="logout">
                        <FontAwesomeIcon icon={faRightFromBracket} size="xl" style={{ color: "#ffffff", }} />
                    </Link>
                </div>
            </header>
        </>
    )
}