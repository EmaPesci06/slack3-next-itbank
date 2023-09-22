import Image from "next/image"
import Link from "next/link"

export default function HeaderLogin() {
    return (
        <>
            <header className="header">
                <div className="contenedor">
                    <Link href="/">
                        <Image src="/assets/logo.png" width={100} height={100} alt="logo" className="img" />
                    </Link>
                    <h1 className="encabezado">Banco Innovación Financiera</h1>
                </div>
            </header>
        </>
    )
}