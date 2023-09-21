import Link from "next/link"

export default function HeaderLogin() {
    return (
        <>
            <header className="header">
                <div className="contenedor">
                    <Link href="/">
                        <img src="/assets/logo.png" alt="logo" className="img" />
                    </Link>
                    <h1 className="encabezado">Banco Innovación Financiera</h1>
                </div>
            </header>
        </>
    )
}